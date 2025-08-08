import React, { useState, useEffect } from 'react';
import { getPerformanceMetrics, isPerformanceDegrading } from '../../utils/performanceMonitor';

const PerformanceMonitor = ({ show = false }) => {
    const [metrics, setMetrics] = useState({});
    const [isVisible, setIsVisible] = useState(show);

    useEffect(() => {
        if (!isVisible) return;

        const updateMetrics = () => {
            const currentMetrics = getPerformanceMetrics();
            setMetrics(currentMetrics);
        };

        // Update metrics every second
        const interval = setInterval(updateMetrics, 1000);
        updateMetrics(); // Initial update

        return () => clearInterval(interval);
    }, [isVisible]);

    if (!isVisible) return null;

    const isDegrading = isPerformanceDegrading();

    return (
        <div
            style={{
                position: 'fixed',
                top: '10px',
                right: '10px',
                background: isDegrading ? '#ff4444' : '#44ff44',
                color: 'white',
                padding: '10px',
                borderRadius: '5px',
                fontSize: '12px',
                fontFamily: 'monospace',
                zIndex: 9999,
                minWidth: '200px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
            }}
        >
            <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>
                Performance Monitor {isDegrading ? '⚠️' : '✅'}
            </div>
            <div>FPS: {metrics.fps || 0}</div>
            <div>Memory: {Math.round(metrics.memoryUsage || 0)}MB</div>
            <div>Scroll Events: {metrics.scrollEvents || 0}/s</div>
            <div>Battery: {Math.round((metrics.batteryLevel || 1) * 100)}%</div>
            <div>Connection: {metrics.connectionSpeed || 'unknown'}</div>
            <button
                onClick={() => setIsVisible(false)}
                style={{
                    position: 'absolute',
                    top: '5px',
                    right: '5px',
                    background: 'none',
                    border: 'none',
                    color: 'white',
                    cursor: 'pointer',
                    fontSize: '16px'
                }}
            >
                ×
            </button>
        </div>
    );
};

export default PerformanceMonitor;
