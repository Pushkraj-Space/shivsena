import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./Style.css";
import EknathSection from "../EknathSection/EknathSection";
import InspirationSection from "../InspirationSection/InspirationSection";
import StrengthSection from "../StrengthSection/StrengthSection";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Wonderland = () => {
  useEffect(() => {
    // ScrollSmoother setup
    const smoother = ScrollSmoother.create({
      wrapper: ".smooth-wrapper",
      content: ".smooth-content",
      smooth: 1,
      effects: true,
      normalizeScroll: true,
    });

    // Section 1: reverse scroll elements
    gsap.utils.toArray(".reverse-scroll").forEach((element) => {
      gsap.to(element, {
        yPercent: 30,
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    // Section 2: split text animation
    const el = document.querySelector(".opacity-reveal");
    if (el) {
      const text = el.textContent;
      el.textContent = "";
      text.split("").forEach((char) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.opacity = "0.2";
        el.appendChild(span);
      });

      const chars = el.querySelectorAll("span");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".section-stick",
          pin: true,
          start: "center center",
          end: "+=1500",
          scrub: 1,
        },
      });

      // Fade in characters with scrub
      tl.to(chars, {
        opacity: 1,
        duration: 1,
        ease: "none",
        stagger: 1,
      });

      // Smooth fade out whole text (no blinking)
      tl.to(el, {
        opacity: 0,
        scale: 1.2,
        duration: 2,
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      smoother.kill();
    };
  }, []);

  return (
    <div className="smooth-wrapper">
      <div className="smooth-content">
        <main className="font-[Open_Sans]">
          {/* Section 1 */}
          {/* <EknathSection /> */}

          {/* Section 2 */}
          <section className="h-screen flex items-center justify-center section-stick bg-gray-100">
            <p className="opacity-reveal text-4xl font-semibold text-gray-800">
              This is the Wonderland story revealing as you scroll...
            </p>
          </section>

          {/* Section 3 */}
          <StrengthSection />
        </main>
      </div>
    </div>
  );
};

export default Wonderland;
