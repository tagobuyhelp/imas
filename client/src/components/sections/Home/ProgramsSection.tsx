import React, { useState, useRef, useEffect } from 'react';
import { Button } from '../../ui/button';
import {
  GraduationCap,
  Users,
  Clock,
  MapPin,
  Star,
  TrendingUp,
  Award,
  CheckCircle,
  BookOpen,
  Briefcase,
  Globe,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { IMAS_TAILWIND_CLASSES, IMAS_PROGRAMS } from '../../../lib/constants';
import { programsData } from '../../../lib/programsData';

export function ProgramsSection() {
  const [activeTab, setActiveTab] = useState<'regular' | 'executive'>('regular');
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Get icon for program based on category/subcategory
  const getIconForProgram = (category: string, subcategory?: string) => {
    switch (subcategory) {
      case 'marketing': return BookOpen;
      case 'finance': return TrendingUp;
      case 'hr': return Users;
      case 'analytics': return TrendingUp;
      case 'ai': return Award;
      case 'fintech': return TrendingUp;
      case 'healthcare': return Users;
      case 'iev': return Briefcase;
      case 'logistics': return Briefcase;
      case 'operations': return Briefcase;
      case 'agri': return Briefcase;
      default:
        if (category === 'mba-global') return Globe;
        return GraduationCap;
    }
  };

  // Get image for program
  const getImageForProgram = (program: any) => {
    // Use heroImage if available, otherwise fallback to default images
    if (program.heroImage?.desktop) {
      return program.heroImage.desktop;
    }
    
    // Fallback images based on subcategory
    switch (program.subcategory) {
      case 'marketing': return '/uploads/pgdm-marketing.jpg';
      case 'finance': return '/uploads/pgdm-finance.jpg';
      case 'hr': return '/uploads/pgdm-hr.jpg';
      case 'analytics': return '/uploads/pgdm-ba.jpg';
      case 'ai': return '/uploads/pgdm-ai&ds.jpg';
      case 'fintech': return '/uploads/pgdm-fnt.jpg';
      case 'healthcare': return '/uploads/pgdm-healthcare.jpg';
      case 'iev': return '/uploads/pgdm-iev.jpg';
      case 'logistics': return '/uploads/pgdm-logistics.jpg';
      case 'operations': return '/uploads/pgdm-operations.jpg';
      case 'agri': return '/uploads/pgdm-agri.jpg';
      default:
        if (program.category === 'mba-global') return '/uploads/mba_global.jpg';
        return '/uploads/pgdm.jpg';
    }
  };

  // Transform programsData into the format needed for the UI
  const transformProgramData = (program: any) => {
    return {
      name: program.name,
      duration: program.duration,
      location: program.location,
      image: getImageForProgram(program),
      description: program.description,
      highlights: program.highlights?.slice(0, 4) || [],
      features: program.whatYouLearn?.slice(0, 4) || [],
      icon: getIconForProgram(program.category, program.subcategory),
      cta: program.cta
    };
  };

  // Get programs by category
  const getRegularPrograms = () => {
    return programsData
      .filter(program => program.category === 'pgdm-plus' || program.category === 'mba-global')
      .map(transformProgramData);
  };

  const getExecutivePrograms = () => {
    return programsData
      .filter(program => program.category === 'executive')
      .map(transformProgramData);
  };

  const programDetails = {
    regular: getRegularPrograms(),
    executive: getExecutivePrograms()
  };

  // Carousel navigation functions
  const scrollToNext = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.scrollWidth / programDetails[activeTab].length;
      const newIndex = Math.min(currentIndex + 1, programDetails[activeTab].length - 1);
      setCurrentIndex(newIndex);
      carouselRef.current.scrollTo({
        left: newIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const scrollToPrev = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.scrollWidth / programDetails[activeTab].length;
      const newIndex = Math.max(currentIndex - 1, 0);
      setCurrentIndex(newIndex);
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
        setShowLeftArrow(scrollLeft > 0);
        setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
      }
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', handleScroll);
      return () => carousel.removeEventListener('scroll', handleScroll);
    }
  }, [activeTab]);

  // Reset carousel when tab changes
  useEffect(() => {
    setCurrentIndex(0);
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [activeTab]);

  return (
    <section id="about-the-program" className="py-8 sm:py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-[1460px] mx-auto px-4">
        {/* Section Header - Mobile Optimized */}
        <div className="text-center mb-6 sm:mb-12">
          <div className={`inline-block ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE}/10 ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 border ${IMAS_TAILWIND_CLASSES.BORDER_DARK_BLUE}/20`}>
            FLAGSHIP PROGRAMS
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 px-2">
            Transform Your Career with IMAS
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2">
            Choose from our comprehensive range of AICTE-approved programs designed to equip you with next-generation skills
          </p>
        </div>

        {/* Program Type Tabs - Mobile Optimized */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="bg-white rounded-lg p-1 shadow-md border border-gray-200 w-full max-w-sm">
            <button
              onClick={() => setActiveTab('regular')}
              className={`w-1/2 px-3 sm:px-6 py-3 rounded-md font-semibold transition-all duration-300 text-sm sm:text-base ${activeTab === 'regular'
                ? `${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} text-white shadow-lg`
                : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
            >
              <div className="flex items-center justify-center gap-1 sm:gap-2">
                <GraduationCap className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>Regular</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('executive')}
              className={`w-1/2 px-3 sm:px-6 py-3 rounded-md font-semibold transition-all duration-300 text-sm sm:text-base ${activeTab === 'executive'
                ? `${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} text-white shadow-lg`
                : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
            >
              <div className="flex items-center justify-center gap-1 sm:gap-2">
                <Users className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>Executive</span>
              </div>
            </button>
          </div>
        </div>

        {/* Program Cards Carousel - Mobile Optimized */}
        <div className="relative mb-6 sm:mb-8">
          {/* Navigation Arrows */}
          <button
            onClick={scrollToPrev}
            className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${showLeftArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'
              } hover:scale-110 active:scale-95`}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={scrollToNext}
            className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${showRightArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'
              } hover:scale-110 active:scale-95`}
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Carousel Container */}
          <div
            ref={carouselRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {programDetails[activeTab].map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100 flex-shrink-0"
                style={{ width: '280px', minWidth: '280px' }}
              >
                {/* Program Header - Mobile Optimized */}
                <div className="relative h-48 sm:h-48 overflow-hidden">
                  {/* Background Image */}
                  <img
                    src={program.image}
                    alt={program.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  {/* Fallback Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 hidden"></div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                  {/* Icon */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <div className={`w-8 h-8 sm:w-12 sm:h-12 ${IMAS_TAILWIND_CLASSES.BG_TEAL} rounded-lg flex items-center justify-center shadow-lg`}>
                      <program.icon className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                    <h3 className="text-base sm:text-lg font-bold text-white mb-1 line-clamp-2">
                      {program.name}
                    </h3>
                    <div className="flex items-center gap-3 sm:gap-4 text-white/90 text-xs sm:text-sm">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        <span className="hidden sm:inline">{program.location}</span>
                        <span className="sm:hidden">Kolkata</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Program Content - Mobile Optimized */}
                <div className="p-4 sm:p-6">
                  <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
                    {program.description}
                  </p>

                  {/* Highlights - Mobile Optimized */}
                  <div className="mb-3 sm:mb-4">
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-800 mb-2">Key Highlights</h4>
                    <div className="flex flex-wrap gap-1">
                      {program.highlights.slice(0, 2).map((highlight: string, idx: number) => (
                        <span
                          key={idx}
                          className={`text-xs px-2 py-1 rounded-full ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE}/10 ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} font-medium`}
                        >
                          {highlight}
                        </span>
                      ))}
                      {program.highlights.length > 2 && (
                        <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600 font-medium">
                          +{program.highlights.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Features - Mobile Optimized */}
                  <div className="mb-4">
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-800 mb-2">What You'll Learn</h4>
                    <div className="space-y-1">
                      {program.features.slice(0, 1).map((feature: string, idx: number) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                          <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                          <span className="line-clamp-1">{feature}</span>
                        </div>
                      ))}
                      {program.features.length > 1 && (
                        <div className="text-xs text-gray-500 italic">
                          +{program.features.length - 1} more skills
                        </div>
                      )}
                    </div>
                  </div>

                  {/* CTA Button - Mobile Optimized */}
                  <div className="w-full">
                    {/* Read More Button */}
                    <Button 
                      onClick={() => {
                        // Navigate to program details page using correct slug from programsData
                        const programData = programsData.find(p => p.name === program.name);
                        const programSlug = programData?.slug || program.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                        window.open(`/programs/${programSlug}`, '_blank');
                      }}
                      variant="outline"
                      className="w-full border-2 border-gray-300 bg-white hover:bg-gray-50 text-gray-700 hover:text-gray-900 py-3 sm:py-2 text-xs sm:text-sm font-semibold transition-all duration-300 active:scale-95"
                    >
                      <BookOpen className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                      <span>Read More</span>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-4 gap-2">
            {programDetails[activeTab].map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  if (carouselRef.current) {
                    const cardWidth = carouselRef.current.scrollWidth / programDetails[activeTab].length;
                    carouselRef.current.scrollTo({
                      left: index * cardWidth,
                      behavior: 'smooth'
                    });
                  }
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                  ? `${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} w-6`
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
