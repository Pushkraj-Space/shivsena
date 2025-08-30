import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
import "./Style.css";
import EknathSection from "../EknathSection/EknathSection";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

export default function AliceInWonderland() {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;
    if (!wrapper || !content) return;

    const isTouch =
      typeof window !== "undefined" &&
      (window.matchMedia?.("(pointer: coarse)")?.matches ||
        /Android|iPhone|iPad|iPod/i.test(navigator.userAgent));

    // Only create smoother on non-touch (desktop) to avoid mobile/stutter issues
    let smoother = null;
    // if (!isTouch) {
    //   smoother = ScrollSmoother.create({
    //     wrapper,
    //     content,
    //     smooth: 0.9, // slightly below 1 to reduce micro-jitter
    //     effects: true,
    //     normalizeScroll: true,
    //     smoothTouch: 0.6,
    //     preventOverscroll: true
    //   });
    // }

    // helper to safely query elements inside content
    const q = (sel) => content.querySelector(sel);

    // Setup hero reveal(s)
    const heroEls = content.querySelectorAll(".hero-reveal");
    const scrollTriggers = [];

    heroEls.forEach((el) => {
      const heroBox = el.querySelector(".hero-reveal__header");
      const heroHeadings = el.querySelectorAll(".hero-reveal_split_item");
      const contentEl = el.querySelector(".hero-reveal__content");

      if (!heroBox || !contentEl) return;

      // compute duration based on heights (use getBoundingClientRect for better read)
      const heroBoxH = heroBox.getBoundingClientRect().height;
      const contentH = contentEl.getBoundingClientRect().height;
      const duration = Math.max(heroBoxH, contentH);

      // content scroll-up (use yPercent to avoid layout thrash)
      const contTl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: `+=${duration}`,
          scrub: 1,
          toggleActions: "play reverse play reverse",
          anticipatePin: 1,
          fastScrollEnd: true
        }
      });
      contTl.fromTo(contentEl, { yPercent: 50 }, { yPercent: 0, ease: "none" });

      // pinned hero reveal timeline
      const mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: `+=${duration}`,
          scrub: 1,
          pin: true,
          pinSpacing: true,
          toggleActions: "play reverse play reverse",
          anticipatePin: 1,
          fastScrollEnd: true
        }
      });

      // ensure initial clip-path set in CSS. Animate it gently.
      mainTl.fromTo(
        heroBox,
        {
          clipPath:
            "polygon(0 0, 100% 0, 100% 50%, 0 50%, 0 50%, 100% 50%, 100% 100%, 0 100%)"
        },
        {
          clipPath:
            "polygon(0 0, 100% 0, 100% 0%, 0 0%, 0 100%, 100% 100%, 100% 100%, 0 100%)",
          duration: 0.5,
          ease: "power4.inOut"
        }
      );

      if (heroHeadings.length >= 2) {
        mainTl.fromTo(
          heroHeadings[0],
          { yPercent: 0 },
          { yPercent: -30, ease: "power3.inOut" },
          0
        );
        mainTl.fromTo(
          heroHeadings[1],
          { yPercent: 0 },
          { yPercent: 30, ease: "power3.inOut" },
          0
        );
      }

      scrollTriggers.push(contTl.scrollTrigger, mainTl.scrollTrigger);
    });

    // Parallax for each image layer (safer: animate transform on the image wrapper)
    const parallaxMap = [
      { sel: ".hero-reveal__parallax-book", speed: 15 },
      { sel: ".hero-reveal__parallax-clock", speed: 13 },
      { sel: ".hero-reveal__parallax-alice", speed: 6 },
      { sel: ".hero-reveal__parallax-kattle", speed: 23 },
      { sel: ".hero-reveal__parallax-card", speed: 5 }
    ];

    parallaxMap.forEach(({ sel, speed }) => {
      const el = q(sel);
      const container = q(".hero-reveal__content");
      if (!el || !container) return;
      const h = container.getBoundingClientRect().height || window.innerHeight;

      const st = gsap.to(el, {
        yPercent: (speed - 1) * 8, // scaled down to reduce sweet spot flicker
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-reveal",
          start: "top top",
          end: `+=${h * 2}`,
          scrub: 1,
          toggleActions: "play reverse play reverse"
        }
      });
      scrollTriggers.push(st);
    });

    // Add a refresh listener for better performance
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    // refresh after layout changes
    ScrollTrigger.refresh();

    // cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
      
      // kill created ScrollTriggers
      try {
        scrollTriggers.forEach((st) => st && st.kill && st.kill());
      } catch (e) {}
      ScrollTrigger.getAll().forEach((st) => st.kill());
      if (smoother && smoother.kill) {
        smoother.kill();
      }
      gsap.killTweensOf("*");
    };
  }, []); // run once

  // --- JSX: keep original structure, wrapped for ScrollSmoother
  return (
    <div id="" ref={wrapperRef}>
      <div id="" ref={contentRef}>
        <main className="main_animation">
          

          <section className="hero-reveal">
            <article className="article_animation">
              <header className="hero-reveal__header">
                <div className="hero-reveal_split">
                  <div className="hero-reveal_split_item">
                    <p className="c-wide-text -split text-6xl" style={{color: '#000000'}}>एकनाथ पर्व</p>
                  </div>
                  <div className="hero-reveal_split_item" aria-hidden="true">
                    <p className="text-6xl c-wide-text -split" aria-hidden="true" style={{color: '#000000'}}>
                    एकनाथ पर्व
                    </p>
                  </div>
                </div>
              </header>

              <div className="hero-reveal__content bg-[#f8f9fa]">
               
                  <EknathSection />
                  
              </div>
            </article>
          </section>
        </main>
      </div>
    </div>
  );
}














