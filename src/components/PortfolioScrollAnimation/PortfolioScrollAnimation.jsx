import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './PortfolioScrollAnimation.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const PortfolioScrollAnimation = () => {
  const containerRef = useRef(null);
  const sectionRefs = useRef([]);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Project data
  const projects = [
    {
      id: 1,
      title: "Shiv Sena Banner Design",
      description: "This modern banner design transformation brought sleek, contemporary aesthetics and enhanced visual impact to our client's campaign. We created custom graphics, high-quality layouts, and state-of-the-art digital elements, creating a stylish yet practical design perfect for political campaigns and public outreach. With attention to every detail, we delivered a banner that balances aesthetics and functionality.",
      tags: ["Design", "2 weeks"],
      testimonial: "The design team completely transformed our campaign materials, making them both beautiful and highly effective. The creativity was outstanding, and the team was professional and communicative throughout. We couldn't be happier with the result!",
      author: "Rajesh Kumar",
      image: "/images/shivsena-banner.jpg"
    },
    {
      id: 2,
      title: "Historical Documentation",
      description: "We revitalized this historical documentation with a fresh, modern approach, incorporating high-quality photography, sleek layouts, and efficient information architecture. The content was optimized to maximize engagement, creating a comprehensive and accessible resource. The final result is a beautifully crafted documentation that enhances both understanding and preservation.",
      tags: ["Documentation", "3 weeks"],
      testimonial: "The team turned our scattered historical materials into a stunning organized collection. The quality of work was excellent, and the team was incredibly professional from start to finish. We love our new documentation and would definitely work with them again!",
      author: "Priya Sharma",
      image: "/images/historybanner.jpg"
    },
    {
      id: 3,
      title: "Leadership Portfolio",
      description: "Our team designed and built a comprehensive leadership portfolio to showcase our organization's key figures. Using premium photography and premium materials, we created a seamless presentation that blends naturally with our brand identity, providing both functionality and aesthetic charm. The result is a stylish, well-crafted portfolio that elevates the overall organizational image.",
      tags: ["Portfolio", "1 month"],
      testimonial: "The team did an amazing job on our leadership portfolio. It's professional, looks fantastic, and has completely transformed how we present our organization. They listened to our vision and delivered exactly what we wanted—highly recommended!",
      author: "Amit Patel",
      image: "/images/balasaheb.jpg"
    }
  ];

  useEffect(() => {
    // GSAP ScrollTrigger animations
    const ctx = gsap.context(() => {
      // Parallax effect for project cards
      projects.forEach((project, index) => {
        const card = sectionRefs.current[index];
        if (card) {
          gsap.fromTo(card, 
            {
              y: 100,
              opacity: 0,
              scale: 0.95
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
              }
            }
          );

          // Stagger animation for tags
          const tags = card.querySelectorAll('.project-tag');
          gsap.fromTo(tags,
            {
              y: 20,
              opacity: 0
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              stagger: 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 70%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      });

      // Smooth reveal for testimonials
      gsap.utils.toArray('.testimonial').forEach((testimonial) => {
        gsap.fromTo(testimonial,
          {
            opacity: 0,
            y: 30
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: testimonial,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

    }, containerRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Framer Motion variants for additional animations
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 1.1, opacity: 0.8 },
    visible: { 
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <div ref={containerRef} className="portfolio-scroll-container">
      {/* Hero Section */}
      <section className="hero-section">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="hero-title">Our Portfolio</h1>
          <p className="hero-subtitle">
            Discover our latest projects and transformations that showcase our commitment to quality and innovation
          </p>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <div className="projects-container">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              ref={el => sectionRefs.current[index] = el}
              className="project-card"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
                             <div className="project-image-container">
                 <motion.div 
                   className="project-image"
                   variants={imageVariants}
                   style={{
                     backgroundImage: `url(${project.image})`,
                     backgroundSize: 'cover',
                     backgroundPosition: 'center'
                   }}
                 >
                   {/* Image overlay for better text readability */}
                   <div className="image-overlay">
                     <div className="image-content">
                       <span>{project.title}</span>
                     </div>
                   </div>
                 </motion.div>
               </div>

              <div className="project-content">
                <motion.h2 
                  className="project-title"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {project.title}
                </motion.h2>

                <motion.p 
                  className="project-description"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  {project.description}
                </motion.p>

                <motion.div 
                  className="project-tags"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </motion.div>

                <motion.div 
                  className="testimonial"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="quote-icon">"</div>
                  <p className="testimonial-text">{project.testimonial}</p>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      <span>{project.author.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <span className="author-name">{project.author}</span>
                  </div>
                </motion.div>

                <motion.button 
                  className="cta-button"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Use for free
                  <svg className="arrow-icon" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Scroll Progress Indicator */}
      <motion.div 
        className="scroll-progress"
        style={{
          scaleX: scrollYProgress,
          transformOrigin: "left"
        }}
      />
    </div>
  );
};

export default PortfolioScrollAnimation;
