import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { Button } from '../../ui/button';
import {
  GraduationCap,
  Users,
  Clock,
  MapPin,
  TrendingUp,
  Award,
  CheckCircle,
  BookOpen,
  Briefcase,
  Globe,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { IMAS_TAILWIND_CLASSES } from '../../../lib/constants';
import { programsData } from '../../../lib/programsData';

// Types
interface TransformedProgram {
  name: string;
  duration: string;
  location: string;
  image: string;
  description: string;
  highlights: string[];
  features: string[];
  icon: React.ComponentType<any>;
  cta?: any;
  slug?: string;
}

type ProgramCategory = 'regular' | 'executive';

// Constants
const ICON_MAP = {
  marketing: BookOpen,
  finance: TrendingUp,
  hr: Users,
  analytics: TrendingUp,
  ai: Award,
  fintech: TrendingUp,
  healthcare: Users,
  iev: Briefcase,
  logistics: Briefcase,
  operations: Briefcase,
  agri: Briefcase,
} as const;

// Direct program image mapping based on program slugs
const PROGRAM_IMAGE_MAP = {
  // PGDM Plus Programs
  'pgdm-plus-marketing-management': '/uploads/PGDM_Plus_in_Marketing_Management.png',
  'pgdm-plus-financial-management': '/uploads/PGDM_Plus_in_Financial_Management.png',
  'pgdm-plus-human-resource-management': '/uploads/PGDM_Plus_in_Human_Resource_Management.png',
  'pgdm-plus-business-analytics': '/uploads/PGDM_Plus_in_Business_Analytics.png',
  'pgdm-plus-artificial-intelligence-data-science': '/uploads/PGDM_Plus_in_Artificial_Intelligence_&_Data_Science.png',
  'pgdm-plus-fintech': '/uploads/PGDM_Plus_in_Fintech.png',
  'pgdm-plus-hospital-healthcare-management': '/uploads/PGDM_Plus_in_Hospital_&_Healthcare_Management.png',
  'pgdm-plus-innovation-entrepreneurship-venture-development': '/uploads/PGDM_Plus_in_Innovation_Entrepreneurship_&_Venture_Development.png',
  
  // Working Executive Programs
  'pgdm-marketing-working-executive': '/uploads/PGDM_in_Marketing_Working_Executive.png',
  'pgdm-finance-working-executive': '/uploads/PGDM_in_Finance_Working_Executive.png',
  'pgdm-hr-working-executive': '/uploads/PGDM_in_Human_Resource_Working_Executive.png',
  'pgdm-analytics-working-executive': '/uploads/PGDM_in_Business_Analytics_Working_Executive.png',
  'pgdm-ai-working-executive': '/uploads/PGDM_in_Artificial_Intelligence_&_Data_Science_Working_Executive.png',
  'pgdm-fintech-working-executive': '/uploads/PGDM_in_Fintech_Working_Executive.png',
  'pgdm-logistics-working-executive': '/uploads/PGDM_in_Logistics_&_Supply_Chain_Management_Working_Executive.png',
  'pgdm-operations-working-executive': '/uploads/PGDM_in_Operations_Management_Working_Executive.png',
  'pgdm-agri-working-executive': '/uploads/PGDM_in_Agri_Business_Management_Working_Executive.png',
  'pgdm-healthcare-working-executive': '/uploads/PGDM_in_Hospital_&_Healthcare_Management_Working_Executive.png',
  
  // MBA Global Program
  'mba-global': '/uploads/mba_global.jpg',
} as const;

const CARD_WIDTH = 280;
const SCROLL_THRESHOLD = 10;

export function ProgramsSection() {
  const [activeTab, setActiveTab] = useState<'regular' | 'executive'>('regular');
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Utility functions with better performance and type safety
  const getIconForProgram = useCallback((category: string, subcategory?: string): React.ComponentType<any> => {
    if (subcategory && subcategory in ICON_MAP) {
      return ICON_MAP[subcategory as keyof typeof ICON_MAP];
    }
    return category === 'mba-global' ? Globe : GraduationCap;
  }, []);

  const getImageForProgram = useCallback((program: any): string => {
    // Use heroImage if available, otherwise fallback to program-specific images
    if (program.heroImage?.desktop) {
      return program.heroImage.desktop;
    }
    
    // Direct program image mapping based on slug
    if (program.slug && program.slug in PROGRAM_IMAGE_MAP) {
      return PROGRAM_IMAGE_MAP[program.slug as keyof typeof PROGRAM_IMAGE_MAP];
    }
    
    // Fallback based on category for unmapped programs
    if (program.category === 'mba-global') {
      return '/uploads/mba_global.jpg';
    }
    
    if (program.category === 'executive') {
      return '/uploads/PGDM_in_Marketing_Working_Executive.png';
    }
    
    if (program.category === 'pgdm-plus') {
      return '/uploads/PGDM_Plus_in_Marketing_Management.png';
    }
    
    // Default fallback
    return '/uploads/pgdm.jpg';
  }, []);

  const transformProgramData = useCallback((program: any): TransformedProgram => ({
    name: program.name,
    duration: program.duration,
    location: program.location,
    image: getImageForProgram(program),
    description: program.description,
    highlights: program.highlights?.slice(0, 4) || [],
    features: program.whatYouLearn?.slice(0, 4) || [],
    icon: getIconForProgram(program.category, program.subcategory),
    cta: program.cta,
    slug: program.slug
  }), [getImageForProgram, getIconForProgram]);

  // Memoized program data to prevent unnecessary recalculations
  const programDetails = useMemo(() => {
    const regularPrograms = programsData
      .filter(program => program.category === 'pgdm-plus' || program.category === 'mba-global')
      .map(transformProgramData);
    
    const executivePrograms = programsData
      .filter(program => program.category === 'executive')
      .map(transformProgramData);

    return {
      regular: regularPrograms,
      executive: executivePrograms
    };
  }, [transformProgramData]);

  // Optimized carousel navigation functions
  const scrollToNext = useCallback(() => {
    if (!carouselRef.current) return;
    
    const maxIndex = programDetails[activeTab].length - 1;
    const newIndex = Math.min(currentIndex + 1, maxIndex);
    
    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
      carouselRef.current.scrollTo({
        left: newIndex * CARD_WIDTH,
        behavior: 'smooth'
      });
    }
  }, [currentIndex, activeTab, programDetails]);

  const scrollToPrev = useCallback(() => {
    if (!carouselRef.current) return;
    
    const newIndex = Math.max(currentIndex - 1, 0);
    
    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
      carouselRef.current.scrollTo({
        left: newIndex * CARD_WIDTH,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  const scrollToIndex = useCallback((index: number) => {
    if (!carouselRef.current || index === currentIndex) return;
    
    setCurrentIndex(index);
    carouselRef.current.scrollTo({
      left: index * CARD_WIDTH,
      behavior: 'smooth'
    });
  }, [currentIndex]);

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    if (!carouselRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - SCROLL_THRESHOLD);
  }, []);

  // Update arrow visibility on scroll
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Initial check
    handleScroll();
    
    carousel.addEventListener('scroll', handleScroll, { passive: true });
    return () => carousel.removeEventListener('scroll', handleScroll);
  }, [activeTab, handleScroll]);

  // Reset carousel when tab changes
  useEffect(() => {
    setCurrentIndex(0);
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [activeTab]);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        scrollToPrev();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        scrollToNext();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [scrollToPrev, scrollToNext]);

  // Component for program card to improve readability
  const ProgramCard = ({ program, index }: { program: TransformedProgram; index: number }) => {
    const handleNavigateToProgram = useCallback(() => {
      const programSlug = program.slug || program.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      window.open(`/programs/${programSlug}`, '_blank');
    }, [program.slug, program.name]);

    return (
      <article
        className="bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100 flex-shrink-0"
        style={{ width: `${CARD_WIDTH}px`, minWidth: `${CARD_WIDTH}px` }}
        role="article"
        aria-labelledby={`program-title-${index}`}
      >
        {/* Program Header */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={program.image}
            alt={`${program.name} program`}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.nextElementSibling?.classList.remove('hidden');
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 hidden" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
          <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
            <div className={`w-8 h-8 sm:w-12 sm:h-12 ${IMAS_TAILWIND_CLASSES.BG_TEAL} rounded-lg flex items-center justify-center shadow-lg`}>
              <program.icon className="h-4 w-4 sm:h-6 sm:w-6 text-white" aria-hidden="true" />
            </div>
          </div>

          <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
            <h3 id={`program-title-${index}`} className="text-base sm:text-lg font-bold text-white mb-1 line-clamp-2">
              {program.name}
            </h3>
            <div className="flex items-center gap-3 sm:gap-4 text-white/90 text-xs sm:text-sm">
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" aria-hidden="true" />
                <span>{program.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3" aria-hidden="true" />
                <span className="hidden sm:inline">{program.location}</span>
                <span className="sm:hidden">Kolkata</span>
              </div>
            </div>
          </div>
        </div>

        {/* Program Content */}
        <div className="p-4 sm:p-6">
          <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-1">
            {program.description.length > 80 ? `${program.description.substring(0, 80)}...` : program.description}
          </p>

          {/* Highlights */}
          <div className="mb-3 sm:mb-4">
            <h4 className="text-xs sm:text-sm font-semibold text-gray-800 mb-2">Key Highlights</h4>
            <div className="flex flex-wrap gap-1">
              {program.highlights.slice(0, 1).map((highlight: string, idx: number) => (
                <span
                  key={idx}
                  className={`text-xs px-2 py-1 rounded-full ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE}/10 ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} font-medium`}
                >
                  {highlight.length > 50 ? `${highlight.substring(0, 50)}...` : highlight}
                </span>
              ))}
              {program.highlights.length > 1 && (
                <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600 font-medium">
                  +{program.highlights.length - 1} more
                </span>
              )}
            </div>
          </div>

          {/* Features */}
          <div className="mb-4">
            <h4 className="text-xs sm:text-sm font-semibold text-gray-800 mb-2">What You'll Learn</h4>
            <div className="space-y-1">
              {program.features.slice(0, 1).map((feature: string, idx: number) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                  <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" aria-hidden="true" />
                  <span className="line-clamp-1">{feature.length > 40 ? `${feature.substring(0, 40)}...` : feature}</span>
                </div>
              ))}
              {program.features.length > 1 && (
                <div className="text-xs text-gray-500 italic">
                  +{program.features.length - 1} more skills
                </div>
              )}
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            onClick={handleNavigateToProgram}
            variant="outline"
            className="w-full border-2 border-gray-300 bg-white hover:bg-gray-50 text-gray-700 hover:text-gray-900 py-3 sm:py-2 text-xs sm:text-sm font-semibold transition-all duration-300 active:scale-95"
            aria-label={`Learn more about ${program.name}`}
          >
            <BookOpen className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" aria-hidden="true" />
            <span>Read More</span>
          </Button>
        </div>
      </article>
    );
  };

  return (
    <section id="about-the-program" className="py-8 sm:py-16 bg-gradient-to-br from-gray-50 to-white" aria-labelledby="programs-heading">
      <div className="max-w-[1460px] mx-auto px-4">
        {/* Section Header */}
        <header className="text-center mb-6 sm:mb-12">
          <div className={`inline-block ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE}/10 ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 border ${IMAS_TAILWIND_CLASSES.BORDER_DARK_BLUE}/20`}>
            FLAGSHIP PROGRAMS
          </div>
          <h2 id="programs-heading" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 px-2">
            Transform Your Career with IMAS
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2">
            Choose from our comprehensive range of AICTE-approved programs designed to equip you with next-generation skills
          </p>
        </header>

        {/* Program Type Tabs */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="bg-white rounded-lg p-1 shadow-md border border-gray-200 w-full max-w-sm" role="tablist" aria-label="Program types">
            <button
              onClick={() => setActiveTab('regular')}
              className={`w-1/2 px-3 sm:px-6 py-3 rounded-md font-semibold transition-all duration-300 text-sm sm:text-base ${activeTab === 'regular'
                ? `${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} text-white shadow-lg`
                : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
              role="tab"
              aria-selected={activeTab === 'regular'}
              aria-controls="regular-programs"
              id="regular-tab"
            >
              <div className="flex items-center justify-center gap-1 sm:gap-2">
                <GraduationCap className="h-3 w-3 sm:h-4 sm:w-4" aria-hidden="true" />
                <span>Regular</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('executive')}
              className={`w-1/2 px-3 sm:px-6 py-3 rounded-md font-semibold transition-all duration-300 text-sm sm:text-base ${activeTab === 'executive'
                ? `${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} text-white shadow-lg`
                : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
              role="tab"
              aria-selected={activeTab === 'executive'}
              aria-controls="executive-programs"
              id="executive-tab"
            >
              <div className="flex items-center justify-center gap-1 sm:gap-2">
                <Users className="h-3 w-3 sm:h-4 sm:w-4" aria-hidden="true" />
                <span>Executive</span>
              </div>
            </button>
          </div>
        </div>

        {/* Program Cards Carousel */}
        <div className="relative mb-6 sm:mb-8" role="region" aria-labelledby={`${activeTab}-programs-heading`} aria-live="polite">
          <h3 id={`${activeTab}-programs-heading`} className="sr-only">
            {activeTab === 'regular' ? 'Regular' : 'Executive'} Programs Carousel
          </h3>
          
          {/* Navigation Arrows */}
          <button
            onClick={scrollToPrev}
            className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${showLeftArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'
              } hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
            aria-label="Previous programs"
            disabled={!showLeftArrow}
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>

          <button
            onClick={scrollToNext}
            className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${showRightArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'
              } hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
            aria-label="Next programs"
            disabled={!showRightArrow}
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>

          {/* Carousel Container */}
          <div
            ref={carouselRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            role="tabpanel"
            aria-labelledby={`${activeTab}-tab`}
            id={`${activeTab}-programs`}
          >
            {programDetails[activeTab].map((program, index) => (
              <ProgramCard key={`${activeTab}-${index}`} program={program} index={index} />
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-4 gap-2" role="group" aria-label="Program carousel indicators">
            {programDetails[activeTab].map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${index === currentIndex
                  ? `${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} w-6`
                  : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                aria-label={`Go to program ${index + 1}`}
                aria-current={index === currentIndex ? 'true' : 'false'}
              />
            ))}
          </div>
        </div>

        {/* View All Programs Button */}
        <div className="text-center mt-8">
          <Button
            onClick={() => window.open('/programs', '_blank')}
            className={`${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} hover:bg-blue-800 text-white px-8 py-3 text-sm font-semibold transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
            aria-label="View all programs in a new tab"
          >
            <BookOpen className="h-4 w-4 mr-2" aria-hidden="true" />
            View All Programs
          </Button>
        </div>

      </div>
    </section>
  );
}
