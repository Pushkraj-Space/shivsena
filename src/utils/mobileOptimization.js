// Mobile optimization utilities for better performance

// Detect mobile devices more accurately
export const isMobile = () => {
  return window.innerWidth <= 768 ||
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// Enhanced performance detection
export const hasLowPerformance = () => {
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  const isSlowConnection = connection && (
    connection.effectiveType === 'slow-2g' ||
    connection.effectiveType === '2g' ||
    connection.effectiveType === '3g'
  );

  const isLowMemory = navigator.deviceMemory && navigator.deviceMemory < 4;
  const isSlowCPU = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;

  // Check for battery level if available
  const isLowBattery = navigator.getBattery && navigator.getBattery().then(battery => battery.level < 0.2);

  return isSlowConnection || isLowMemory || isSlowCPU;
};

// Get optimized animation settings based on device capabilities
export const getOptimizedAnimationSettings = (baseSettings = {}) => {
  const mobile = isMobile();
  const lowPerformance = hasLowPerformance();

  if (mobile || lowPerformance) {
    return {
      duration: baseSettings.duration * 0.7, // Keep some duration for smooth UX
      distance: baseSettings.distance * 0.6, // Shorter but still visible distance
      delay: baseSettings.delay * 0.5, // Faster but not instant
      useBlur: false, // Disable blur for performance
      useComplexTransforms: false, // Disable complex 3D transforms
      useSpring: false, // Use simpler easing
      damping: baseSettings.damping * 1.2,
      stiffness: baseSettings.stiffness * 0.8,
      threshold: 0.2, // Slightly higher threshold
      once: true // Always trigger once
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

// Throttle function for scroll events - more aggressive on mobile
export const throttle = (func, limit) => {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Optimize scroll performance with mobile-specific settings
export const optimizeScroll = (callback) => {
  const isMobileDevice = isMobile();
  const throttleTime = isMobileDevice ? 24 : 16; // 40fps on mobile, 60fps on desktop
  const throttledCallback = throttle(callback, throttleTime);
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

// Mobile-specific scroll optimization
export const createMobileScrollOptimizer = () => {
  let scrollTimeout;
  let lastScrollTime = 0;
  const minScrollInterval = 16; // 60fps max

  return (callback) => {
    return (event) => {
      const now = performance.now();

      if (now - lastScrollTime < minScrollInterval) {
        return;
      }

      lastScrollTime = now;

      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      scrollTimeout = setTimeout(() => {
        callback(event);
      }, 8); // Small delay to batch updates
    };
  };
};

// Keep animations but optimize them for mobile
export const shouldDisableAnimations = () => {
  const mobile = isMobile();
  const lowPerformance = hasLowPerformance();
  const reducedMotion = prefersReducedMotion();

  // Only disable animations on very low-end devices or when user prefers reduced motion
  return (mobile && lowPerformance && reducedMotion) || reducedMotion;
};

// Optimize intersection observer for mobile
export const getMobileObserverOptions = () => {
  const mobile = isMobile();

  return {
    threshold: mobile ? 0.15 : 0.15, // Keep same threshold for consistency
    rootMargin: mobile ? '75px 0px' : '100px 0px', // Slightly smaller margin on mobile
    triggerOnce: true
  };
}; 