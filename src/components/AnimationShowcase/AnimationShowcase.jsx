import React from 'react';
import AnimatedOnScroll from '../AnimatedOnScroll/AnimatedOnScroll';
import StaggeredAnimation from '../StaggeredAnimation/StaggeredAnimation';
import TextAnimation from '../TextAnimation/TextAnimation';
import './AnimationShowcase.css';

export default function AnimationShowcase() {
    const animationExamples = [
        { name: "Fade In Up", type: "fade-in-up", delay: 0 },
        { name: "Slide In Left", type: "slide-in-left", delay: 0.1 },
        { name: "Slide In Right", type: "slide-in-right", delay: 0.2 },
        { name: "Scale In", type: "scale-in", delay: 0.3 },
        { name: "Flip In", type: "flip-in", delay: 0.4 },
        { name: "Zoom In", type: "zoom-in", delay: 0.5 },
        { name: "Bounce In", type: "bounce-in", delay: 0.6 },
        { name: "Reveal", type: "reveal", delay: 0.7 }
    ];

    const textExamples = [
        { text: "Professional Text Reveal", animation: "reveal" },
        { text: "Typewriter Effect", animation: "typewriter" },
        { text: "Word by Word Animation", animation: "word-by-word" },
        { text: "Character by Character", animation: "character-by-character" },
        { text: "Slide Up Text", animation: "slide-up" },
        { text: "Scale In Text", animation: "scale-in" }
    ];

    return (
        <div className="animation-showcase">
            <div className="showcase-section">
                <AnimatedOnScroll animation="slide-up-fade" distance={60} duration={1.0}>
                    <h2 className="showcase-title">Professional Animation System</h2>
                </AnimatedOnScroll>

                <AnimatedOnScroll animation="fade-in" distance={40} duration={0.8} delay={0.2}>
                    <p className="showcase-subtitle">
                        Experience smooth, performant animations inspired by the best Framer sites
                    </p>
                </AnimatedOnScroll>
            </div>

            <div className="showcase-section">
                <AnimatedOnScroll animation="fade-in-up" distance={50} duration={0.9}>
                    <h3>Scroll Animations</h3>
                </AnimatedOnScroll>

                <div className="animation-grid">
                    {animationExamples.map((example, index) => (
                        <AnimatedOnScroll
                            key={example.type}
                            animation={example.type}
                            distance={40}
                            duration={0.8}
                            delay={example.delay}
                        >
                            <div className="animation-card">
                                <div className="animation-icon">✨</div>
                                <h4>{example.name}</h4>
                                <p>Smooth {example.name.toLowerCase()} animation</p>
                            </div>
                        </AnimatedOnScroll>
                    ))}
                </div>
            </div>

            <div className="showcase-section">
                <AnimatedOnScroll animation="scale-in" distance={50} duration={1.0}>
                    <h3>Text Animations</h3>
                </AnimatedOnScroll>

                <div className="text-animation-grid">
                    {textExamples.map((example, index) => (
                        <AnimatedOnScroll
                            key={example.animation}
                            animation="fade-in-up"
                            distance={30}
                            duration={0.7}
                            delay={index * 0.1}
                        >
                            <div className="text-animation-card">
                                <TextAnimation
                                    animation={example.animation}
                                    duration={1.2}
                                    delay={0.5}
                                >
                                    {example.text}
                                </TextAnimation>
                            </div>
                        </AnimatedOnScroll>
                    ))}
                </div>
            </div>

            <div className="showcase-section">
                <AnimatedOnScroll animation="flip-in" distance={60} duration={1.1}>
                    <h3>Staggered Animations</h3>
                </AnimatedOnScroll>

                <StaggeredAnimation
                    animation="fade-in-up"
                    staggerDelay={0.1}
                    duration={0.6}
                    className="staggered-demo"
                >
                    <div className="stagger-item">First Item</div>
                    <div className="stagger-item">Second Item</div>
                    <div className="stagger-item">Third Item</div>
                    <div className="stagger-item">Fourth Item</div>
                    <div className="stagger-item">Fifth Item</div>
                </StaggeredAnimation>
            </div>

            <div className="showcase-section">
                <AnimatedOnScroll animation="bounce-in" distance={70} duration={1.0}>
                    <h3>Performance Optimized</h3>
                </AnimatedOnScroll>

                <AnimatedOnScroll animation="fade-in" distance={40} duration={0.8} delay={0.2}>
                    <div className="performance-features">
                        <div className="feature">
                            <span className="feature-icon">⚡</span>
                            <h4>Hardware Accelerated</h4>
                            <p>Uses transform3d for optimal performance</p>
                        </div>
                        <div className="feature">
                            <span className="feature-icon">🎯</span>
                            <h4>Intersection Observer</h4>
                            <p>Efficient scroll-based triggering</p>
                        </div>
                        <div className="feature">
                            <span className="feature-icon">♿</span>
                            <h4>Accessibility First</h4>
                            <p>Respects reduced motion preferences</p>
                        </div>
                    </div>
                </AnimatedOnScroll>
            </div>
        </div>
    );
} 