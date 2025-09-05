import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Users } from 'lucide-react';
import { IMAS_TAILWIND_CLASSES } from '../../../lib/constants';

export function LearnersSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

  const learners = [
    {
      name: 'Jayanto Chaterjee',
      photo: '/uploads/Jayanto_Chaterjee.jpeg',
      role: 'Student',
      rating: 5,
      testimonial: 'IMAS has not only helped me achieve my academics with foundation but also offered me many opportunities for my personal growth and development through a wide range of extracurricular activities.',
      experience: 'Student',
      education: 'IMAS College Kolkata'
    },
    {
      name: 'Tanish Sarkar',
      photo: '/uploads/tanish-sarkar.jpeg',
      role: 'Student',
      rating: 5,
      testimonial: 'Excellent faculties. Lot of opportunities are provided for personal and academic growth.',
      experience: 'Student',
      education: 'IMAS College Kolkata'
    },
    {
      name: 'Tania Sultana',
      photo: '/uploads/tania-sultana.jpeg',
      role: 'Student',
      rating: 5,
      testimonial: 'The College infrastructure is awesome . The Best part , it is fully airconditioned . The Classrooms are comfortable and connected with Smart Audio Visual equipment, The Labs are also equipped with latest equipment.',
      experience: 'Student',
      education: 'IMAS College Kolkata'
    },
    {
      name: 'Subhodeep Ghosh',
      photo: '/uploads/subhodeep-ghosh.jpeg',
      role: 'Student',
      rating: 5,
      testimonial: 'Overall, it\'s a good place for a full college experience with lots of chances to learn and grow.',
      experience: 'Student',
      education: 'IMAS College Kolkata'
    },
    {
      name: 'Shyam Sundar Banerjee',
      photo: '/uploads/shyam-sundar-banerjee.jpeg',
      role: 'Student',
      rating: 5,
      testimonial: 'Lot of Placement offers from renowned companies. IMAS is well connected with Industries which in turn help the students for multiple job offers.',
      experience: 'Student',
      education: 'IMAS College Kolkata'
    }
  ];

  // Navigation functions
  const nextSlide = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.scrollWidth / learners.length;
      const newIndex = Math.min(currentSlide + 1, learners.length - 1);
      setCurrentSlide(newIndex);
      carouselRef.current.scrollTo({
        left: newIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const prevSlide = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.scrollWidth / learners.length;
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
          const nextIndex = prev >= learners.length - 1 ? 0 : prev + 1;
          if (carouselRef.current) {
            const cardWidth = carouselRef.current.scrollWidth / learners.length;
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
  }, [isAutoScrolling, learners.length]);

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
    <section id="student-testimonials" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-[1500px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          {/* Badge */}
          <div className={`inline-block ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6 shadow-md`}>
            STUDENT TESTIMONIALS
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 px-2">
            What Our{' '}
            <span className={`${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE}`}>
              Students Say
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Hear from our students about their transformative journey at IMAS
          </p>
        </div>

        {/* Testimonials Carousel */}
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
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {learners.map((learner, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[350px] group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 border border-gray-100"
              >
                {/* Image Section */}
                <div className="relative h-64 sm:h-56 md:h-80 overflow-hidden">
                  <img
                    src={learner.photo}
                    alt={learner.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center hidden">
                    <Users className="h-12 w-12 sm:h-16 sm:w-16 text-gray-400" />
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                  {/* Role Badge */}
                  <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                    <div
                      className={`${IMAS_TAILWIND_CLASSES.BG_TEAL} text-white px-2 sm:px-3 py-1 rounded-full text-xs font-bold shadow-sm`}
                    >
                      {learner.role}
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Content Section */}
                <div className="p-3 sm:p-4 md:p-5">
                  {/* Name */}
                  <h3 className="font-bold text-gray-800 text-base sm:text-lg mb-1 group-hover:text-gray-900 transition-colors">
                    {learner.name}
                  </h3>

                  {/* Education */}
                  <div className="mb-2">
                    <span className="text-xs sm:text-sm text-gray-500">{learner.education}</span>
                  </div>

                  {/* Rating */}
                  <div className="mb-2">
                    <div className="flex gap-1">
                      {[...Array(learner.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xs sm:text-sm">★</span>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <p className="text-gray-600 leading-snug text-xs sm:text-sm">
                    "{learner.testimonial}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 sm:mt-8 gap-2 sm:gap-3">
            {learners.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  if (carouselRef.current) {
                    const cardWidth = carouselRef.current.scrollWidth / learners.length;
                    carouselRef.current.scrollTo({
                      left: index * cardWidth,
                      behavior: 'smooth'
                    });
                  }
                }}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
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
