# Professional Animation System Guide

This guide explains how to use the new professional animation system that provides Framer-like animations for your Shiv Sena website.

## 🎯 Overview

The new animation system includes three main components:
- **AnimatedOnScroll**: Professional scroll-triggered animations
- **StaggeredAnimation**: Staggered animations for lists and grids
- **TextAnimation**: Advanced text reveal and typewriter effects

## 🚀 AnimatedOnScroll Component

### Basic Usage
```jsx
import AnimatedOnScroll from './components/AnimatedOnScroll/AnimatedOnScroll';

<AnimatedOnScroll animation="fade-in-up" distance={40} duration={0.8}>
  <YourComponent />
</AnimatedOnScroll>
```

### Available Animations

#### 1. **fade-in-up** (Default)
- Smooth fade in from bottom with blur effect
- Best for: General content, paragraphs, images

#### 2. **fade-in-down**
- Fade in from top with blur effect
- Best for: Headers, titles

#### 3. **slide-in-left**
- Slide in from left with scale effect
- Best for: Cards, features, testimonials

#### 4. **slide-in-right**
- Slide in from right with scale effect
- Best for: Cards, features, testimonials

#### 5. **scale-in**
- Scale in with 3D rotation effect
- Best for: Icons, buttons, important elements

#### 6. **flip-in**
- 3D flip animation
- Best for: Cards, interactive elements

#### 7. **zoom-in**
- Zoom in with blur effect
- Best for: Images, hero sections

#### 8. **slide-up-fade**
- Smooth slide up with fade
- Best for: Hero content, main sections

#### 9. **reveal**
- Clip path reveal animation
- Best for: Text, headlines

#### 10. **bounce-in**
- Spring-based bounce animation
- Best for: CTAs, important buttons

#### 11. **fade-in**
- Simple fade in with blur
- Best for: Subtle content

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `animation` | string | "fade-in-up" | Animation type |
| `delay` | number | 0 | Delay before animation starts |
| `distance` | number | 40 | Distance to travel |
| `duration` | number | 0.8 | Animation duration |
| `once` | boolean | true | Trigger only once |
| `threshold` | number | 0.15 | Visibility threshold |
| `stagger` | number | 0 | Stagger delay |
| `spring` | boolean | false | Use spring animation |
| `damping` | number | 15 | Spring damping |
| `stiffness` | number | 100 | Spring stiffness |

### Examples

```jsx
// Hero section with long animation
<AnimatedOnScroll animation="slide-up-fade" distance={80} duration={1.2} delay={0.2}>
  <HeroSection />
</AnimatedOnScroll>

// Quick card animation
<AnimatedOnScroll animation="scale-in" distance={30} duration={0.6}>
  <Card />
</AnimatedOnScroll>

// Bouncy CTA
<AnimatedOnScroll animation="bounce-in" distance={50} duration={1.0}>
  <CTAButton />
</AnimatedOnScroll>
```

## 📝 StaggeredAnimation Component

### Basic Usage
```jsx
import StaggeredAnimation from './components/StaggeredAnimation/StaggeredAnimation';

<StaggeredAnimation animation="fade-in-up" staggerDelay={0.1}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</StaggeredAnimation>
```

### Layout Classes

Add these classes to the `className` prop:

- `grid`: Grid layout
- `list`: Vertical list
- `horizontal`: Horizontal scroll
- `cards`: Card grid layout

### Examples

```jsx
// Grid layout
<StaggeredAnimation 
  animation="scale-in" 
  staggerDelay={0.1} 
  className="grid"
>
  {items.map(item => <Card key={item.id} {...item} />)}
</StaggeredAnimation>

// Horizontal list
<StaggeredAnimation 
  animation="slide-in-left" 
  staggerDelay={0.05} 
  className="horizontal"
>
  {testimonials.map(testimonial => <Testimonial {...testimonial} />)}
</StaggeredAnimation>
```

## ✍️ TextAnimation Component

### Basic Usage
```jsx
import TextAnimation from './components/TextAnimation/TextAnimation';

<TextAnimation animation="reveal" duration={1.0}>
  Your animated text here
</TextAnimation>
```

### Available Text Animations

#### 1. **reveal** (Default)
- Smooth text reveal with gradient overlay
- Best for: Headlines, titles

#### 2. **typewriter**
- Typewriter effect with cursor
- Best for: Hero text, announcements

#### 3. **word-by-word**
- Animate each word separately
- Best for: Paragraphs, descriptions

#### 4. **character-by-character**
- Animate each character separately
- Best for: Short text, emphasis

#### 5. **slide-up**
- Slide up with scale effect
- Best for: Subtitles, captions

#### 6. **scale-in**
- Scale in with 3D rotation
- Best for: Important text

#### 7. **bounce-in**
- Spring-based bounce
- Best for: CTAs, buttons

#### 8. **fade-in**
- Simple fade in
- Best for: Body text

### Examples

```jsx
// Hero title
<TextAnimation animation="reveal" duration={1.2} delay={0.5}>
  Welcome to Shiv Sena
</TextAnimation>

// Typewriter effect
<TextAnimation animation="typewriter" duration={2.0}>
  Building a stronger Maharashtra
</TextAnimation>

// Word by word paragraph
<TextAnimation animation="word-by-word" staggerDelay={0.1}>
  This is a longer paragraph that animates word by word for a dramatic effect.
</TextAnimation>
```

