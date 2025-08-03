// Performance monitoring utilities

class PerformanceMonitor {
  constructor() {
    this.metrics = {
      fps: 0,
      frameTime: 0,
      scrollEvents: 0,
      animationEvents: 0
    };
    this.isMonitoring = false;
    this.frameCount = 0;
    this.lastTime = performance.now();
  }

  start() {
    if (this.isMonitoring) return;
    
    this.isMonitoring = true;
    this.frameCount = 0;
    this.lastTime = performance.now();
    
    this.monitorFrameRate();
    this.monitorScrollPerformance();
  }

  stop() {
    this.isMonitoring = false;
  }

  monitorFrameRate() {
    const measureFPS = () => {
      if (!this.isMonitoring) return;
      
      const currentTime = performance.now();
      const deltaTime = currentTime - this.lastTime;
      
      if (deltaTime >= 1000) { // Update every second
        this.metrics.fps = Math.round((this.frameCount * 1000) / deltaTime);
        this.metrics.frameTime = deltaTime / this.frameCount;
        
        this.frameCount = 0;
        this.lastTime = currentTime;
        
        // Log performance warnings
        if (this.metrics.fps < 30) {
          console.warn('Low FPS detected:', this.metrics.fps);
        }
      }
      
      this.frameCount++;
      requestAnimationFrame(measureFPS);
    };
    
    requestAnimationFrame(measureFPS);
  }

  monitorScrollPerformance() {
    let scrollCount = 0;
    let lastScrollTime = performance.now();
    
    const handleScroll = () => {
      if (!this.isMonitoring) return;
      
      const currentTime = performance.now();
      scrollCount++;
      
      if (currentTime - lastScrollTime >= 1000) {
        this.metrics.scrollEvents = scrollCount;
        scrollCount = 0;
        lastScrollTime = currentTime;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }

  getMetrics() {
    return { ...this.metrics };
  }

  shouldOptimize() {
    return this.metrics.fps < 30 || this.metrics.frameTime > 33;
  }
}

// Global performance monitor instance
export const performanceMonitor = new PerformanceMonitor();

// Start monitoring on page load
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    performanceMonitor.start();
  });
}

// Utility function to check if performance is degrading
export const isPerformanceDegrading = () => {
  const metrics = performanceMonitor.getMetrics();
  return metrics.fps < 30 || metrics.frameTime > 33;
};

// Utility function to get current performance metrics
export const getPerformanceMetrics = () => {
  return performanceMonitor.getMetrics();
};

// Debounced performance check
export const debouncedPerformanceCheck = (callback, delay = 1000) => {
  let timeout;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      const metrics = getPerformanceMetrics();
      callback(metrics);
    }, delay);
  };
};

// Performance optimization suggestions
export const getOptimizationSuggestions = (metrics) => {
  const suggestions = [];
  
  if (metrics.fps < 30) {
    suggestions.push('Consider reducing animation complexity');
    suggestions.push('Disable blur filters on mobile devices');
    suggestions.push('Use simpler transforms');
  }
  
  if (metrics.scrollEvents > 100) {
    suggestions.push('Throttle scroll event handlers');
    suggestions.push('Use passive scroll listeners');
  }
  
  return suggestions;
}; 