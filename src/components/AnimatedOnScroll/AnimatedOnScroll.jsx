import React, { useState, useEffect, useRef, useMemo } from "react";
import useInView from "../../utils/useInView";
import { motion, useAnimation } from "framer-motion";
import { 
  isMobile, 
  hasLowPerformance, 
  getOptimizedAnimationSettings,
  prefersReducedMotion 
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
  const [ref, inView] = useInView({ threshold, triggerOnce: once });
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);
  const [deviceOptimizations, setDeviceOptimizations] = useState({
    isMobile: false,
    lowPerformance: false,
    reducedMotion: false
  });

  // Detect device capabilities for performance optimizations
  useEffect(() => {
    const checkDeviceCapabilities = () => {
      setDeviceOptimizations({
        isMobile: isMobile(),
        lowPerformance: hasLowPerformance(),
        reducedMotion: prefersReducedMotion()
      });
    };
    
    checkDeviceCapabilities();
    window.addEventListener('resize', checkDeviceCapabilities);
    return () => window.removeEventListener('resize', checkDeviceCapabilities);
  }, []);

  useEffect(() => {
    if (inView && !hasAnimated) {
      controls.start("visible");
      setHasAnimated(true);
    } else if (!inView && !once) {
      controls.start("hidden");
      setHasAnimated(false);
    }
  }, [inView, controls, once, hasAnimated]);

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

  // Optimized easing curves
  const easings = useMemo(() => ({
    smooth: [0.25, 0.1, 0.25, 1],
    easeOut: [0.4, 0, 0.2, 1],
    easeIn: [0.4, 0, 1, 1],
    easeInOut: [0.4, 0, 0.2, 1],
    // Simplified easing for mobile/low performance
    mobile: [0.25, 0.46, 0.45, 0.94]
  }), []);

  const getVariants = useMemo(() => {
    const { duration: optDuration, distance: optDistance, delay: optDelay, damping: optDamping, stiffness: optStiffness } = optimizedSettings;
    const { isMobile: mobile, lowPerformance, reducedMotion } = deviceOptimizations;
    
    // Disable animations if user prefers reduced motion
    if (reducedMotion) {
      return {
        hidden: { opacity: 1, y: 0, x: 0, scale: 1, filter: "none" },
        visible: { opacity: 1, y: 0, x: 0, scale: 1, filter: "none" }
      };
    }
    
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

    switch (animation) {
      case "fade-in-up":
        return {
          hidden: {
            opacity: 0,
            y: optDistance,
            filter: mobile || lowPerformance ? "none" : "blur(2px)"
          },
          visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
              ...baseTransition,
              opacity: { duration: optDuration * 0.6, ease: easings.easeOut },
              y: { duration: optDuration, ease: easings.smooth },
              filter: { duration: optDuration * 0.8, ease: easings.easeOut }
            }
          }
        };

      case "fade-in-down":
        return {
          hidden: {
            opacity: 0,
            y: -optDistance,
            filter: mobile || lowPerformance ? "none" : "blur(2px)"
          },
          visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
              ...baseTransition,
              opacity: { duration: optDuration * 0.6, ease: easings.easeOut },
              y: { duration: optDuration, ease: easings.smooth },
              filter: { duration: optDuration * 0.8, ease: easings.easeOut }
            }
          }
        };

      case "slide-in-left":
        return {
          hidden: {
            opacity: 0,
            x: -optDistance,
            scale: mobile || lowPerformance ? 0.98 : 0.95
          },
          visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
              ...baseTransition,
              opacity: { duration: optDuration * 0.5, ease: easings.easeOut },
              x: { duration: optDuration, ease: easings.smooth },
              scale: { duration: optDuration * 0.8, ease: easings.smooth }
            }
          }
        };

      case "slide-in-right":
        return {
          hidden: {
            opacity: 0,
            x: optDistance,
            scale: mobile || lowPerformance ? 0.98 : 0.95
          },
          visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
              ...baseTransition,
              opacity: { duration: optDuration * 0.5, ease: easings.easeOut },
              x: { duration: optDuration, ease: easings.smooth },
              scale: { duration: optDuration * 0.8, ease: easings.smooth }
            }
          }
        };

      case "scale-in":
        return {
          hidden: {
            opacity: 0,
            scale: 0.8,
            rotateY: mobile || lowPerformance ? 0 : -15
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
            filter: mobile || lowPerformance ? "none" : "blur(2px)"
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
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: baseTransition
          }
        };
    }
  }, [animation, optimizedSettings, deviceOptimizations, easings, spring, stagger]);

  return (
    <motion.div
      ref={ref}
      className={`animated-on-scroll ${animation}`}
      initial="hidden"
      animate={controls}
      variants={getVariants}
      style={{
        willChange: deviceOptimizations.isMobile || deviceOptimizations.lowPerformance ? "auto" : "transform, opacity, filter",
        backfaceVisibility: "hidden",
        perspective: deviceOptimizations.isMobile || deviceOptimizations.lowPerformance ? "none" : 1000,
        transform: deviceOptimizations.isMobile || deviceOptimizations.lowPerformance ? "translateZ(0)" : undefined
      }}
    >
      {children}
    </motion.div>
  );
} 