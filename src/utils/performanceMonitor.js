/**
 * Performance Monitor for Mobile Optimization
 * Tracks and optimizes performance on mobile devices
 */

class PerformanceMonitor {
  constructor() {
    this.metrics = {
      fps: 0,
      frameTime: 0,
      scrollEvents: 0,
      animationEvents: 0,
      memoryUsage: 0,
      batteryLevel: 1,
      connectionSpeed: 'unknown'
    };
    this.isMonitoring = false;
    this.frameCount = 0;
    this.lastTime = performance.now();
    this.scrollCount = 0;
    this.lastScrollTime = performance.now();
  }

  start() {
    if (this.isMonitoring) return;

    this.isMonitoring = true;
    this.frameCount = 0;
    this.lastTime = performance.now();
    this.scrollCount = 0;
    this.lastScrollTime = performance.now();

    // Start monitoring frame rate
    this.monitorFrameRate();

    // Start monitoring scroll performance
    this.monitorScrollPerformance();

    // Monitor memory usage
    this.monitorMemoryUsage();

    // Monitor battery level
    this.monitorBatteryLevel();

    // Monitor connection speed
    this.monitorConnectionSpeed();

    console.log('Performance monitoring started');
  }

  stop() {
    this.isMonitoring = false;
    console.log('Performance monitoring stopped');
  }

  monitorFrameRate() {
    const measureFPS = () => {
      if (!this.isMonitoring) return;

      this.frameCount++;
      const currentTime = performance.now();

      if (currentTime - this.lastTime >= 1000) {
        this.metrics.fps = this.frameCount;
        this.metrics.frameTime = 1000 / this.frameCount;

        // Auto-optimize if FPS is too low
        if (this.metrics.fps < 30) {
          this.autoOptimize();
        }

        this.frameCount = 0;
        this.lastTime = currentTime;
      }

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

        // Auto-optimize if scroll events are too frequent
        if (this.metrics.scrollEvents > 100) {
          this.autoOptimize();
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }

  monitorMemoryUsage() {
    if ('memory' in performance) {
      setInterval(() => {
        if (!this.isMonitoring) return;

        this.metrics.memoryUsage = performance.memory.usedJSHeapSize / 1024 / 1024; // MB

        // Auto-optimize if memory usage is high
        if (this.metrics.memoryUsage > 100) {
          this.autoOptimize();
        }
      }, 5000);
    }
  }

  monitorBatteryLevel() {
    if (navigator.getBattery) {
      navigator.getBattery().then(battery => {
        this.metrics.batteryLevel = battery.level;

        battery.addEventListener('levelchange', () => {
          this.metrics.batteryLevel = battery.level;

          // Auto-optimize if battery is low
          if (battery.level < 0.2) {
            this.autoOptimize();
          }
        });
      });
    }
  }

  monitorConnectionSpeed() {
    if ('connection' in navigator) {
      const connection = navigator.connection;
      this.metrics.connectionSpeed = connection.effectiveType;

      connection.addEventListener('change', () => {
        this.metrics.connectionSpeed = connection.effectiveType;

        // Auto-optimize if connection is slow
        if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
          this.autoOptimize();
        }
      });
    }
  }

  autoOptimize() {
    // Disable animations on low-end devices
    if (this.metrics.fps < 30 || this.metrics.memoryUsage > 100) {
      this.disableAnimations();
    }

    // Reduce scroll sensitivity
    if (this.metrics.scrollEvents > 100) {
      this.optimizeScroll();
    }

    // Log optimization
    console.log('Auto-optimization applied:', {
      fps: this.metrics.fps,
      memory: this.metrics.memoryUsage,
      scrollEvents: this.metrics.scrollEvents
    });
  }

  disableAnimations() {
    const style = document.createElement('style');
    style.textContent = `
      .animated-on-scroll {
        animation: none !important;
        transition: opacity 0.2s ease-out !important;
      }
      .animated-on-scroll * {
        animation: none !important;
        transition: opacity 0.2s ease-out !important;
      }
    `;
    document.head.appendChild(style);
  }

  optimizeScroll() {
    // Reduce scroll event frequency
    const originalAddEventListener = window.addEventListener;
    window.addEventListener = function (type, listener, options) {
      if (type === 'scroll') {
        const throttledListener = (event) => {
          if (performance.now() - this.lastScrollCall < 32) return;
          this.lastScrollCall = performance.now();
          listener(event);
        };
        this.lastScrollCall = 0;
        return originalAddEventListener.call(this, type, throttledListener, options);
      }
      return originalAddEventListener.call(this, type, listener, options);
    };
  }

  getMetrics() {
    return { ...this.metrics };
  }

  shouldOptimize() {
    return (
      this.metrics.fps < 30 ||
      this.metrics.memoryUsage > 100 ||
      this.metrics.scrollEvents > 100 ||
      this.metrics.batteryLevel < 0.2 ||
      this.metrics.connectionSpeed === 'slow-2g' ||
      this.metrics.connectionSpeed === '2g'
    );
  }
}

// Global performance monitor instance
const performanceMonitor = new PerformanceMonitor();

// Start monitoring on page load
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    performanceMonitor.start();
  });
}

// Export functions for external use
export const isPerformanceDegrading = () => {
  return performanceMonitor.shouldOptimize();
};

export const getPerformanceMetrics = () => {
  return performanceMonitor.getMetrics();
};

export const debouncedPerformanceCheck = (callback, delay = 1000) => {
  let timeout;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (performanceMonitor.shouldOptimize()) {
        callback(performanceMonitor.getMetrics());
      }
    }, delay);
  };
};

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

  if (metrics.memoryUsage > 100) {
    suggestions.push('Reduce DOM complexity');
    suggestions.push('Implement virtual scrolling for large lists');
  }

  if (metrics.batteryLevel < 0.2) {
    suggestions.push('Disable non-essential animations');
    suggestions.push('Reduce background processing');
  }

  return suggestions;
};

export default performanceMonitor; 