import React, { useState, useRef, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { GraduationCap, Users, ChevronLeft, ChevronRight, FileText, ArrowRight } from 'lucide-react';
import { IMAS_TAILWIND_CLASSES } from '../lib/constants';

export function FacultyPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const faculty = [
    {
      name: 'Dr. KUNAL SIL',
      title: 'Dean Academics',
      qualifications: 'Ph.D. Management, MBA',
      image: '/uploads/9159501.jpeg',
      expertise: 'Management & Leadership'
    },
    {
      name: 'Mr. RAJIB BHATTACHARYYA',
      title: 'Assistant Professor',
      qualifications: 'M.Com',
      image: '/uploads/3635302.png',
      expertise: 'Commerce & Finance'
    },
    {
      name: 'Ms. SHREENITA SEAL',
      title: 'Assistant Professor',
      qualifications: 'MA English',
      image: '/uploads/1833248.jpeg',
      expertise: 'Communication & English'
    },
    {
      name: 'Mr. AMIT NATH',
      title: 'Adjunct Professor',
      qualifications: 'CA, MBA',
      image: '/uploads/4108359.jpeg',
      expertise: 'Accounting & Finance'
    },
    {
      name: 'Dr. TAMAL TARU ROY',
      title: 'Adjunct Professor',
      qualifications: 'Ph.D. Management, MBA, MCom, PGDHRM',
      image: '/uploads/8167024.jpeg',
      expertise: 'Human Resource Management'
    }
  ];

  // Navigation functions
  const nextSlide = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.scrollWidth / faculty.length;
      const newIndex = Math.min(currentSlide + 1, faculty.length - 1);
      setCurrentSlide(newIndex);
      carouselRef.current.scrollTo({
        left: newIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const prevSlide = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.scrollWidth / faculty.length;
      const newIndex = Math.max(currentSlide - 1, 0);
      setCurrentSlide(newIndex);
      carouselRef.current.scrollTo({
        left: newIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  // Update scroll position on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        // You can add scroll position logic here if needed
      }
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', handleScroll);
      return () => carousel.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/uploads/imas_hero_image1.webp"
            alt="IMAS Faculty Hero Background"
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
          {/* Additional Pattern Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-teal-900/20"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1550px] mx-auto px-4 text-center">
          {/* Animated Badge */}
          <div className="inline-block mb-4 sm:mb-6 md:mb-8 animate-fade-in-up">
            <div className={`${IMAS_TAILWIND_CLASSES.BG_MEDIUM_BLUE} text-white px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full text-xs sm:text-sm font-bold shadow-2xl border border-white/20 backdrop-blur-sm`}>
              <Users className="inline-block w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">OUR DISTINGUISHED FACULTIES</span>
              <span className="sm:hidden">OUR FACULTIES</span>
            </div>
          </div>

          {/* Main Heading with Animation */}
          <div className="mb-4 sm:mb-6 md:mb-8 animate-fade-in-up animation-delay-200">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight px-2">
              <span className="block sm:inline">Empowering Tomorrow's</span>{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent block sm:inline">
                Business Leaders
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light px-4">
              <span className="hidden sm:inline">Meet our world-class faculty who bring decades of industry experience and academic excellence to shape the next generation of global business leaders.</span>
              <span className="sm:hidden">Meet our world-class faculty shaping tomorrow's business leaders.</span>
            </p>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center animate-fade-in-up animation-delay-400 px-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 sm:px-8 sm:py-3 md:px-10 md:py-4 text-sm sm:text-base md:text-lg font-semibold shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 border border-white/20 backdrop-blur-sm w-full sm:w-auto"
            >
              <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 mr-2 sm:mr-3" />
              Apply Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 px-6 py-3 sm:px-8 sm:py-3 md:px-10 md:py-4 text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/10 w-full sm:w-auto"
            >
              <FileText className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 mr-2 sm:mr-3" />
              <span className="hidden sm:inline">Download Brochure</span>
              <span className="sm:hidden">Brochure</span>
            </Button>
          </div>

          {/* Floating Elements - Hidden on mobile */}
          <div className="hidden md:block absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="hidden md:block absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse animation-delay-1000"></div>
        </div>

        {/* Scroll Indicator - Hidden on mobile */}
        <div className="hidden sm:block absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-4 h-6 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-white/70 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-8 bg-white">
        <div className="max-w-[1550px] mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Our <span className={`${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE}`}>Faculties</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
              Are you a working professional looking to climb the corporate ladder without pressing pause on your career? The PGDM Executive Programme at IMAS B School in Kolkata, West Bengal, is designed precisely for ambitious individuals like you. This AICTE-approved programme blends academic excellence with real-world relevance, ensuring you gain the skills and confidence needed to lead in today's fast-paced business environment.
            </p>
          </div>

          {/* Faculty Carousel */}
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
            >
              {faculty.map((member, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-72 sm:w-80 md:w-96 group cursor-pointer"
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 group-hover:border-gray-200 h-full flex flex-col">
                    {/* Image Section */}
                    <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/uploads/placeholder-faculty.jpg';
                        }}
                      />

                      {/* Hover Effect Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Content Section */}
                    <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
                      <div>
                        {/* Faculty Name */}
                        <h3 className="font-bold text-gray-900 text-lg sm:text-xl mb-2 text-center group-hover:text-gray-900 transition-colors">{member.name}</h3>

                        {/* Title */}
                        <p className="text-sm sm:text-base text-gray-600 mb-3 text-center font-medium">{member.title}</p>

                        {/* Qualifications */}
                        <div className="text-sm text-gray-700 mb-4 text-center">
                          <p className={`${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} font-semibold`}>
                            {member.qualifications}
                          </p>
                        </div>

                        {/* Expertise */}
                        <div className="text-sm text-gray-600 mb-4 text-center">
                          <span className="text-gray-500">Expertise: </span>
                          <span className={`${IMAS_TAILWIND_CLASSES.TEXT_TEAL} font-medium`}>
                            {member.expertise}
                          </span>
                        </div>
                      </div>

                      
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 gap-3">
              {faculty.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index);
                    if (carouselRef.current) {
                      const cardWidth = carouselRef.current.scrollWidth / faculty.length;
                      carouselRef.current.scrollTo({
                        left: index * cardWidth,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                      ? `${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} scale-125`
                      : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}