// import React, { useLayoutEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrollSmoother } from "gsap/ScrollSmoother";
// import { SplitText } from "gsap/SplitText";
// import "./Style.css";
// import EknathSection from "../EknathSection/EknathSection";

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// export default function AliceInWonderland() {
//   const wrapperRef = useRef(null);
//   const contentRef = useRef(null);

//   useLayoutEffect(() => {
//     const wrapper = wrapperRef.current;
//     const content = contentRef.current;
//     if (!wrapper || !content) return;

//     const q = (sel) => content.querySelector(sel);
//     const scrollTriggers = [];

//     // --- Hero reveal ---
//     const heroEls = content.querySelectorAll(".hero-reveal");
//     heroEls.forEach((el) => {
//       const heroBox = el.querySelector(".hero-reveal__header");
//       const heroHeadings = el.querySelectorAll(".hero-reveal_split_item");
//       const contentEl = el.querySelector(".hero-reveal__content");

//       if (!heroBox || !contentEl) return;

//       const heroBoxH = heroBox.getBoundingClientRect().height;
//       const contentH = contentEl.getBoundingClientRect().height;
//       const duration = Math.max(heroBoxH, contentH);

//       // Content scroll-up
//       const contTl = gsap.timeline({
//         scrollTrigger: {
//           trigger: el,
//           start: "top top",
//           end: `+=${duration}`,
//           scrub: 1,
//           pinSpacing: true,
//           anticipatePin: 0.8,
//           fastScrollEnd: true
//         }
//       });
//       contTl.fromTo(contentEl, { yPercent: 50 }, { yPercent: 0, ease: "none" });

//       // Main pinned timeline
//       const mainTl = gsap.timeline({
//         scrollTrigger: {
//           trigger: el,
//           start: "top top",
//           end: `+=${duration}`,
//           scrub: 1,
//           pin: true,
//           pinSpacing: true,
//           anticipatePin: 0.8,
//           fastScrollEnd: true
//         }
//       });

//       mainTl.fromTo(
//         heroBox,
//         {
//           clipPath:
//             "polygon(0 0, 100% 0, 100% 50%, 0 50%, 0 50%, 100% 50%, 100% 100%, 0 100%)"
//         },
//         {
//           clipPath:
//             "polygon(0 0, 100% 0, 100% 0%, 0 0%, 0 100%, 100% 100%, 100% 100%, 0 100%)",
//           duration: 0.5,
//           ease: "power4.inOut"
//         }
//       );

//       if (heroHeadings.length >= 2) {
//         mainTl.fromTo(
//           heroHeadings[0],
//           { yPercent: 0 },
//           { yPercent: -30, ease: "power3.inOut" },
//           0
//         );
//         mainTl.fromTo(
//           heroHeadings[1],
//           { yPercent: 0 },
//           { yPercent: 30, ease: "power3.inOut" },
//           0
//         );
//       }

//       scrollTriggers.push(contTl.scrollTrigger, mainTl.scrollTrigger);
//     });

//     // --- Parallax ---
//     const parallaxMap = [
//       { sel: ".hero-reveal__parallax-book", speed: 15 },
//       { sel: ".hero-reveal__parallax-clock", speed: 13 },
//       { sel: ".hero-reveal__parallax-alice", speed: 6 },
//       { sel: ".hero-reveal__parallax-kattle", speed: 23 },
//       { sel: ".hero-reveal__parallax-card", speed: 5 }
//     ];

//     parallaxMap.forEach(({ sel, speed }) => {
//       const el = q(sel);
//       const container = q(".hero-reveal__content");
//       if (!el || !container) return;
//       const h = container.getBoundingClientRect().height || window.innerHeight;

//       const st = gsap.to(el, {
//         yPercent: (speed - 1) * 8,
//         ease: "none",
//         scrollTrigger: {
//           trigger: ".hero-reveal",
//           start: "top top",
//           end: `+=${h * 2}`,
//           scrub: 1,
//           toggleActions: "play reverse play reverse"
//         }
//       });
//       scrollTriggers.push(st);
//     });

//     // Resize / Orientation refresh
//     const handleResize = () => ScrollTrigger.refresh();
//     window.addEventListener("resize", handleResize);
//     window.addEventListener("orientationchange", handleResize);
//     ScrollTrigger.refresh();

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       window.removeEventListener("orientationchange", handleResize);

//       try {
//         scrollTriggers.forEach((st) => st && st.kill && st.kill());
//       } catch (e) {}
//       ScrollTrigger.getAll().forEach((st) => st.kill());
//       gsap.killTweensOf("*");
//     };
//   }, []);

//   return (
//     <div ref={wrapperRef}>
//       <div ref={contentRef}>
//         <main className="main_animation">
//           <section className="hero-reveal">
//             <article className="article_animation">
//               <header className="hero-reveal__header text-center px-2 sm:px-6">
//                 <div className="hero-reveal_split">
//                   <div className="hero-reveal_split_item">
//                     <p className="c-wide-text -split text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold" style={{ color: "#000000" }}>
//                       एकनाथ पर्व
//                     </p>
//                   </div>
//                   <div className="hero-reveal_split_item" aria-hidden="true">
//                     <p
//                       className="c-wide-text -split text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold"
//                       style={{ color: "#000000" }}
//                       aria-hidden="true"
//                     >
//                       एकनाथ पर्व
//                     </p>
//                   </div>
//                 </div>
//               </header>

//               <div className="hero-reveal__content bg-[#f8f9fa] px-4 sm:px-8 md:px-16 lg:px-24 py-4">
//                 <EknathSection />
//               </div>
//             </article>
//           </section>
//         </main>
//       </div>
//     </div>
//   );
// }









