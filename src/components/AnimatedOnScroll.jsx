import React, { useState, useEffect } from "react";
import useInView from "../utils/useInView";
import "./AnimatedOnScroll.css";

export default function AnimatedOnScroll({ children, animation = "fade-in-up", delay = 0 }) {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimateOut(false);
    } else {
      setAnimateOut(true);
    }
  }, [inView]);

  // Support for staggered animation
  const style = delay
    ? { '--aos-delay': `${delay}s` }
    : undefined;

  return (
    <div
      ref={ref}
      className={`animated-on-scroll ${animation} ${inView ? 'animate-in' : ''} ${animateOut ? 'animate-out' : ''}`}
      data-delay={delay ? delay : undefined}
      style={style}
    >
      {children}
    </div>
  );
} 