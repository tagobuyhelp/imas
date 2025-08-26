import React, { useState, useRef, useEffect } from "react";
import {
  Building2,
  Globe,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { IMAS_TAILWIND_CLASSES } from "../../../lib/constants";

export function IndustryCollaborationsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const collaborations = [
    {
      title: "Visit to Apollo Hospital",
      description:
        "Healthcare industry exposure and practical learning experience",
      image: "/uploads/Visit to_Apollo_Hospital.jpeg",
      category: "Healthcare",
    },
    {
      title: "Industrial visit at Reliance Trends",
      description: "Retail and fashion industry insights and operations",
      image: "/uploads/Industrial_visit_at_Reliance_Trends.jpeg",
      category: "Retail",
    },
    {
      title: "Workshop at JSW Plant",
      description: "Manufacturing and industrial processes hands-on experience",
      image: "/uploads/Workshop_at_JSW_Plant.jpg",
      category: "Manufacturing",
    },
    {
      title: "TDK Industries exposure for PGDM students",
      description: "Electronics and technology sector practical exposure",
      image: "/uploads/TDK_Industries_exposure_for_PGDM_students.jpeg",
      category: "Technology",
    },
  ];



  // Navigation functions
  const nextSlide = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.scrollWidth / collaborations.length;
      const newIndex = Math.min(currentSlide + 1, collaborations.length - 1);
      setCurrentSlide(newIndex);
      carouselRef.current.scrollTo({
        left: newIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const prevSlide = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.scrollWidth / collaborations.length;
      const newIndex = Math.max(currentSlide - 1, 0);
      setCurrentSlide(newIndex);
      carouselRef.current.scrollTo({
        left: newIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  // Update arrow visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        // You can add arrow visibility logic here if needed
      }
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', handleScroll);
      return () => carousel.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-[1500px] mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div
            className={`inline-block ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6 shadow-md`}
          >
            RECENT COLLABORATIONS
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 px-2">
            Our Recent Industry{" "}
            <span className={`${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE}`}>
              Collaborations
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Real-world industry exposure through visits, workshops, and hands-on
            experiences
          </p>
        </div>

        {/* Collaboration Cards Carousel */}
        <div className="relative mb-8 sm:mb-12 md:mb-16">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-gray-200"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-gray-200"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
          </button>

          {/* Carousel Container */}
          <div
            ref={carouselRef}
            className="flex gap-4 sm:gap-6 md:gap-8 overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-4 sm:px-12 md:px-16"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {collaborations.map((collaboration, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[280px] sm:w-1/2 lg:w-1/3 group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 border border-gray-100"
              >
                {/* Image Section - Prominent */}
                <div className="relative h-64 sm:h-56 md:h-96 overflow-hidden">
                  <img
                    src={collaboration.image}
                    alt={collaboration.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.display = "none";
                      const fallback =
                        target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = "flex";
                    }}
                  />
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center hidden">
                    <Building2 className="h-12 w-12 sm:h-16 sm:w-16 text-gray-400" />
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                  {/* Category Badge */}
                  <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                    <div
                      className={`${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-sm`}
                    >
                      {collaboration.category}
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Content Section */}
                <div className="p-4 sm:p-6 md:p-8">
                  <h3 className="font-bold text-gray-800 text-lg sm:text-xl mb-3 sm:mb-4 group-hover:text-gray-900 transition-colors">
                    {collaboration.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                    {collaboration.description}
                  </p>

                  {/* Action Button */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`inline-flex items-center gap-1 sm:gap-2 ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} font-semibold text-xs sm:text-sm group-hover:gap-2 sm:group-hover:gap-3 transition-all duration-300`}
                    >
                      Learn More
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                    <div
                      className={`w-6 h-6 sm:w-8 sm:h-8 ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE}/10 rounded-full flex items-center justify-center group-hover:${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} transition-all duration-300`}
                    >
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600 group-hover:text-white transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 sm:mt-8 gap-2 sm:gap-3">
            {collaborations.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  if (carouselRef.current) {
                    const cardWidth = carouselRef.current.scrollWidth / collaborations.length;
                    carouselRef.current.scrollTo({
                      left: index * cardWidth,
                      behavior: 'smooth'
                    });
                  }
                }}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === currentSlide
                  ? `${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} scale-125`
                  : "bg-gray-300 hover:bg-gray-400"
                  }`}
              />
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
}
