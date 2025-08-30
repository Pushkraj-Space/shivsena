import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CartoonsSection from "../CartoonsSection/CartoonsSection";

gsap.registerPlugin(ScrollTrigger);

const cartoons = [
  {
    id: 1,
    image: "/images/vyang/balasaheb image black and white.jpg",
    title: "शिवसेना संस्थापक",
    size: "large",
  },
  {
    id: 2,
    image: "/images/vyang/career as cartoonist.jpg",
    title: "मुंबई दर्शन",
    size: "medium",
  },
  {
    id: 3,
    image: "/images/vyang/Gallery-Cartoonist 1.jpg",
    title: "लोकशाही आणि जनता",
    size: "small",
  },
  {
    id: 4,
    image: "/images/vyang/Gallery-Cartoonist 2.jpg",
    title: "शेतकरी आणि कृषी",
    size: "medium",
  },
  {
    id: 6,
    image: "/images/vyang/Gallery-Cartoonist 4.jpg",
    title: "महाराष्ट्र अभिमान",
    size: "small",
  },
  {
    id: 7,
    image: "/images/vyang/Gallery-Cartoonist 5.jpg",
    title: "शिवसेना चळवळ",
    size: "medium",
  },
  {
    id: 8,
    image: "/images/vyang/Gallery-Cartoonist 6.jpg",
    title: "मराठी माणूस",
    size: "small",
  },
  {
    id: 10,
    image: "/images/vyang/career as cartoonist.jpg",
    title: "बाळासाहेब ठाकरे",
    size: "medium",
  },
  {
    id: 11,
    image: "/images/vyang/Gallery-Cartoonist 1.jpg",
    title: "मुंबई दर्शन",
    size: "small",
  },
  {
    id: 12,
    image: "/images/vyang/Gallery-Cartoonist 2.jpg",
    title: "शिवसेना विचार",
    size: "medium",
  },
  {
    id: 14,
    image: "/images/vyang/Gallery-Cartoonist 4.jpg",
    title: "शिवसेना संघर्ष",
    size: "small",
  },
  {
    id: 15,
    image: "/images/vyang/Gallery-Cartoonist 5.jpg",
    title: "बाळासाहेब विचार",
    size: "medium",
  },
  {
    id: 16,
    image: "/images/vyang/Gallery-Cartoonist 6.jpg",
    title: "शिवसेना विजय",
    size: "large",
  },
  {
    id: 18,
    image: "/images/vyang/career as cartoonist.jpg",
    title: "शिवसेना नेतृत्व",
    size: "medium",
  },
  {
    id: 19,
    image: "/images/vyang/Gallery-Cartoonist 1.jpg",
    title: "बाळासाहेब कार्य",
    size: "small",
  },
  {
    id: 20,
    image: "/images/vyang/Gallery-Cartoonist 2.jpg",
    title: "शिवसेना भविष्य",
    size: "large",
  },
  {
    id: 21,
    image: "/images/vyang/Gallery-Cartoonist 3.jpg",
    title: "मराठी भाषा",
    size: "medium",
  },
  {
    id: 22,
    image: "/images/vyang/Gallery-Cartoonist 4.jpg",
    title: "शिवसेना संस्कृती",
    size: "small",
  },
  {
    id: 23,
    image: "/images/vyang/Gallery-Cartoonist 5.jpg",
    title: "बाळासाहेब स्मृती",
    size: "medium",
  },
  {
    id: 24,
    image: "/images/vyang/Gallery-Cartoonist 6.jpg",
    title: "शिवसेना परंपरा",
    size: "large",
  },
];

