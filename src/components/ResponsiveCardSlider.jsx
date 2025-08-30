import React, { useEffect, useRef, useState } from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { IoChevronForward, IoChevronBack } from 'react-icons/io5';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

  const ResponsiveCardSlider = () => {
    const swiperRef = useRef(null);
    const { t } = useTranslation();

  const cardData = [
    {
      id: 1,
      image: '/images/shivsena-banner.jpg',
      title: t('electionVictory2024'),
      description: t('electionVictoryDescription'),
      category: t('election'),
      date: '2024',
      link: '#'
    },
    {
      id: 2,
      image: '/images/shivsena-banner-2.jpg',
      title: t('partyExpansion'),
      description: t('partyExpansionDescription'),
      category: t('organization'),
      date: '2024',
      link: '#'
    },
    {
      id: 3,
      image: '/images/shivsena-banner-3.jpg',
      title: t('braveFamiliesSupport'),
      description: t('braveFamiliesSupportDescription'),
      category: t('welfare'),
      date: '2024',
      link: '#'
    },
    {
      id: 4,
      image: '/images/shivsena-banner-4.jpg',
      title: t('maharashtraDevelopment'),
      description: t('maharashtraDevelopmentDescription'),
      category: t('development'),
      date: '2024',
      link: '#'
    },
    {
      id: 5,
      image: '/images/shivsena-banner.jpg',
      title: t('farmerWelfareProgram'),
      description: t('farmerWelfareProgramDescription'),
      category: t('agriculture'),
      date: '2024',
      link: '#'
    },
    {
      id: 6,
      image: '/images/shivsena-banner-2.jpg',
      title: t('youthWelfareEmployment'),
      description: t('youthWelfareEmploymentDescription'),
      category: t('youth'),
      date: '2024',
      link: '#'
    }
  ];



  useEffect(() => {
    if (swiperRef.current) {
             const swiper = new Swiper(swiperRef.current, {
         modules: [Navigation, Pagination, Autoplay],
         slidesPerView: 3,
         spaceBetween: 25,
         loop: true,
         grabCursor: true,
         touchRatio: 1,
         touchAngle: 45,
         resistance: true,
         resistanceRatio: 0.85,
         shortSwipes: true,
         longSwipes: true,
         longSwipesRatio: 0.5,
         longSwipesMs: 300,
         followFinger: true,
         autoplay: {
           delay: 2000,
           disableOnInteraction: false,
         },
         pagination: {
           el: ".swiper-pagination",
           clickable: true,
           dynamicBullets: true,
         },
         navigation: {
           nextEl: ".swiper-button-next",
           prevEl: ".swiper-button-prev",
         },
                 breakpoints: {
           320: {
             slidesPerView: 1,
             spaceBetween: 15,
           },
           480: {
             slidesPerView: 1,
             spaceBetween: 20,
           },
           640: {
             slidesPerView: 2,
             spaceBetween: 20,
           },
           768: {
             slidesPerView: 2,
             spaceBetween: 25,
           },
           1024: {
             slidesPerView: 3,
             spaceBetween: 25,
           },
           1280: {
             slidesPerView: 3,
             spaceBetween: 30,
           },
         },
      });

      return () => {
        swiper.destroy();
      };
    }
  }, []);

     return (
     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100 py-2 md:py-10">
       <div className="w-full max-w-7xl px-3 sm:px-4 md:px-6">
         <div className="text-center mb-8 md:mb-12">
           <h2 className="text-2xl sm:text-3xl md:text-2xl lg:text-5xl font-bold text-gray-800 mb-3 md:mb-4">
             {t('importantMoments2024')}
           </h2>
           <p className="text-sm sm:text-base md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
             {t('partyImportantMoments')}
           </p>
         </div>
        <div className="swiper slide-content relative" ref={swiperRef}>
          {/* Custom CSS for navigation buttons */}
                     <style dangerouslySetInnerHTML={{
             __html: `
                               .swiper-button-next,
                .swiper-button-prev {
                  background: linear-gradient(135deg, #f97316, #ea580c) !important;
                  border-radius: 50% !important;
                  width: 22px !important;
                  height: 22px !important;
                  margin-top: -22px !important;
                  box-shadow: 0 6px 20px rgba(249, 115, 22, 0.3) !important;
                  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
                  z-index: 10 !important;
                  border: 2px solid rgba(255, 255, 255, 0.2) !important;
                }
               
               .swiper-button-next:hover,
               .swiper-button-prev:hover {
                 background: linear-gradient(135deg, #ea580c, #dc2626) !important;
                 transform: scale(1.15) !important;
                 box-shadow: 0 12px 35px rgba(249, 115, 22, 0.4) !important;
               }
               
               .swiper-button-next::after,
               .swiper-button-prev::after {
                 display: none !important;
               }
               
                               /* Hide navigation buttons on mobile for swipe-only interaction */
                @media (max-width: 768px) {
                  .swiper-button-next,
                  .swiper-button-prev {
                    display: none !important;
                  }
                }
               
                               /* Pagination styling */
                .swiper-pagination-bullet {
                  background-color: #d1d5db !important;
                  opacity: 0.6 !important;
                  width: 12px !important;
                  height: 12px !important;
                  transition: all 0.3s ease !important;
                }
                
                .swiper-pagination-bullet-active {
                  background: linear-gradient(135deg, #f97316, #ea580c) !important;
                  opacity: 1 !important;
                  transform: scale(1.2) !important;
                }
                
                /* Ensure proper touch area for swiping */
                .swiper-slide {
                  touch-action: pan-y pinch-zoom !important;
                  user-select: none !important;
                }
                
                .swiper-wrapper {
                  touch-action: pan-y !important;
                }
             `
           }} />
          <div className="swiper-wrapper">
            {cardData.map((card, index) => (
                                            <div key={card.id} className="swiper-slide">
                 <div className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-lg transition-all duration-300 ease-out relative">
                   {/* Card Image */}
                   <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
                     <img 
                       src={card.image} 
                       alt={card.title}
                       className="w-full h-full object-cover"
                     />
                     
                     {/* Badge */}
                     <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 flex flex-col gap-1 sm:gap-2">
                       <span className="bg-orange-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                         {card.category}
                       </span>
                       <span className="bg-black bg-opacity-70 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium text-center">
                         {card.date}
                       </span>
                     </div>
                   </div>

                   {/* Card Content */}
                   <div className="p-4 sm:p-5 md:p-6">
                     <div className="mb-3 md:mb-4">
                       <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 md:mb-3 leading-tight">
                         {card.title}
                       </h3>
                       <div className="flex gap-2 sm:gap-3 items-center mb-2 md:mb-3">
                         <span className="bg-orange-100 text-orange-600 px-2 sm:px-3 py-1 rounded-full text-xs font-semibold">
                           {card.category}
                         </span>
                         <span className="text-gray-500 text-xs sm:text-sm font-medium">
                           {card.date}
                         </span>
                       </div>
                     </div>
                     
                     <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                       {card.description}
                     </p>
                   </div>
                 </div>
              </div>
            ))}
          </div>

          {/* Custom Navigation Buttons */}
          <div className="swiper-button-next">
            <IoChevronForward className="text-white text-xs sm:text-sm" />
          </div>
          <div className="swiper-button-prev">
            <IoChevronBack className="text-white text-xs sm:text-sm" />
          </div>
          
          {/* Pagination */}
          <div className="swiper-pagination"></div>
        </div>


      </div>
    </div>
  );
};

export default ResponsiveCardSlider;
