import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const CardStackingGSAP = () => {
  const verticalSectionRef = useRef(null);
  const horizontalSectionRef = useRef(null);

  useEffect(() => {
    // Initialize animations for both sections
    initScrollSection(verticalSectionRef.current, 'vertical');
    initScrollSection(horizontalSectionRef.current, 'horizontal');

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const initScrollSection = (section, direction) => {
    if (!section) return;

    const wrapper = section.querySelector('.wrapper');
    const items = wrapper.querySelectorAll('.item');

    // Initial states
    items.forEach((item, index) => {
      if (index !== 0) {
        direction === "horizontal"
          ? gsap.set(item, { xPercent: 100 })
          : gsap.set(item, { yPercent: 100 });
      }
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        pin: true,
        start: "top top+=80px",
        end: () => `+=${items.length * 100}%`,
        scrub: 0.5,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        fastScrollEnd: true,
      },
      defaults: { ease: "power2.out" },
    });

    items.forEach((item, index) => {
      timeline.to(item, {
        scale: 0.9,
        borderRadius: "10px",
        duration: 0.8,
        ease: "power2.out"
      });

      direction === "horizontal"
        ? timeline.to(
            items[index + 1],
            {
              xPercent: 0,
              duration: 0.8,
              ease: "power2.out"
            },
            "<"
          )
        : timeline.to(
            items[index + 1],
            {
              yPercent: 0,
              duration: 0.8,
              ease: "power2.out"
            },
            "<"
          );
    });
  };

  const cardData = [
    {
      id: 1,
      title: "लडकी बहीण योजना",
      subtitle: "महिला सशक्तिकरण",
      description: "महिलांच्या सशक्तिकरणासाठी आणि त्यांच्या विकासासाठी विशेष योजना. या योजनेद्वारे महिलांना आर्थिक आणि सामाजिक सहाय्य प्रदान केले जाते.",
      image: "/images/shivsena-banner.jpg",
      category: "महिला सशक्तिकरण"
    },
    {
      id: 2,
      title: "शेतकरी कल्याण",
      subtitle: "कृषी विकास",
      description: "शेतकऱ्यांच्या कल्याणासाठी आणि कृषी विकासासाठी विविध योजना आणि कार्यक्रम. शेतकऱ्यांना आर्थिक सहाय्य आणि तंत्रज्ञान प्रदान केले जाते.",
      image: "/images/shivsena-banner-2.jpg",
      category: "कृषी विकास"
    },
    {
      id: 3,
      title: "पुरस्कार वितरण",
      subtitle: "सन्मान",
      description: "विविध क्षेत्रातील उत्कृष्ट कामगिरी करणाऱ्या व्यक्तींना सन्मानित करण्यासाठी पुरस्कार वितरण कार्यक्रम. समाजातील योगदानासाठी सन्मान.",
      image: "/images/shivsena-banner-3.jpg",
      category: "सन्मान"
    },
    {
      id: 4,
      title: "गोसेवा कार्य",
      subtitle: "गोसेवा",
      description: "गोसेवा आणि गोरक्षणासाठी विविध कार्यक्रम आणि उपक्रम. गायींच्या संरक्षणासाठी आणि त्यांच्या कल्याणासाठी कार्य.",
      image: "/images/shivsena-banner-4.jpg",
      category: "गोसेवा"
    }
  ];

  const horizontalCardData = [
    {
      id: 1,
      title: "एकनाथ शिंदे युग",
      subtitle: "नेतृत्व",
      description: "एकनाथ शिंदे यांच्या नेतृत्वाखाली शिवसेना नवीन उंचीवर पोहोचली आहे. त्यांच्या दूरदृष्टीने पक्षाला नवीन दिशा दिली आहे.",
      image: "/images/shivsena-banner.jpg",
      category: "नेतृत्व"
    },
    {
      id: 2,
      title: "समाज कल्याण",
      subtitle: "सेवा",
      description: "समाजातील सर्व वर्गांच्या कल्याणासाठी विविध योजना आणि कार्यक्रम. गरिबांच्या विकासासाठी आणि समाजातील सर्व वर्गांच्या प्रगतीसाठी कार्य.",
      image: "/images/shivsena-banner-2.jpg",
      category: "सेवा"
    },
    {
      id: 3,
      title: "शिक्षण विकास",
      subtitle: "शिक्षण",
      description: "शिक्षण क्षेत्रातील विकासासाठी विविध उपक्रम आणि योजना. विद्यार्थ्यांना उत्तम शिक्षण मिळावे यासाठी कार्य.",
      image: "/images/shivsena-banner-3.jpg",
      category: "शिक्षण"
    },
    {
      id: 4,
      title: "रोजगार निर्मिती",
      subtitle: "रोजगार",
      description: "युवकांना रोजगार मिळावा यासाठी विविध योजना आणि कार्यक्रम. रोजगार निर्मिती आणि कौशल्य विकासासाठी कार्य.",
      image: "/images/shivsena-banner-4.jpg",
      category: "रोजगार"
    }
  ];

  return (
    <main className="bg-gray-100 text-gray-800 font-sans text-base leading-relaxed pt-4 pb-4">
      {/* First Section */}
      <div className="overflow-hidden">
        <div className="max-w-3xl mx-auto px-6">
          <div className="pt-2">
            <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold  flex items-center justify-center text-center text-shadow-sm px-4">
             एकनाथ पर्व...
            </h1>
           
            </div>
            <p className="text-sm md:text-base leading-relaxed text-gray-700 text-center font-semibold mt-2">
              मुख्यमंत्री एकनाथ शिंदे यांच्या नेतृत्वाखाली महाराष्ट्रातील विकासाचे कार्य
            </p>
          </div>
        </div>
      </div>
      {/* Vertical Scroll Section */}
      <div ref={verticalSectionRef} className="scroll-section vertical-section overflow-hidden">
        <div className="wrapper h-screen">
          <div className="list flex justify-center items-center h-full relative p-1">
                                                    {cardData.map((card) => (
                <div key={card.id} className="item w-[80%] h-[80%] flex flex-col md:flex-row absolute inset-0 shadow-2xl overflow-hidden mx-auto rounded-2xl" style={{ top: '10vh', bottom: '10vh' }}>
                  <div className="item_content bg-gradient-to-br from-white to-gray-50 text-gray-800 flex flex-col justify-center items-start p-6 md:p-10 relative w-full md:w-1/2 h-1/2 md:h-full">
                    <div className="category-badge bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg">
                      {card.category}
                    </div>
                    <h2 className="text-xl md:text-3xl font-bold leading-tight mb-3 md:mb-4 text-gray-900">{card.title}</h2>
                    <h3 className="text-sm md:text-lg text-orange-600 font-medium mb-4">{card.subtitle}</h3>
                    <p className="item_p text-sm md:text-base leading-relaxed text-gray-700 mb-6">{card.description}</p>
                    
                    {/* Additional Info Section */}
                    <div className="info-section bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 w-full">
                      <div className="flex items-center mb-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        <span className="text-sm font-semibold text-blue-800">महत्वाची माहिती</span>
                      </div>
                      <p className="text-xs md:text-sm text-blue-700 leading-relaxed">
                        या योजनेद्वारे हजारो लोकांना लाभ मिळत आहे. आमच्या पक्षाच्या नेतृत्वाखाली यशस्वीरित्या कार्यान्वित केले जात आहे.
                      </p>
                    </div>
                    
                  </div>
                  <div className="item_media w-full md:w-1/2 h-1/2 md:h-full relative">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent"></div>
                    

                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Second Section */}
      {/* <div className="overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <div className="py-8">
            <div className="max-w-3xl mx-auto">
                                             <h1 className="text-3xl md:text-5xl font-bold h-[50vh] flex items-center justify-center text-center text-shadow-sm px-4">
                  शिवसेना नेतृत्व
                </h1>
            </div>
          </div>
        </div>
      </div> */}

      {/* Horizontal Scroll Section - Commented out for now */}
      {/*
      <div ref={horizontalSectionRef} className="scroll-section horizontal-section overflow-hidden">
        <div className="wrapper h-screen">
          <div className="list flex justify-center items-center h-full relative p-1">
            {horizontalCardData.map((card) => (
              <div key={card.id} className="item w-[80vw] h-[80vh] md:w-[80vw] md:h-[80vh] flex flex-col md:flex-row absolute inset-0 shadow-2xl overflow-hidden mx-auto rounded-2xl" style={{ top: '10vh', bottom: '10vh' }}>
                <div className="item_content bg-gradient-to-br from-white to-gray-50 text-gray-800 flex flex-col justify-center items-start p-6 md:p-10 relative w-full md:w-1/2 h-1/2 md:h-full">
                  <div className="category-badge bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg">
                    {card.category}
                  </div>
                  <h2 className="text-xl md:text-3xl font-bold leading-tight mb-3 md:mb-4 text-gray-900">{card.title}</h2>
                  <h3 className="text-sm md:text-lg text-orange-600 font-medium mb-4">{card.subtitle}</h3>
                  <p className="item_p text-sm md:text-base leading-relaxed text-gray-700 mb-6">{card.description}</p>
                  
                  <div className="info-section bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 w-full">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      <span className="text-sm font-semibold text-blue-800">महत्वाची माहिती</span>
                    </div>
                    <p className="text-xs md:text-sm text-blue-700 leading-relaxed">
                      या योजनेद्वारे हजारो लोकांना लाभ मिळत आहे. आमच्या पक्षाच्या नेतृत्वाखाली यशस्वीरित्या कार्यान्वित केले जात आहे.
                    </p>
                  </div>
                  
                  <button className="mt-6 bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    अधिक माहिती
                  </button>
                </div>
                <div className="item_media w-full md:w-1/2 h-1/2 md:h-full relative">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent"></div>
                  
                  <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg p-3 text-white">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium">शिवसेना योजना</span>
                      <span className="text-xs bg-orange-500 px-2 py-1 rounded">सक्रिय</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      */}

      {/* Final Section */}
      {/* <div className="overflow-hidden">
        <div className="px-10">
          <div className="max-w-4xl mx-auto px-6">
            <div className="py-8">
              <div className="max-w-3xl mx-auto">
                                                   <h1 className="text-3xl md:text-5xl font-bold h-[50vh] flex items-center justify-center text-center text-shadow-sm px-4">
                    जय शिवसेना!
                  </h1>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <style jsx>{`
        .text-shadow-sm {
          text-shadow: 0.04em 0.04rem 0 #81b5ab;
        }
        
        /* Smooth scrolling improvements */
        html {
          scroll-behavior: smooth;
        }
        
        .scroll-section {
          will-change: transform;
        }
        
        .item {
          will-change: transform, opacity;
          backface-visibility: hidden;
          transform: translateZ(0);
        }
        
                 /* Mobile responsive improvements */
         @media (max-width: 768px) {
           .item {
             width: 90vw !important;
             height: 85vh !important;
             top: 5vh !important;
             bottom: 5vh !important;
           }
           
           .item_content {
             padding: 1rem !important;
           }
           
           .category-badge {
             font-size: 0.75rem !important;
             padding: 0.5rem 1rem !important;
           }
           
           .info-section {
             padding: 0.75rem !important;
           }
         }
         
         @media (max-width: 480px) {
           .item {
             width: 95vw !important;
             height: 90vh !important;
             top: 2vh !important;
             bottom: 2vh !important;
           }
           
           .item_content {
             padding: 0.75rem !important;
           }
           
           .category-badge {
             font-size: 0.625rem !important;
             padding: 0.375rem 0.75rem !important;
           }
           
           .info-section {
             padding: 0.5rem !important;
           }
         }
      `}</style>
    </main>
  );
};

export default CardStackingGSAP;
