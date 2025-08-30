import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CartoonsSection from "../CartoonsSection/CartoonsSection";
import SectionDivider from "../SectionDivider/SectionDivider";
import CTASection from "../CTASection/CTASection";

gsap.registerPlugin(ScrollTrigger);

const cartoons = [
  { id: 1, image: "/images/vyang/balasaheb image black and white.jpg", title: "शिवसेना संस्थापक", size: "large" },
  { id: 2, image: "/images/vyang/career as cartoonist.jpg", title: "मुंबई दर्शन", size: "medium" },
  { id: 3, image: "/images/vyang/Gallery-Cartoonist 1.jpg", title: "लोकशाही आणि जनता", size: "small" },
  { id: 4, image: "/images/vyang/Gallery-Cartoonist 2.jpg", title: "शेतकरी आणि कृषी", size: "medium" },
  { id: 6, image: "/images/vyang/Gallery-Cartoonist 4.jpg", title: "महाराष्ट्र अभिमान", size: "small" },
  { id: 7, image: "/images/vyang/Gallery-Cartoonist 5.jpg", title: "शिवसेना चळवळ", size: "medium" },
  { id: 8, image: "/images/vyang/Gallery-Cartoonist 6.jpg", title: "मराठी माणूस", size: "small" },
  { id: 10, image: "/images/vyang/career as cartoonist.jpg", title: "बाळासाहेब ठाकरे", size: "medium" },
  { id: 11, image: "/images/vyang/Gallery-Cartoonist 1.jpg", title: "मुंबई दर्शन", size: "small" },
  { id: 12, image: "/images/vyang/Gallery-Cartoonist 2.jpg", title: "शिवसेना विचार", size: "medium" },
  { id: 14, image: "/images/vyang/Gallery-Cartoonist 4.jpg", title: "शिवसेना संघर्ष", size: "small" },
  { id: 15, image: "/images/vyang/Gallery-Cartoonist 5.jpg", title: "बाळासाहेब विचार", size: "medium" },
  { id: 16, image: "/images/vyang/Gallery-Cartoonist 6.jpg", title: "शिवसेना विजय", size: "large" },
  { id: 18, image: "/images/vyang/career as cartoonist.jpg", title: "शिवसेना नेतृत्व", size: "medium" },
  { id: 19, image: "/images/vyang/Gallery-Cartoonist 1.jpg", title: "बाळासाहेब कार्य", size: "small" },
  { id: 20, image: "/images/vyang/Gallery-Cartoonist 2.jpg", title: "शिवसेना भविष्य", size: "large" },
  { id: 21, image: "/images/vyang/Gallery-Cartoonist 3.jpg", title: "मराठी भाषा", size: "medium" },
  { id: 22, image: "/images/vyang/Gallery-Cartoonist 4.jpg", title: "शिवसेना संस्कृती", size: "small" },
  { id: 23, image: "/images/vyang/Gallery-Cartoonist 5.jpg", title: "बाळासाहेब स्मृती", size: "medium" },
  { id: 24, image: "/images/vyang/Gallery-Cartoonist 6.jpg", title: "शिवसेना परंपरा", size: "large" },
];

