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
        start: "top top",
        end: () => `+=${items.length * 100}%`,
        scrub: 1,
        invalidateOnRefresh: true,
      },
      defaults: { ease: "none" },
    });

    items.forEach((item, index) => {
      timeline.to(item, {
        scale: 0.9,
        borderRadius: "10px",
      });

      direction === "horizontal"
        ? timeline.to(
            items[index + 1],
            {
              xPercent: 0,
            },
            "<"
          )
        : timeline.to(
            items[index + 1],
            {
              yPercent: 0,
            },
            "<"
          );
    });
  };

  const cardData = [
    {
      id: 1,
      title: "Wildlife in Action: A Glimpse into Nature's Daily Drama",
      description: "Witness the fascinating lives of animals in their natural habitats, from playful cubs to stealthy predators.",
      video: "https://videos.pexels.com/video-files/4763824/4763824-uhd_2560_1440_24fps.mp4"
    },
    {
      id: 2,
      title: "The Changing Seasons: Nature's Everlasting Cycle",
      description: "Experience the beauty of nature's transitions, from blooming spring flowers to snowy winter landscapes.",
      video: "https://videos.pexels.com/video-files/3214448/3214448-uhd_2560_1440_25fps.mp4"
    },
    {
      id: 3,
      title: "Guardians of Nature: Protecting Our Planet's Future",
      description: "Learn about the importance of conservation and how we can work together to preserve the beauty of nature for generations to come.",
      video: "https://videos.pexels.com/video-files/4328514/4328514-uhd_2560_1440_30fps.mp4"
    },
    {
      id: 4,
      title: "Astral Aesthetics: Portraits from the Infinite",
      description: "Experience the boundless beauty of the cosmos through striking portraits that capture its infinite aesthetic appeal.",
      video: "https://videos.pexels.com/video-files/2871916/2871916-hd_1920_1080_30fps.mp4"
    }
  ];

  const horizontalCardData = [
    {
      id: 1,
      title: "Wildlife in Action: A Glimpse into Nature's Daily Drama",
      description: "Explore the untouched beauty of forests, mountains, and rivers as we uncover the hidden secrets of nature's most breathtaking landscapes.",
      video: "https://videos.pexels.com/video-files/10178127/10178127-uhd_2560_1440_30fps.mp4"
    },
    {
      id: 2,
      title: "Nature's Symphony: The Sounds That Heal the Soul",
      description: "Immerse yourself in the soothing sounds of chirping birds, rustling leaves, and flowing streams – nature's music for peace and tranquility.",
      video: "https://videos.pexels.com/video-files/15708463/15708463-uhd_2560_1440_24fps.mp4"
    },
    {
      id: 3,
      title: "Nature's Masterpieces: Landscapes That Take Your Breath Away",
      description: "Discover stunning views of majestic mountains, endless oceans, and golden sunsets that remind us of nature's artistic brilliance.",
      video: "https://videos.pexels.com/video-files/15708462/15708462-uhd_2560_1440_24fps.mp4"
    },
    {
      id: 4,
      title: "The Power of Nature: How It Shapes Our World",
      description: "Dive into the incredible forces of nature – from roaring waterfalls to mighty hurricanes – and see how they sculpt the earth we live on.",
      video: "https://videos.pexels.com/video-files/5788966/5788966-hd_1920_1080_25fps.mp4"
    }
  ];

  return (
    <main className="bg-gray-100 text-gray-800 font-sans text-base leading-relaxed">
      {/* First Section */}
      <div className="overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <div className="py-8">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-5xl font-bold h-[50vh] flex items-center justify-center text-center text-shadow-sm">
                But Vertical Scroll Is Also Cool!
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Vertical Scroll Section */}
      <div ref={verticalSectionRef} className="scroll-section vertical-section overflow-hidden">
        <div className="wrapper h-screen">
          <div className="list flex justify-start items-center h-full relative p-1">
            {cardData.map((card) => (
              <div key={card.id} className="item w-screen h-full flex absolute inset-0 shadow-lg overflow-hidden">
                <div className="item_content bg-white text-gray-800 flex flex-col justify-center items-start p-12 relative w-1/2">
                  <h2 className="item_number text-2xl h-12 w-12 mb-2 rounded-full bg-black text-white flex items-center justify-center font-normal absolute top-24 left-12">
                    {card.id}
                  </h2>
                  <h2 className="text-3xl font-bold leading-tight mb-4 mt-16">{card.title}</h2>
                  <p className="item_p text-lg leading-relaxed">{card.description}</p>
                </div>
                <video
                  src={card.video}
                  loading="lazy"
                  autoPlay
                  muted
                  loop
                  className="item_media object-cover w-1/2 h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <div className="py-8">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-5xl font-bold h-[50vh] flex items-center justify-center text-center text-shadow-sm">
                Horizontal Scroll Is Cool!
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Section */}
      <div ref={horizontalSectionRef} className="scroll-section horizontal-section overflow-hidden">
        <div className="wrapper h-screen">
          <div className="list flex justify-start items-center h-full relative p-1">
            {horizontalCardData.map((card) => (
              <div key={card.id} className="item w-screen h-full flex absolute inset-0 shadow-lg overflow-hidden">
                <div className="item_content bg-white text-gray-800 flex flex-col justify-center items-start p-12 relative w-1/2">
                  <h2 className="item_number text-2xl h-12 w-12 mb-2 rounded-full bg-black text-white flex items-center justify-center font-normal absolute top-24 left-12">
                    {card.id}
                  </h2>
                  <h2 className="text-3xl font-bold leading-tight mb-4 mt-16">{card.title}</h2>
                  <p className="item_p text-lg leading-relaxed">{card.description}</p>
                </div>
                <video
                  src={card.video}
                  loading="lazy"
                  autoPlay
                  muted
                  loop
                  className="item_media object-cover w-1/2 h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final Section */}
      <div className="overflow-hidden">
        <div className="px-10">
          <div className="max-w-4xl mx-auto px-6">
            <div className="py-8">
              <div className="max-w-3xl mx-auto">
                <h1 className="text-5xl font-bold h-[50vh] flex items-center justify-center text-center text-shadow-sm">
                  Soo Cool!!
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .text-shadow-sm {
          text-shadow: 0.04em 0.04rem 0 #81b5ab;
        }
        
        @media (max-width: 575.98px) {
          .item {
            flex-direction: column;
          }
          
          .item_content,
          .item_media {
            height: 50vh;
            width: 100%;
            padding-top: 0;
            padding-bottom: 0;
          }
          
          .item_number {
            font-size: 0.5rem;
            top: 1.5rem;
          }
        }
      `}</style>
    </main>
  );
};

export default CardStackingGSAP;
