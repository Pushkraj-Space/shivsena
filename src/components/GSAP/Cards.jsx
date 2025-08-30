import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";
gsap.registerPlugin(ScrollTrigger);

export default function MovieCards() {
  const { t } = useTranslation();
  
  const cards = [
    {
        id: 1,
        img: '/images/shivsena-banner.jpg',
        title: t('ladkiBahinScheme'),
        subtitle: t('ladkiBahinSubtitle'),
        description: t('ladkiBahinDescription'),
        category: t('womenEmpowerment')
    },
    {
        id: 2,
        img: '/images/shivsena-banner-2.jpg',
        title: t('farmerWelfare'),
        subtitle: t('farmerWelfareSubtitle'),
        description: t('farmerWelfareDescription'),
        category: t('agricultureDevelopment')
    },
    {
        id: 3,
        img: '/images/shivsena-banner-3.jpg',
        title: t('awardDistribution'),
        subtitle: t('awardDistributionSubtitle'),
        description: t('awardDistributionDescription'),
        category: t('honor')
    },
    {
        id: 4,
        img: '/images/shivsena-banner-4.jpg',
        title: t('gosevaWork'),
        subtitle: t('gosevaSubtitle'),
        description: t('gosevaDescription'),
        category: t('goseva')
    }
  ];
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const container = containerRef.current;
      const cards = gsap.utils.toArray(".card");

      gsap.set(cards, { autoAlpha: 0, scale: 0.96 });
      gsap.set(cards[0], { autoAlpha: 1, scale: 1 });

      const tl = gsap.timeline({ defaults: { ease: "none", duration: 1 } });

      cards.forEach((card, i) => {
        if (i === 0) return;
        tl.to(card, { autoAlpha: 1, scale: 1 })
          .to(cards[i - 1], { autoAlpha: 0, scale: 1.05 }, "<");
      });

      ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: "+=" + window.innerHeight * (cards.length - 1),
        scrub: 1,
        pin: true,
        animation: tl,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-[#121212] text-white">
      <div className="h-[20vh]" />

      <section ref={containerRef} className="relative h-screen overflow-hidden">
        {cards.map((movie, idx) => (
          <article
            key={idx}
            className="card absolute inset-0 mx-auto flex items-center justify-center"
            style={{ zIndex: 100 - idx }}
          >
            <div
              className={`relative w-[300px] h-[550px] bg-black rounded-2xl shadow-md
                ${idx % 2 === 0 ? "-rotate-3" : "rotate-3"}`}
            >
              <img
                src={movie.img}
                alt={movie.title}
                className="absolute w-full h-[80%] object-cover rounded-t-2xl"
              />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent rounded-b-2xl" />
              <div className="absolute bottom-3 left-0 z-10 ml-5 text-left">
                <h1 className="text-2xl font-bold">
                  {movie.title}
                  <span className="text-xs ml-2 opacity-80">({movie.subtitle})</span>
                </h1>
                <p className="mt-2 flex flex-wrap gap-2">
                  
                    <span className="px-2 py-1 border border-white rounded text-[10px] uppercase opacity-70">
                      {movie.category}
                    </span>
                  
                </p>
              </div>
            </div>
          </article>
        ))}
      </section>

      <div className="h-[20vh]" />
    </div>
  );
}
