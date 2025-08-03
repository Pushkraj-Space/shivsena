// Mobile performance optimization utilities

// Detect if device is mobile
export const isMobile = () => {
  return window.innerWidth <= 768;
};

// Detect if device has low performance
export const hasLowPerformance = () => {
  // Check for common low-performance indicators
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  const isSlowConnection = connection && (
    connection.effectiveType === 'slow-2g' || 
    connection.effectiveType === '2g' || 
    connection.effectiveType === '3g'
  );
  
  const isLowMemory = navigator.deviceMemory && navigator.deviceMemory < 4;
  const isSlowCPU = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
  
  return isSlowConnection || isLowMemory || isSlowCPU;
};

// Get optimized animation settings based on device capabilities
export const getOptimizedAnimationSettings = (baseSettings = {}) => {
  const mobile = isMobile();
  const lowPerformance = hasLowPerformance();
  
  if (mobile || lowPerformance) {
    return {
      duration: baseSettings.duration * 0.7,
      distance: baseSettings.distance * 0.6,
      delay: baseSettings.delay * 0.5,
      useBlur: false,
      useComplexTransforms: false,
      useSpring: false,
      damping: baseSettings.damping * 1.2,
      stiffness: baseSettings.stiffness * 0.8
    };
  }
  
  return baseSettings;
};

// Debounce function for performance
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle function for scroll events
export const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Optimize scroll performance
export const optimizeScroll = (callback) => {
  const throttledCallback = throttle(callback, 16); // ~60fps
  return throttledCallback;
};

// Check if user prefers reduced motion
export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Get device pixel ratio for optimization
export const getDevicePixelRatio = () => {
  return window.devicePixelRatio || 1;
};

// Check if device supports hardware acceleration
export const supportsHardwareAcceleration = () => {
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  return !!gl;
}; 