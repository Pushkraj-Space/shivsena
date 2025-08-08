import React, { useState, useEffect, useRef, useMemo } from "react";
import useInView from "../../utils/useInView";
import { motion, useAnimation } from "framer-motion";
import {
  isMobile,
  hasLowPerformance,
  getOptimizedAnimationSettings,
  prefersReducedMotion,
  shouldDisableAnimations,
  getMobileObserverOptions
} from "../../utils/mobileOptimization";
import "./AnimatedOnScroll.css";

export default function AnimatedOnScroll({
  children,
  animation = "fade-in-up",
  delay = 0,
  distance = 40,
  duration = 0.8,
  once = true,
  threshold = 0.15,
  stagger = 0,
  spring = false,
  damping = 15,
  stiffness = 100
}) {
  // Use mobile-optimized observer options
  const observerOptions = getMobileObserverOptions();
  const [ref, inView] = useInView({
    threshold: observerOptions.threshold,
    triggerOnce: observerOptions.triggerOnce
  });

  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);
  const [deviceOptimizations, setDeviceOptimizations] = useState({
    isMobile: false,
    lowPerformance: false,
    reducedMotion: false,
    animationsDisabled: false
  });

  // Detect device capabilities for performance optimizations
  useEffect(() => {
    const checkDeviceCapabilities = () => {
      const mobile = isMobile();
      const lowPerformance = hasLowPerformance();
      const reducedMotion = prefersReducedMotion();
      const animationsDisabled = shouldDisableAnimations();

      setDeviceOptimizations({
        isMobile: mobile,
        lowPerformance: lowPerformance,
        reducedMotion: reducedMotion,
        animationsDisabled: animationsDisabled
      });
    };

    checkDeviceCapabilities();

    // Only add resize listener if not on mobile
    if (!isMobile()) {
      window.addEventListener('resize', checkDeviceCapabilities);
      return () => window.removeEventListener('resize', checkDeviceCapabilities);
    }
  }, []);

  useEffect(() => {
    if (inView && !hasAnimated && !deviceOptimizations.animationsDisabled) {
      controls.start("visible");
      setHasAnimated(true);
    } else if (!inView && !once && !deviceOptimizations.animationsDisabled) {
      controls.start("hidden");
      setHasAnimated(false);
    }
  }, [inView, controls, once, hasAnimated, deviceOptimizations.animationsDisabled]);

  // Get optimized settings based on device capabilities
  const optimizedSettings = useMemo(() => {
    const baseSettings = {
      duration,
      distance,
      delay,
      damping,
      stiffness
    };

    return getOptimizedAnimationSettings(baseSettings);
  }, [duration, distance, delay, damping, stiffness]);

  // Simplified easing curves for mobile
  const easings = useMemo(() => ({
    smooth: [0.25, 0.1, 0.25, 1],
    easeOut: [0.4, 0, 0.2, 1],
    easeIn: [0.4, 0, 1, 1],
    easeInOut: [0.4, 0, 0.2, 1],
    // Very simple easing for mobile/low performance
    mobile: [0.25, 0.46, 0.45, 0.94],
    // Ultra-simple for very low performance devices
    ultraSimple: [0.4, 0, 0.6, 1]
  }), []);

  const getVariants = useMemo(() => {
    const { duration: optDuration, distance: optDistance, delay: optDelay, damping: optDamping, stiffness: optStiffness } = optimizedSettings;
    const { isMobile: mobile, lowPerformance, reducedMotion, animationsDisabled } = deviceOptimizations;

    // Disable animations if user prefers reduced motion or device can't handle them
    if (reducedMotion || animationsDisabled) {
      return {
        hidden: { opacity: 1, y: 0, x: 0, scale: 1, filter: "none" },
        visible: { opacity: 1, y: 0, x: 0, scale: 1, filter: "none" }
      };
    }

    // Use simpler transitions for mobile
    const baseTransition = spring && !mobile && !lowPerformance ? {
      type: "spring",
      damping: optDamping,
      stiffness: optStiffness,
      delay: optDelay + stagger
    } : {
      duration: optDuration,
      ease: mobile || lowPerformance ? easings.mobile : easings.smooth,
      delay: optDelay + stagger
    };

    // Simplified animation variants for mobile
    switch (animation) {
      case "fade-in-up":
        return {
          hidden: {
            opacity: 0,
            y: mobile ? optDistance * 0.8 : optDistance, // Keep some distance for visual effect
            filter: mobile || lowPerformance ? "none" : "blur(1px)" // No blur on mobile
          },
          visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
              ...baseTransition,
              opacity: { duration: optDuration * 0.6, ease: easings.easeOut }, // Keep some duration
              y: { duration: optDuration, ease: mobile ? easings.mobile : easings.smooth },
              filter: { duration: optDuration * 0.8, ease: easings.easeOut }
            }
          }
        };

      case "fade-in-down":
        return {
          hidden: {
            opacity: 0,
            y: mobile ? -optDistance * 0.8 : -optDistance,
            filter: mobile || lowPerformance ? "none" : "blur(1px)"
          },
          visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
              ...baseTransition,
              opacity: { duration: optDuration * 0.6, ease: easings.easeOut },
              y: { duration: optDuration, ease: mobile ? easings.mobile : easings.smooth },
              filter: { duration: optDuration * 0.8, ease: easings.easeOut }
            }
          }
        };

      case "slide-in-left":
        return {
          hidden: {
            opacity: 0,
            x: mobile ? -optDistance * 0.8 : -optDistance,
            scale: mobile ? 0.98 : 0.95 // Keep some scale change for visual effect
          },
          visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
              ...baseTransition,
              opacity: { duration: optDuration * 0.5, ease: easings.easeOut },
              x: { duration: optDuration, ease: mobile ? easings.mobile : easings.smooth },
              scale: { duration: optDuration * 0.8, ease: easings.smooth }
            }
          }
        };

      case "slide-in-right":
        return {
          hidden: {
            opacity: 0,
            x: mobile ? optDistance * 0.8 : optDistance,
            scale: mobile ? 0.98 : 0.95
          },
          visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
              ...baseTransition,
              opacity: { duration: optDuration * 0.5, ease: easings.easeOut },
              x: { duration: optDuration, ease: mobile ? easings.mobile : easings.smooth },
              scale: { duration: optDuration * 0.8, ease: easings.smooth }
            }
          }
        };

      case "scale-in":
        return {
          hidden: {
            opacity: 0,
            scale: 0.9,
            rotateY: mobile ? 0 : -10 // No 3D transforms on mobile
          },
          visible: {
            opacity: 1,
            scale: 1,
            rotateY: 0,
            transition: {
              ...baseTransition,
              opacity: { duration: optDuration * 0.6, ease: easings.easeOut },
              scale: { duration: optDuration, ease: easings.smooth },
              rotateY: { duration: optDuration * 0.8, ease: easings.smooth }
            }
          }
        };

      case "fade-in":
        return {
          hidden: {
            opacity: 0,
            filter: mobile || lowPerformance ? "none" : "blur(1px)"
          },
          visible: {
            opacity: 1,
            filter: "blur(0px)",
            transition: {
              ...baseTransition,
              opacity: { duration: optDuration * 0.8, ease: easings.easeOut },
              filter: { duration: optDuration * 0.6, ease: easings.easeOut }
            }
          }
        };

      default:
        return {
          hidden: { opacity: 0, y: mobile ? 15 : 20 }, // Keep some movement
          visible: {
            opacity: 1,
            y: 0,
            transition: baseTransition
          }
        };
    }
  }, [animation, optimizedSettings, deviceOptimizations, easings, spring, stagger]);

  // If animations are disabled, render without motion
  if (deviceOptimizations.animationsDisabled) {
    return <div ref={ref}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={`animated-on-scroll ${animation}`}
      initial="hidden"
      animate={controls}
      variants={getVariants}
      style={{
        willChange: deviceOptimizations.isMobile || deviceOptimizations.lowPerformance ? "transform, opacity" : "transform, opacity, filter",
        backfaceVisibility: "hidden",
        perspective: deviceOptimizations.isMobile || deviceOptimizations.lowPerformance ? "none" : 1000,
        transform: deviceOptimizations.isMobile || deviceOptimizations.lowPerformance ? "translateZ(0)" : undefined
      }}
    >
      {children}
    </motion.div>
  );
} 