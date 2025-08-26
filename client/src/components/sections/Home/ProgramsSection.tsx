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
  ArrowRight,
  CheckCircle,
  BookOpen,
  Briefcase,
  Globe,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { IMAS_TAILWIND_CLASSES, IMAS_PROGRAMS } from '../../../lib/constants';

export function ProgramsSection() {
  const [activeTab, setActiveTab] = useState<'regular' | 'executive'>('regular');
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const programDetails = {
    regular: [
      {
        name: 'Post Graduate Diploma in Management (PGDM)',
        duration: '2 Years',
        location: 'Kolkata Campus',
        image: '/uploads/pgdm.jpg',
        description: 'AICTE-approved, industry-focused core management program',
        highlights: ['AICTE Approved', 'Industry Projects', 'Placement Support', 'Expert Faculty'],
        features: ['Core Management Skills', 'Industry Integration', 'Leadership Development', 'Global Perspective'],
        icon: GraduationCap
      },
      {
        name: 'MBA (Global)',
        duration: '2 Years',
        location: 'Kolkata + UK Partner',
        image: '/uploads/mba_global.jpg',
        description: '1 Year at IMAS Kolkata + 1 Year at a leading UK Partner University',
        highlights: ['International Exposure', 'UK Partner University', 'Global Network', 'Dual Certification'],
        features: ['International Curriculum', 'Study Abroad', 'Global Alumni Network', 'Cultural Exchange'],
        icon: Globe
      },
      {
        name: 'PGDM in Business Analytics',
        duration: '2 Years',
        location: 'Kolkata Campus',
        image: '/uploads/pgdm-ba.jpg',
        description: 'Learn data-driven decision-making',
        highlights: ['Data Analytics', 'Statistical Tools', 'Business Intelligence', 'Predictive Modeling'],
        features: ['R & Python Programming', 'Tableau & Power BI', 'Machine Learning', 'Big Data Analytics'],
        icon: TrendingUp
      },
      {
        name: 'PGDM in AI & Data Science',
        duration: '2 Years',
        location: 'Kolkata Campus',
        image: '/uploads/pgdm-ai&ds.jpg',
        description: 'Future-ready AI & ML skills for business',
        highlights: ['AI & ML', 'Deep Learning', 'NLP', 'Computer Vision'],
        features: ['TensorFlow & PyTorch', 'Natural Language Processing', 'Computer Vision', 'AI Ethics'],
        icon: Award
      },
      {
        name: 'PGDM in Fintech',
        duration: '2 Years',
        location: 'Kolkata Campus',
        image: '/uploads/pgdm-fnt.jpg',
        description: 'Finance + Technology innovations for tomorrow\'s markets',
        highlights: ['Blockchain', 'Digital Banking', 'Cryptocurrency', 'RegTech'],
        features: ['Blockchain Development', 'Digital Payments', 'Financial Modeling', 'Regulatory Compliance'],
        icon: TrendingUp
      },
      {
        name: 'PGDM in Innovation & Entrepreneurship',
        duration: '2 Years',
        location: 'Kolkata Campus',
        image: '/uploads/pgdm-iev.jpg',
        description: 'Build and scale ventures with expert mentorship',
        highlights: ['Startup Mentorship', 'Venture Development', 'Innovation Labs', 'Funding Support'],
        features: ['Business Model Canvas', 'Pitch Deck Creation', 'Market Research', 'Investor Relations'],
        icon: Briefcase
      }
    ],
    executive: [
      {
        name: 'PGDM in Hospital & Healthcare Administration',
        duration: '18 Months',
        location: 'Kolkata Campus',
        image: '/images/programs/healthcare.jpg',
        description: 'Specialized healthcare management',
        highlights: ['Healthcare Management', 'Hospital Operations', 'Medical Tourism', 'Health Policy'],
        features: ['Hospital Administration', 'Healthcare Marketing', 'Medical Ethics', 'Health Informatics'],
        icon: Users
      },
      {
        name: 'PGDM in Business Analytics',
        duration: '18 Months',
        location: 'Kolkata Campus',
        image: '/images/programs/executive-analytics.jpg',
        description: 'Data analytics for executives',
        highlights: ['Executive Analytics', 'Strategic Decision Making', 'Performance Metrics', 'Business Intelligence'],
        features: ['Advanced Analytics', 'Executive Dashboard', 'KPI Management', 'Strategic Planning'],
        icon: TrendingUp
      },
      {
        name: 'PGDM in AI & Data Science',
        duration: '18 Months',
        location: 'Kolkata Campus',
        image: '/images/programs/executive-ai.jpg',
        description: 'AI leadership for professionals',
        highlights: ['AI Leadership', 'Digital Transformation', 'Innovation Management', 'Technology Strategy'],
        features: ['AI Strategy', 'Digital Leadership', 'Change Management', 'Technology Governance'],
        icon: Award
      },
      {
        name: 'PGDM in Fintech',
        duration: '18 Months',
        location: 'Kolkata Campus',
        image: '/images/programs/executive-fintech.jpg',
        description: 'Digital finance for executives',
        highlights: ['Digital Finance', 'Financial Innovation', 'Risk Management', 'Compliance'],
        features: ['Digital Banking', 'Financial Technology', 'Risk Assessment', 'Regulatory Framework'],
        icon: TrendingUp
      },
      {
        name: 'PGDM in Marketing',
        duration: '18 Months',
        location: 'Kolkata Campus',
        image: '/images/programs/marketing.jpg',
        description: 'Strategic marketing leadership',
        highlights: ['Digital Marketing', 'Brand Management', 'Consumer Behavior', 'Market Research'],
        features: ['Marketing Strategy', 'Digital Campaigns', 'Brand Development', 'Customer Analytics'],
        icon: BookOpen
      },
      {
        name: 'PGDM in Human Resource',
        duration: '18 Months',
        location: 'Kolkata Campus',
        image: '/images/programs/hr.jpg',
        description: 'HR leadership development',
        highlights: ['Talent Management', 'Organizational Development', 'Employee Relations', 'HR Analytics'],
        features: ['Recruitment Strategy', 'Performance Management', 'Learning & Development', 'HR Technology'],
        icon: Users
      },
      {
        name: 'PGDM in Finance',
        duration: '18 Months',
        location: 'Kolkata Campus',
        image: '/images/programs/finance.jpg',
        description: 'Financial leadership skills',
        highlights: ['Financial Management', 'Investment Analysis', 'Corporate Finance', 'Risk Management'],
        features: ['Financial Planning', 'Investment Strategies', 'Corporate Valuation', 'Financial Modeling'],
        icon: TrendingUp
      },
      {
        name: 'PGDM in Logistics & Supply Chain',
        duration: '18 Months',
        location: 'Kolkata Campus',
        image: '/images/programs/supply-chain.jpg',
        description: 'Supply chain excellence',
        highlights: ['Supply Chain Management', 'Logistics Operations', 'Inventory Management', 'Global Trade'],
        features: ['SCM Strategy', 'Warehouse Management', 'Transportation', 'International Logistics'],
        icon: Briefcase
      }
    ]
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
                    <div className={`w-8 h-8 sm:w-12 sm:h-12 ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} rounded-lg flex items-center justify-center shadow-lg`}>
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
                      {program.highlights.slice(0, 2).map((highlight, idx) => (
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
                      {program.features.slice(0, 1).map((feature, idx) => (
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
                  <Button className={`w-full ${IMAS_TAILWIND_CLASSES.GRADIENT_PRIMARY} hover:from-[#2e7bb3] hover:to-[#26c1d3] text-white py-3 sm:py-2 text-sm font-semibold transition-all duration-300 active:scale-95`}>
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
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
