import { useState, useEffect, useRef, useCallback } from "react";

// Shared observer instance for better performance
let sharedObserver = null;
let observerCallbacks = new Map();

const createSharedObserver = (options) => {
  if (sharedObserver) {
    sharedObserver.disconnect();
  }
  
  sharedObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const callback = observerCallbacks.get(entry.target);
      if (callback) {
        callback(entry.isIntersecting);
      }
    });
  }, {
    ...options,
    // Optimize for mobile performance
    rootMargin: options.rootMargin || '50px 0px',
    threshold: options.threshold || 0.1
  });
  
  return sharedObserver;
};

export default function useInView(options = {}) {
  const ref = useRef();
  const [inView, setInView] = useState(false);

  const callback = useCallback((isIntersecting) => {
    setInView(isIntersecting);
  }, []);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Use shared observer for better performance
    if (!sharedObserver) {
      createSharedObserver(options);
    }

    observerCallbacks.set(element, callback);
    sharedObserver.observe(element);

    return () => {
      if (sharedObserver && element) {
        observerCallbacks.delete(element);
        sharedObserver.unobserve(element);
      }
    };
  }, [callback, options]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      const element = ref.current;
      if (element && sharedObserver) {
        observerCallbacks.delete(element);
        sharedObserver.unobserve(element);
      }
    };
  }, []);

  return [ref, inView];
} 