const BookScroll = () => {
  const bookRef = useRef(null);
  const bookSectionRef = useRef(null);
  const cartoonsSectionRef = useRef(null);
  const [showBook, setShowBook] = useState(false);
  const [hideBook, setHideBook] = useState(false);

  // Show book only when its section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowBook(entry.isIntersecting),
      { threshold: 0.9 }
    );
    if (bookSectionRef.current) observer.observe(bookSectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Animate page flipping
  useEffect(() => {
    if (!showBook) return;

    const pages = document.querySelectorAll(".book__page");
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    pages.forEach((page, index) => {
      gsap.set(page, { z: index === 0 ? 13 : -index * 1 });
      gsap.to(page, {
        rotateY: `-=${180 - index / 2}`,
        scrollTrigger: {
          trigger: bookSectionRef.current,
          start: () => bookSectionRef.current.offsetTop + index * 5,
          end: () => bookSectionRef.current.offsetTop + (index + 1.5) * 5,
          scrub: true,
        },
      });
      gsap.to(page, {
        z: index === 0 ? -13 : index,
        scrollTrigger: {
          trigger: bookSectionRef.current,
          start: () => bookSectionRef.current.offsetTop + index * 5,
          end: () => bookSectionRef.current.offsetTop + (index + 1) * 5,
          scrub: true,
        },
      });
    });

    // Hide book when cartoons section enters view
    const observer = new IntersectionObserver(
      ([entry]) => setHideBook(entry.isIntersecting),
      { threshold: 0.6 }
    );
    if (cartoonsSectionRef.current) observer.observe(cartoonsSectionRef.current);

    return () => observer.disconnect();
  }, [showBook]);
  // Animate page flipping
   // Animate page flipping
   // Animate page flipping



  const PAGES = cartoons.length;

  return (
    <>
      <div
        ref={bookSectionRef}
        className="relative w-screen bg-white overflow-x-hidden m-auto"
        style={{ height: `100vh` }} // Make section just 1 viewport high
      >
        <div className="flex">
          {/* Book */}
          <div
            ref={bookRef}
            className={`book fixed top-1/2 left-1/2 h-[70vmin] w-[50vmin] min-w-[200px] min-h-[300px] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 ${
              showBook && !hideBook ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            style={{ transformStyle: "preserve-3d", perspective: "1200px" }}
          >
            {/* Spine */}
            <div
              className="book__spine absolute left-0 top-0 h-full w-[12px] bg-black"
              style={{ transformOrigin: "0 50%", transform: "translate3d(0,0,-13px)" }}
            ></div>

            {/* Front Cover */}
            <div className="book__page book__cover book__cover--front absolute top-1/2 left-0 h-full w-full bg-gray-800 -translate-y-1/2" style={{ transformOrigin: "0% 50%" }}>
              <div className="page__half page__half--front flex flex-col items-center justify-center h-full w-full text-white font-bold text-3xl border-r-8 border-black">
                <img src="/images/book_cover.jpg" alt="Front Cover" className="w-[100%] h-[100%] object-contain" />
              </div>
            </div>

            {/* Pages */}
            {cartoons.map((cartoon, index) => (
              <div key={cartoon.id} className="book__page absolute top-1/2 left-[2%] h-[94%] w-[94%] -translate-y-1/2 bg-yellow-100 rounded-r-lg" style={{ transformOrigin: "0% 50%", zIndex: PAGES - index }}>
                <div className="page__half page__half--front flex flex-col items-center justify-center h-full w-full absolute top-0 left-0" style={{ transform: "rotateY(0deg) translate3d(0,0,0px)", backfaceVisibility: "hidden" }}>
                  <h3 className="text-sm font-semibold text-gray-700 text-center mb-2">{cartoon.title}</h3>
                  <img src={cartoon.image} alt={cartoon.title} className="w-[90%] h-[85%] object-contain mx-auto" />
                  <div className="page__number absolute bottom-2 right-2 text-xs text-gray-500">{index + 1}</div>
                </div>
                <div className="page__half page__half--back flex items-center justify-center h-full w-full absolute top-0 left-0" style={{ transform: "rotateY(180deg) translate3d(0,0,2px)" }}></div>
              </div>
            ))}

            {/* Back Cover */}
            <div className="book__page book__cover book__cover--back absolute top-1/2 left-0 h-full w-full bg-gray-800 -translate-y-1/2" style={{ transformOrigin: "0% 50%" }}>
              <div className="page__half page__half--front flex items-center justify-center h-full w-full border-l-8 border-black"></div>
              <div className="page__half page__half--back flex items-center justify-center h-full w-full">
                <img src="/images/vyang/logo.png" alt="logo" className="logo opacity-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1/4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div ref={cartoonsSectionRef}>
        <SectionDivider pattern="angle" color="#f8f0dd" height={100} />
        <CTASection />
      </div>
    </>
  );
};

export default BookScroll;