## 🎨 PageTransition Component

Enhanced page transitions with smooth animations:

```jsx
import PageTransition from './components/PageTransition/PageTransition';

<PageTransition>
  <YourPageContent />
</PageTransition>
```

## 🚀 Performance Optimizations

### Built-in Optimizations
- **Hardware Acceleration**: Uses `transform3d` for optimal performance
- **Intersection Observer**: Efficient scroll-based triggering
- **Will-change**: Optimized for GPU acceleration
- **Reduced Motion**: Respects user preferences
- **Mobile Optimization**: Reduced animations on mobile

### Best Practices

1. **Use appropriate thresholds**:
   ```jsx
   <AnimatedOnScroll threshold={0.1}> // Triggers early
   <AnimatedOnScroll threshold={0.5}> // Triggers when 50% visible
   ```

2. **Optimize for mobile**:
   ```jsx
   // Shorter animations on mobile
   <AnimatedOnScroll duration={window.innerWidth < 768 ? 0.5 : 0.8}>
   ```

3. **Use once prop for performance**:
   ```jsx
   <AnimatedOnScroll once={true}> // Don't re-trigger
   ```

## 🎯 Animation Guidelines

### When to Use Each Animation

#### Hero Sections
- `slide-up-fade` for main content
- `reveal` for headlines
- `typewriter` for taglines

#### Content Sections
- `fade-in-up` for paragraphs
- `scale-in` for images
- `slide-in-left/right` for cards

#### Interactive Elements
- `bounce-in` for CTAs
- `flip-in` for cards
- `zoom-in` for important images

#### Lists and Grids
- Use `StaggeredAnimation` with `fade-in-up`
- Stagger delay: 0.05-0.1 seconds
- Grid layout for cards, list for items

### Timing Guidelines

- **Quick animations**: 0.4-0.6 seconds
- **Standard animations**: 0.7-0.9 seconds
- **Dramatic animations**: 1.0-1.3 seconds
- **Stagger delays**: 0.05-0.15 seconds

## 🔧 Customization

### Custom Easing Curves
The system uses professional easing curves:
- `smooth`: [0.25, 0.1, 0.25, 1]
- `bounce`: [0.68, -0.55, 0.265, 1.55]
- `elastic`: [0.175, 0.885, 0.32, 1.275]

### Spring Animations
For bouncy, natural animations:
```jsx
<AnimatedOnScroll 
  animation="bounce-in" 
  spring={true}
  damping={12}
  stiffness={200}
>
```

## ♿ Accessibility

### Built-in Features
- Respects `prefers-reduced-motion`
- High contrast mode support
- Focus states for keyboard navigation
- Screen reader friendly

### Testing
```jsx
// Test with reduced motion
@media (prefers-reduced-motion: reduce) {
  // Animations are automatically disabled
}
```

## 🎨 Integration Examples

### Hero Section
```jsx
<AnimatedOnScroll animation="slide-up-fade" distance={80} duration={1.2} delay={0.2}>
  <div className="hero">
    <TextAnimation animation="reveal" duration={1.0} delay={0.5}>
      <h1>Shiv Sena</h1>
    </TextAnimation>
    <TextAnimation animation="typewriter" duration={2.0} delay={1.0}>
      <p>Building a stronger Maharashtra</p>
    </TextAnimation>
  </div>
</AnimatedOnScroll>
```

### Feature Grid
```jsx
<StaggeredAnimation 
  animation="scale-in" 
  staggerDelay={0.1} 
  className="grid"
>
  {features.map(feature => (
    <AnimatedOnScroll animation="fade-in-up" key={feature.id}>
      <FeatureCard {...feature} />
    </AnimatedOnScroll>
  ))}
</StaggeredAnimation>
```

### Testimonial Section
```jsx
<AnimatedOnScroll animation="slide-in-left" distance={60} duration={1.1}>
  <h2>What People Say</h2>
  <StaggeredAnimation 
    animation="fade-in-up" 
    staggerDelay={0.15} 
    className="horizontal"
  >
    {testimonials.map(testimonial => (
      <TestimonialCard key={testimonial.id} {...testimonial} />
    ))}
  </StaggeredAnimation>
</AnimatedOnScroll>
```

## 🐛 Troubleshooting

### Common Issues

1. **Animations not triggering**:
   - Check `threshold` value
   - Ensure element is visible
   - Verify `once` prop

2. **Performance issues**:
   - Reduce `staggerDelay`
   - Use `once={true}`
   - Optimize for mobile

3. **Animation conflicts**:
   - Use different `delay` values
   - Avoid overlapping animations

### Debug Mode
Add this to see animation triggers:
```jsx
<AnimatedOnScroll 
  animation="fade-in-up"
  onAnimationStart={() => console.log('Animation started')}
>
```

## 📱 Mobile Considerations

- Shorter durations (0.5-0.7s)
- Reduced stagger delays (0.05s)
- Simpler animations for better performance
- Touch-friendly interactions

This animation system provides professional, performant animations that will make your Shiv Sena website feel modern and engaging, similar to the best Framer sites! 