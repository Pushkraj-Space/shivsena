import React, { useState, useEffect } from "react";
import Slider from "infinite-react-carousel";
import { useTranslation } from "react-i18next";

const SimpleSlider = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Check on mount
    checkScreenSize();

    // Add event listener
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const cartoons = [
    {
      id: 1,
      image: "/images/vyang/balasaheb image black and white.jpg",
      title: t("shivsenaFounder"),
      size: "small",
    },
    {
      id: 2,
      image: "/images/vyang/career as cartoonist.jpg",
      title: t("mumbaiSher"),
      size: "small",
    },
    {
      id: 3,
      image: "/images/vyang/Gallery-Cartoonist 1.jpg",
      title: t("democracyAndPeople"),
      size: "small",
    },
    {
      id: 4,
      image: "/images/vyang/Gallery-Cartoonist 2.jpg",
      title: t("farmerAndAgriculture"),
      size: "small",
    },
    {
      id: 5,
      image: "/images/vyang/Gallery-Cartoonist 3.jpg",
      title: t("youthPower"),
      size: "small",
    },
    {
      id: 6,
      image: "/images/vyang/Gallery-Cartoonist 4.jpg",
      title: t("maharashtraPride"),
      size: "small",
    },
    {
      id: 7,
      image: "/images/vyang/Gallery-Cartoonist 5.jpg",
      title: t("shivsenaMovement"),
      size: "small",
    },
    {
      id: 8,
      image: "/images/vyang/Gallery-Cartoonist 6.jpg",
      title: t("marathiMan"),
      size: "small",
    },
  ];

  // Dynamic slider settings based on screen size
  const sliderSettings = {
    slidesToShow: isMobile ? 1 : 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    infinite: true,
    arrows: false,
    dots: false,
    swipe: true,
    touchMove: true,
    centerMode: false,
    adaptiveHeight: false,
    className: "smooth-slider",
    loop: true,
    speed: isMobile ? 800 : 1200,
    easing: "cubic-bezier(0.4, 0, 0.2, 1)",
  };

  return (
    <div className="py-8 sm:py-10 md:py-12 bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
            {t("cartoons")}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            {t("balasahebPoliticalCartoons")}
          </p>
        </div>

        <Slider {...sliderSettings}>
          {cartoons.map((cartoon) => (
            <div key={cartoon.id} className="px-2 sm:px-4">
              <div className="cartoon-card bg-white rounded-xl shadow-lg overflow-hidden h-64 sm:h-72 md:h-80 lg:h-96 transition-all duration-500 ease-in-out hover:shadow-xl hover:-translate-y-2 transform">
                <div className="relative h-full flex flex-col">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-600"></div>

                  <div className="flex-1 relative overflow-hidden">
                    <img
                      src={cartoon.image}
                      alt={cartoon.title}
                      className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>

                  <div className="p-3 sm:p-4 bg-white border-t border-gray-200 shadow-sm">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 text-center leading-tight px-1 sm:px-2">
                      {cartoon.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <style jsx>{`
        .smooth-slider {
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .smooth-slider .slick-slide {
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .smooth-slider .slick-track {
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
        }

        .cartoon-card {
          will-change: transform;
          backface-visibility: hidden;
          transform: translateZ(0);
        }

        .cartoon-card:hover {
          transform: translateZ(0) scale(1.02);
        }

        .cartoon-card img {
          backface-visibility: hidden;
          transform: translateZ(0);
        }
      `}</style>
    </div>
  );
};

export default SimpleSlider;
