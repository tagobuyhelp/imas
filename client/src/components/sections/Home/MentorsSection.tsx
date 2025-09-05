import React, { useState, useRef, useEffect } from 'react';
import { Button } from '../../ui/button';
import { Users, Building2, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { IMAS_TAILWIND_CLASSES } from '../../../lib/constants';

export function MentorsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

  const mentors = [
    {
      name: 'Anuj Ahuja',
      title: 'Ex - Head of Sales',
      company: 'Escorts Kubota Ltd',
      companyLogo: '/uploads/companies/escorts-kubota.png',
      details: 'Core Expertise: Sales & Marketing',
      image: '/uploads/Anuj-Ahuja.jpeg'
    },
    {
      name: 'Mr. Mayur Sahani',
      title: 'AVP – BFSI',
      company: 'Tech Mahindra',
      companyLogo: '/uploads/companies/tech-mahindra.png',
      details: 'Core Expertise: Finance',
      image: '/uploads/Mayur-Sahni.jpg'
    },
    {
      name: 'Ms. Amitha Krushnen',
      title: 'VP',
      company: 'Morgan Stanley',
      companyLogo: '/uploads/companies/morgan-stanley.png',
      details: 'Core Expertise: Finance',
      image: '/uploads/Amitha-Krushnen.jpeg'
    },
    {
      name: 'Mr. Vinod Anand',
      title: 'Ex- Project Manager',
      company: 'Infosys',
      companyLogo: '/uploads/companies/infosys.png',
      details: 'Core Expertise: Operation Management',
      image: '/uploads/Vinod-Anand.jpeg'
    },
    {
      name: 'Mr. Rajesh Dsouza',
      title: 'Ex – Director (Partner Management)',
      company: 'NIKE',
      companyLogo: '/uploads/companies/nike.png',
      details: 'Core Expertise: Sales & Marketing',
      image: '/uploads/Rajesh-Dsouza.jpeg'
    },
    {
      name: 'Mr. Ajay Bailur',
      title: 'Sr. Director',
      company: 'Infosys',
      companyLogo: '/uploads/companies/infosys.png',
      details: 'Core Expertise: Sales & Marketing',
      image: '/uploads/Ajay-Bailur.jpeg'
    },
    {
      name: 'Mr. Yogesh Pai',
      title: 'Head – Project Management',
      company: 'Adani Group of Companies',
      companyLogo: '/uploads/companies/adani-group.png',
      details: 'Core Expertise: Project Management',
      image: '/uploads/'
    },
    {
      name: 'Mr. Nilesh Kumar',
      title: 'Head – Sales & Distribution',
      company: 'Reliance Jio',
      companyLogo: '/uploads/companies/reliance-jio.png',
      details: 'Core Expertise: Sales & Distribution Management',
      image: '/uploads/Nilesh-Kumar.jpeg'
    },
    {
      name: 'Ms. Ramya Bhat',
      title: 'Manager – Staffing & Resource',
      company: 'Tata Consultancy Services',
      companyLogo: '/uploads/companies/tcs.png',
      details: 'Core Expertise: Human Resource Management',
      image: '/uploads/Ramya-Bhat.jpeg'
    },
    {
      name: 'Mr. Nishant Dave',
      title: 'Global Head – SAP Practice',
      company: 'Tata Consultancy Services',
      companyLogo: '/uploads/companies/tcs.png',
      details: 'Core Expertise: Operation Management',
      image: '/uploads/Nishant-Dave.jpeg'
    }
  ];

  // Navigation functions
  const nextSlide = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.scrollWidth / mentors.length;
      const newIndex = Math.min(currentSlide + 1, mentors.length - 1);
      setCurrentSlide(newIndex);
      carouselRef.current.scrollTo({
        left: newIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const prevSlide = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.scrollWidth / mentors.length;
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
          const nextIndex = prev >= mentors.length - 1 ? 0 : prev + 1;
          if (carouselRef.current) {
            const cardWidth = carouselRef.current.scrollWidth / mentors.length;
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
  }, [isAutoScrolling, mentors.length]);

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
    <section id="instructors-mentors" className="py-16 bg-white">
      <div className="max-w-[1550px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <div className={`inline-block ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-2 sm:mb-3 md:mb-4 shadow-lg`}>
            DESIGNED BY EXPERTS
          </div>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-2 sm:mb-3 md:mb-4 px-2 sm:px-4">
            Founded by Industry Leaders with <span className={`${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE}`}>Large Scale Businesses</span>
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto px-4">
            Learn from the best minds in the industry who have built and scaled successful businesses
          </p>
        </div>

        {/* Mentors Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className={`absolute left-2 sm:left-0 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} rounded-full shadow-lg flex items-center justify-center hover:bg-opacity-80 transition-all duration-300 border-2 border-white`}
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
          </button>

          <button
            onClick={nextSlide}
            className={`absolute right-2 sm:right-0 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} rounded-full shadow-lg flex items-center justify-center hover:bg-opacity-80 transition-all duration-300 border-2 border-white`}
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
          </button>

          {/* Carousel Container */}
          <div
            ref={carouselRef}
            className="flex gap-4 sm:gap-6 md:gap-8 overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-4 sm:px-12 md:px-16"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {mentors.map((mentor) => (
              <div key={mentor.name} className="flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[350px] h-[450px] sm:h-[500px] bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200 transform hover:scale-105 hover:-translate-y-1 group">
                <div className="flex flex-col h-full">
                  {/* Top Section - Mentor Image Full Cover */}
                  <div className="h-[250px] sm:h-[300px] relative overflow-hidden">
                    {mentor.image && mentor.image !== '/uploads/' ? (
                      <img
                        src={mentor.image}
                        alt={mentor.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div className={`w-full h-full ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE}/10 flex items-center justify-center ${mentor.image && mentor.image !== '/uploads/' ? 'hidden' : ''}`}>
                      <Users className={`h-16 w-16 sm:h-20 sm:w-20 ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE}`} />
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                    {/* Company Badge */}
                    <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1">
                      <span className="text-xs font-semibold text-gray-800">{mentor.company}</span>
                    </div>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Bottom Section - White Background for Text */}
                  <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Mentor Name */}
                      <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-2 text-center group-hover:text-gray-900 transition-colors">{mentor.name}</h3>

                      {/* Title */}
                      <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 text-center font-medium">{mentor.title}</p>

                      {/* Details with highlighted keywords */}
                      <div className="text-xs sm:text-sm text-gray-700 mb-3 sm:mb-4 leading-relaxed text-center">
                        <p>
                          {mentor.details.split(' ').map((word, index) => {
                            if (word.includes('Sales') || word.includes('Marketing') || word.includes('Finance') || word.includes('Management') || word.includes('Operations')) {
                              return (
                                <span key={index} className={`${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} font-bold`}>
                                  {word}{' '}
                                </span>
                              );
                            }
                            return <span key={index}>{word} </span>;
                          })}
                        </p>
                      </div>
                    </div>

                    {/* LinkedIn Link */}
                    <div className="text-center">
                      <a href="#" className={`inline-flex items-center gap-1 sm:gap-2 ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-opacity-80 transition-all duration-300 group-hover:gap-2 sm:group-hover:gap-3`}>
                        Connect on LinkedIn
                        <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 transform group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 sm:mt-8 gap-2 sm:gap-3">
            {mentors.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  if (carouselRef.current) {
                    const cardWidth = carouselRef.current.scrollWidth / mentors.length;
                    carouselRef.current.scrollTo({
                      left: index * cardWidth,
                      behavior: 'smooth'
                    });
                  }
                }}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
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

