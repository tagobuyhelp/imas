import React, { useState, useRef, useEffect } from 'react';
import { Users, Award, BookOpen, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { IMAS_TAILWIND_CLASSES } from '../../../lib/constants';
import { faculty } from '../../../lib/facultyData';

export function FacultySection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

  // Get first 6 faculty members for the home page preview
  const featuredFaculty = faculty.slice(0, 6);

  // Navigation functions
  const nextSlide = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.scrollWidth / featuredFaculty.length;
      const newIndex = Math.min(currentSlide + 1, featuredFaculty.length - 1);
      setCurrentSlide(newIndex);
      carouselRef.current.scrollTo({
        left: newIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const prevSlide = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.scrollWidth / featuredFaculty.length;
      const newIndex = Math.max(currentSlide - 1, 0);
      setCurrentSlide(newIndex);
      carouselRef.current.scrollTo({
        left: newIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  // Auto-scroll functionality
  useEffect(() => {
    if (isAutoScrolling) {
      autoScrollRef.current = setInterval(() => {
        setCurrentSlide(prev => {
          const nextIndex = prev >= featuredFaculty.length - 1 ? 0 : prev + 1;
          if (carouselRef.current) {
            const cardWidth = carouselRef.current.scrollWidth / featuredFaculty.length;
            carouselRef.current.scrollTo({
              left: nextIndex * cardWidth,
              behavior: 'smooth'
            });
          }
          return nextIndex;
        });
      }, 4000); // Auto-scroll every 4 seconds
    }

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [isAutoScrolling, featuredFaculty.length]);

  // Pause auto-scroll on hover
  const handleMouseEnter = () => {
    setIsAutoScrolling(false);
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
  };

  const handleMouseLeave = () => {
    setIsAutoScrolling(true);
  };

  return (
    <section id="faculty-preview" className="py-8 sm:py-12 bg-white">
      <div className="max-w-[1550px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className={`inline-block ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE}/10 ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} px-3 py-1.5 rounded-full text-xs font-semibold mb-3 border ${IMAS_TAILWIND_CLASSES.BORDER_DARK_BLUE}/20`}>
            MEET OUR ACADEMIC TEAM
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            Board of Governors
          </h2>
          
        </div>

        {/* Faculty Carousel */}
        <div className="relative mb-6">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className={`absolute left-1 sm:left-0 top-1/2 transform -translate-y-1/2 z-10 w-6 h-6 sm:w-8 sm:h-8 ${IMAS_TAILWIND_CLASSES.BG_MEDIUM_BLUE} rounded-full shadow-lg flex items-center justify-center hover:bg-opacity-80 transition-all duration-300 border-white`}
          >
            <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
          </button>

          <button
            onClick={nextSlide}
            className={`absolute right-1 sm:right-0 top-1/2 transform -translate-y-1/2 z-10 w-6 h-6 sm:w-8 sm:h-8 ${IMAS_TAILWIND_CLASSES.BG_MEDIUM_BLUE} rounded-full shadow-lg flex items-center justify-center hover:bg-opacity-80 transition-all duration-300 border-white`}
          >
            <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
          </button>

          {/* Carousel Container */}
          <div
            ref={carouselRef}
            className="flex gap-3 sm:gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-3 sm:px-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {featuredFaculty.map((member) => (
              <div key={member.id} className="flex-shrink-0 w-[240px] sm:w-[280px] lg:w-[300px] bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 transform hover:scale-105 hover:-translate-y-1 group">
                <div className="flex flex-col h-full">
                  {/* Top Section - Faculty Image */}
                  <div className="h-[190px] sm:h-[270px] relative overflow-hidden">
                    {member.image && member.image !== '/uploads/' ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div className={`w-full h-full ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE}/10 flex items-center justify-center ${member.image && member.image !== '/uploads/' ? 'hidden' : ''}`}>
                      <Users className={`h-12 w-12 sm:h-14 sm:w-14 ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE}`} />
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                    {/* Expertise Badge */}
                    <div className="absolute top-2 right-2 bg-primary-dark backdrop-blur-sm rounded-full px-2 py-1">
                      <span className="text-xs font-semibold text-white">{member.title || 'Expert'}</span>
                    </div>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Bottom Section - Content with Description */}
                  <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Faculty Name */}
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1 text-center group-hover:text-gray-900 transition-colors">{member.name}</h3>

                      

                      {/* Qualifications */}
                      <p className="text-xs text-gray-500 mb-2 text-center leading-relaxed line-clamp-1">
                        {member.qualifications}
                      </p>

                      {/* Description */}
                      <p className="text-xs text-gray-700 mb-2 text-center leading-relaxed line-clamp-2">
                        {member.description}
                      </p>

                      {/* Expertise Tags */}
                      <div className="flex flex-wrap justify-center gap-1 mb-2">
                        {member.tags.slice(0, 2).map((tag, index) => (
                          <span
                            key={index}
                            className={`px-2 py-0.5 border border-gray-300 text-gray-700 text-xs rounded-full font-medium`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      {/* Company Logo */}
                      <div className="flex justify-center ">
                        <img src={member.companyLogo} alt={member.company} className="w-full h-10 object-contain " />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-4 gap-2">
            {featuredFaculty.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  if (carouselRef.current) {
                    const cardWidth = carouselRef.current.scrollWidth / featuredFaculty.length;
                    carouselRef.current.scrollTo({
                      left: index * cardWidth,
                      behavior: 'smooth'
                    });
                  }
                }}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${index === currentSlide
                    ? `${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} scale-125`
                    : 'bg-gray-300 hover:bg-gray-400'
                  }`}
              />
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
}