const BookScroll = () => {
  useEffect(() => {
    const book = document.querySelector(".book");

    // Animate book scale/height on scroll
    gsap.to(book, {
      scrollTrigger: {
        trigger: book,
        start: "top center",
        end: "top top+=300",
        scrub: true,
      },
      scale: 1.2, // Increase size
      ease: "power1.out",
    });

    const pages = document.querySelectorAll(".book__page");
    pages.forEach((page, index) => {
      gsap.set(page, { z: index === 0 ? 13 : -index * 1 });
      gsap.to(page, {
        rotateY: `-=${180 - index / 2}`,
        scrollTrigger: {
          scrub: 1,
          start: () => (index + 1) * (window.innerHeight * 0.25),
          end: () => (index + 2) * (window.innerHeight * 0.25),
        },
      });
      gsap.to(page, {
        z: index === 0 ? -13 : index,
        scrollTrigger: {
          scrub: 1,
          start: () => (index + 1) * (window.innerHeight * 0.25),
          end: () => (index + 1.5) * (window.innerHeight * 0.25),
        },
      });
    });
  }, []);

  const PAGES = cartoons.length;

  return (
    <>
      <div
        className="relative w-screen bg-white overflow-x-hidden m-auto"
        style={{ height: `calc(${PAGES + 4} * 25vh)` }}
      >
        <h1 className="fixed bottom-4 right-4 text-2xl text-gray-400">
          Scroll
        </h1>

        <div
          className="book fixed top-1/2 left-1/2 h-[70vmin] w-[50vmin] min-w-[200px] min-h-[300px] -translate-x-1/2 -translate-y-1/2 scale-50"
          style={{
            transformStyle: "preserve-3d",
            perspective: "1200px",
          }}
        >
          {/* Spine */}
          <div
            className="book__spine absolute left-0 top-0 h-full w-[12px] bg-black"
            style={{
              transformOrigin: "0 50%",
              transform: "translate3d(0,0,-13px)",
            }}
          ></div>

          {/* Front Cover */}
          {/* Front Cover */}
          <div
            className="book__page book__cover book__cover--front absolute top-1/2 left-0 h-full w-full bg-gray-800 -translate-y-1/2"
            style={{ transformOrigin: "0% 50%" }}
          >
            <div className="page__half page__half--front flex flex-col items-center justify-center h-full w-full text-white font-bold text-3xl border-r-8 border-black">
              {/* Image on front cover */}
              <img
                src="/images/book_cover.jpg" // Replace with your front cover image path
                alt="Front Cover"
                className="w-[100%] h-[100%] object-contain"
              />
              {/* Title */}
              {/* <span>Cartoon Gallery</span> */}
            </div>
          </div>

          {/* Pages */}
          {cartoons.map((cartoon, index) => (
            <div
              key={cartoon.id}
              className="book__page absolute top-1/2 left-[2%] h-[94%] w-[94%] -translate-y-1/2 bg-yellow-100 rounded-r-lg"
              style={{ transformOrigin: "0% 50%", zIndex: PAGES - index }}
            >
              <div
                className="page__half page__half--front flex flex-col items-center justify-center h-full w-full absolute top-0 left-0"
                style={{
                  transform: "rotateY(0deg) translate3d(0,0,0px)",
                  backfaceVisibility: "hidden",
                }}
              >
                {/* Title on top */}
                <h3 className="text-sm font-semibold text-gray-700 text-center mb-2">
                  {cartoon.title}
                </h3>

                {/* Cartoon Image */}
                <img
                  src={cartoon.image}
                  alt={cartoon.title}
                  className="w-[90%] h-[85%] object-contain mx-auto"
                />

                <div className="page__number absolute bottom-2 right-2 text-xs text-gray-500">
                  {index + 1}
                </div>
              </div>

              {/* Back Half (optional, you can leave it blank or keep design) */}
              <div
                className="page__half page__half--back flex items-center justify-center h-full w-full absolute top-0 left-0"
                style={{ transform: "rotateY(180deg) translate3d(0,0,2px)" }}
              >
                {/* Optional content */}
              </div>
            </div>
          ))}

          {/* Back Cover */}
          <div
            className="book__page book__cover book__cover--back absolute top-1/2 left-0 h-full w-full bg-gray-800 -translate-y-1/2"
            style={{ transformOrigin: "0% 50%" }}
          >
            <div className="page__half page__half--front flex items-center justify-center h-full w-full border-l-8 border-black"></div>
            <div className="page__half page__half--back flex items-center justify-center h-full w-full">
              <img
                src="/images/vyang/logo.png"
                alt="logo"
                className="logo opacity-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1/4"
              />
            </div>
          </div>
        </div>
      </div>
      <CartoonsSection />
    </>
  );
};

export default BookScroll;
