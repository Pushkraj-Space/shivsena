import React, { useState, useEffect, useRef } from "react";
import useInView from "../../utils/useInView";
import { motion, useAnimation, useSpring, useTransform } from "framer-motion";
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

  useEffect(() => {
    if (inView && !hasAnimated) {
      controls.start("visible");
      setHasAnimated(true);
    } else if (!inView && !once) {
      controls.start("hidden");
      setHasAnimated(false);
    }
  }, [inView, controls, once, hasAnimated]);

  // Professional easing curves
  const easings = {
    smooth: [0.25, 0.1, 0.25, 1], // Smooth cubic-bezier
    bounce: [0.68, -0.55, 0.265, 1.55], // Bouncy
    elastic: [0.175, 0.885, 0.32, 1.275], // Elastic
    easeOut: [0.4, 0, 0.2, 1], // Material Design ease-out
    easeIn: [0.4, 0, 1, 1], // Material Design ease-in
    easeInOut: [0.4, 0, 0.2, 1], // Material Design ease-in-out
    sharp: [0.4, 0, 0.6, 1], // Sharp transition
  };

  const getVariants = () => {
    const baseTransition = spring ? {
      type: "spring",
      damping,
      stiffness,
      delay: delay + stagger
    } : {
      duration,
      ease: easings.smooth,
      delay: delay + stagger
    };

    switch (animation) {
      case "fade-in-up":
        return {
          hidden: {
            opacity: 0,
            y: distance,
            filter: "blur(4px)"
          },
          visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
              ...baseTransition,
              opacity: { duration: duration * 0.6, ease: easings.easeOut },
              y: { duration: duration, ease: easings.smooth },
              filter: { duration: duration * 0.8, ease: easings.easeOut }
            }
          }
        };

      case "fade-in-down":
        return {
          hidden: {
            opacity: 0,
            y: -distance,
            filter: "blur(4px)"
          },
          visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
              ...baseTransition,
              opacity: { duration: duration * 0.6, ease: easings.easeOut },
              y: { duration: duration, ease: easings.smooth },
              filter: { duration: duration * 0.8, ease: easings.easeOut }
            }
          }
        };

      case "slide-in-left":
        return {
          hidden: {
            opacity: 0,
            x: -distance,
            scale: 0.95
          },
          visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
              ...baseTransition,
              opacity: { duration: duration * 0.5, ease: easings.easeOut },
              x: { duration: duration, ease: easings.smooth },
              scale: { duration: duration * 0.8, ease: easings.elastic }
            }
          }
        };

      case "slide-in-right":
        return {
          hidden: {
            opacity: 0,
            x: distance,
            scale: 0.95
          },
          visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
              ...baseTransition,
              opacity: { duration: duration * 0.5, ease: easings.easeOut },
              x: { duration: duration, ease: easings.smooth },
              scale: { duration: duration * 0.8, ease: easings.elastic }
            }
          }
        };

      case "scale-in":
        return {
          hidden: {
            opacity: 0,
            scale: 0.8,
            rotateY: -15
          },
          visible: {
            opacity: 1,
            scale: 1,
            rotateY: 0,
            transition: {
              ...baseTransition,
              opacity: { duration: duration * 0.6, ease: easings.easeOut },
              scale: { duration: duration, ease: easings.elastic },
              rotateY: { duration: duration * 0.8, ease: easings.smooth }
            }
          }
        };

      case "flip-in":
        return {
          hidden: {
            opacity: 0,
            rotateX: 90,
            scale: 0.8
          },
          visible: {
            opacity: 1,
            rotateX: 0,
            scale: 1,
            transition: {
              ...baseTransition,
              opacity: { duration: duration * 0.4, ease: easings.easeOut },
              rotateX: { duration: duration, ease: easings.bounce },
              scale: { duration: duration * 0.8, ease: easings.elastic }
            }
          }
        };

      case "zoom-in":
        return {
          hidden: {
            opacity: 0,
            scale: 0.3,
            filter: "blur(8px)"
          },
          visible: {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            transition: {
              ...baseTransition,
              opacity: { duration: duration * 0.5, ease: easings.easeOut },
              scale: { duration: duration, ease: easings.elastic },
              filter: { duration: duration * 0.6, ease: easings.easeOut }
            }
          }
        };

      case "slide-up-fade":
        return {
          hidden: {
            opacity: 0,
            y: distance * 1.5,
            filter: "blur(2px)"
          },
          visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
              ...baseTransition,
              opacity: { duration: duration * 0.7, ease: easings.easeOut },
              y: { duration: duration * 1.2, ease: easings.smooth },
              filter: { duration: duration * 0.8, ease: easings.easeOut }
            }
          }
        };

      case "reveal":
        return {
          hidden: {
            opacity: 0,
            clipPath: "inset(0 100% 0 0)",
            scale: 0.98
          },
          visible: {
            opacity: 1,
            clipPath: "inset(0 0% 0 0)",
            scale: 1,
            transition: {
              ...baseTransition,
              opacity: { duration: duration * 0.6, ease: easings.easeOut },
              clipPath: { duration: duration * 1.2, ease: easings.smooth },
              scale: { duration: duration * 0.8, ease: easings.elastic }
            }
          }
        };

      case "parallax-up":
        return {
          hidden: {
            opacity: 0,
            y: distance * 2,
            scale: 0.95
          },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              ...baseTransition,
              opacity: { duration: duration * 0.8, ease: easings.easeOut },
              y: { duration: duration * 1.5, ease: easings.smooth },
              scale: { duration: duration * 1.2, ease: easings.elastic }
            }
          }
        };

      case "bounce-in":
        return {
          hidden: {
            opacity: 0,
            y: distance * 1.5,
            scale: 0.5
          },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              type: "spring",
              damping: 12,
              stiffness: 200,
              delay: delay + stagger
            }
          }
        };

      case "fade-in":
        return {
          hidden: {
            opacity: 0,
            filter: "blur(2px)"
          },
          visible: {
            opacity: 1,
            filter: "blur(0px)",
            transition: {
              ...baseTransition,
              opacity: { duration: duration * 0.8, ease: easings.easeOut },
              filter: { duration: duration * 0.6, ease: easings.easeOut }
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
  };

  return (
    <motion.div
      ref={ref}
      className={`animated-on-scroll ${animation}`}
      initial="hidden"
      animate={controls}
      variants={getVariants()}
      style={{
        willChange: "transform, opacity, filter",
        backfaceVisibility: "hidden",
        perspective: 1000
      }}
    >
      {children}
    </motion.div>
  );
} 