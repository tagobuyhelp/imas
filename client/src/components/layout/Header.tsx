import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Menu, X, Clock, ChevronLeft, ChevronRight, Home, GraduationCap, Users, FileText, Calendar, Image, Phone, BookOpen, HelpCircle, ChevronDown, Briefcase } from 'lucide-react';
import { Sidebar } from './Sidebar';
import { IMAS_TAILWIND_CLASSES, IMAS_DATES } from '../../lib/constants';
import { applyNow } from '../../lib/utils';
import AdmissionsMegaMenu from './AdmissionsMegaMenu';

interface HeaderProps {
  currentPage?: string;
  onMenuToggle: () => void;
}

export function Header({ currentPage, onMenuToggle }: HeaderProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [activeTab, setActiveTab] = useState('');
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isAdmissionsMegaMenuOpen, setIsAdmissionsMegaMenuOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const admissionsButtonRef = useRef<HTMLButtonElement>(null);

  // Dynamic menu configuration for different pages
  const getMenuItemsForPage = (page?: string) => {
    switch (page) {
      case 'programs':
        return [
          { label: 'Programs', sectionId: 'programs-hero' },
          { label: 'Program Highlights', sectionId: 'program-highlights' },
          { label: 'Why Choose', sectionId: 'why-choose' },
          { label: 'Top Recruiters', sectionId: 'top-recruiters' },
          { label: 'Apply Now', sectionId: 'cta' }
        ];
      case 'program-detail':
        return [
          { label: 'Overview', sectionId: 'hero' },
          { label: 'Program Highlights', sectionId: 'program-highlights' },
          { label: 'Curriculum', sectionId: 'curriculum' },
          { label: 'Careers', sectionId: 'careers' },
          { label: 'Eligibility', sectionId: 'eligibility' },
          { label: 'Placement', sectionId: 'placement' },
          { label: 'FAQ', sectionId: 'faq' },
          { label: 'Apply Now', sectionId: 'cta' }
        ];
      case 'home':
        return [
          { label: 'About', sectionId: 'about-imas' },
          { label: 'Programs', sectionId: 'about-the-program' },
          { label: 'Placement Stats', sectionId: 'placement-stats' },
          { label: 'Placement Partners', sectionId: 'placement-partners' },
          { label: 'Testimonials', sectionId: 'student-testimonials' },
          { label: 'Campus Life', sectionId: 'campus-life' },
          { label: 'Mentors', sectionId: 'instructors-mentors' },
          { label: 'Industry Collaborations', sectionId: 'industry-collaborations' },
          { label: 'Why Choose', sectionId: 'why-choose' },
          { label: 'FAQ', sectionId: 'faq' },
          { label: 'Apply Now', sectionId: 'final-cta' }
        ];
      case 'faculty':
        return [
          { label: 'Faculty', sectionId: 'faculty-hero' },
          { label: 'Faculty Grid', sectionId: 'faculty-grid' },
          { label: 'Why Learn from IMAS', sectionId: 'faculty-cta' }
        ];
      case 'about':
        return [
          { label: 'About', sectionId: 'about-hero' },
          { label: 'Mentors', sectionId: 'instructors-mentors' },
          { label: 'Industry Collaborations', sectionId: 'industry-collaborations' },
          { label: 'Why Choose', sectionId: 'why-choose' },
          { label: 'FAQ', sectionId: 'faq' }
        ];
      case 'admissions':
        return [
          { label: 'Overview', sectionId: 'admissions-hero' },
          { label: 'Application Process', sectionId: 'admission-process' },
          { label: 'Eligibility', sectionId: 'eligibility' },
          { label: 'Apply Now', sectionId: 'apply' }
        ];

      case 'internships':
        return [
          { label: 'Internships', sectionId: 'internships-hero' },
          { label: 'Outcomes', sectionId: 'outcomes' },
          { label: 'Companies', sectionId: 'companies' },
          { label: 'Roles', sectionId: 'roles' },
          { label: 'Apply Now', sectionId: 'cta' }
        ];

      case 'contact':
        return [
          { label: 'Contact', sectionId: 'contact-hero' },
          { label: 'Information', sectionId: 'contact-info' },
          { label: 'Location', sectionId: 'location' },
          { label: 'Form', sectionId: 'contact-form' }
        ];
      case 'campus-life':
        return [
          { label: 'Overview', sectionId: 'campus-overview' },
          { label: 'Student Experience', sectionId: 'student-experience' },
          { label: 'Facilities', sectionId: 'facilities' },
          { label: 'Community', sectionId: 'student-community' },
          { label: 'Clubs & Societies', sectionId: 'business-clubs' },
          { label: 'Industry Leaders', sectionId: 'industry-leaders' }
        ];
      default:
        // Default menu for program detail pages
        return [
          { label: 'Overview', sectionId: 'overview' },
          { label: 'Program Highlights', sectionId: 'program-highlights' },
          { label: 'Curriculum', sectionId: 'curriculum' },
          { label: 'Careers', sectionId: 'careers' },
          { label: 'Eligibility', sectionId: 'eligibility' },
          { label: 'Placement', sectionId: 'placement' }
        ];
    }
  };

  const menuItems = getMenuItemsForPage(currentPage);

  // Intersection Observer to detect active section
  useEffect(() => {
    const sectionIds = menuItems.map(item => item.sectionId);
    const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);
    
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const sectionId = entry.target.id;
            const menuItem = menuItems.find(item => item.sectionId === sectionId);
            if (menuItem && menuItem.label !== activeTab) {
              setActiveTab(menuItem.label);
            }
          }
        });
      },
      {
        threshold: [0.5],
        rootMargin: '-20% 0px -20% 0px'
      }
    );

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, [activeTab, menuItems]);

  // Initialize activeTab with first menu item when page changes
  useEffect(() => {
    if (menuItems.length > 0) {
      setActiveTab(menuItems[0].label);
    }
  }, [currentPage, menuItems]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 200;
      setScrollPosition(scrollContainerRef.current.scrollLeft);
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 200;
      setScrollPosition(scrollContainerRef.current.scrollLeft);
    }
  };

  useEffect(() => {
    const targetDate = new Date(IMAS_DATES.APPLICATION_DEADLINE).getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Top Banner */}
      <div className={`${IMAS_TAILWIND_CLASSES.BG_TEAL} text-white py-3`}>
        <div className="max-w-[1260px] mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <span className="font-semibold">Final Intake Phase 7 Application Deadline</span>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span className="font-mono">
                  {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
                </span>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-4">
              <span>24th August 2025</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-gray-900 text-white sticky top-0 z-50">
        <div className="max-w-[1260px] mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link 
              to="/"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <img
                src="/uploads/logos/IMAS_WHITE.png"
                alt="IMAS International Management & Analytics School"
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link
                to="/"
                className={`${IMAS_TAILWIND_CLASSES.HOVER_TEXT_TEAL} transition-colors flex items-center gap-2 ${
                  currentPage === 'home' ? IMAS_TAILWIND_CLASSES.TEXT_TEAL : ''
                }`}
              >
                <Home className="h-4 w-4" />
                Home
              </Link>
              
              <Link
                to="/about"
                className={`${IMAS_TAILWIND_CLASSES.HOVER_TEXT_TEAL} transition-colors flex items-center gap-2 ${
                  currentPage === 'about' ? IMAS_TAILWIND_CLASSES.TEXT_TEAL : ''
                }`}
              >
                <BookOpen className="h-4 w-4" />
                About
              </Link>
              <Link
                to="/faculty"
                className={`${IMAS_TAILWIND_CLASSES.HOVER_TEXT_TEAL} transition-colors flex items-center gap-2 ${
                  currentPage === 'faculty' ? IMAS_TAILWIND_CLASSES.TEXT_TEAL : ''
                }`}
              >
                <Users className="h-4 w-4" />
                Faculty
              </Link>
              <div className="relative">
                <button
                  ref={admissionsButtonRef}
                  onMouseEnter={() => setIsAdmissionsMegaMenuOpen(true)}
                  onMouseLeave={() => {
                    // Add a small delay to prevent flickering
                    setTimeout(() => {
                      if (!document.querySelector('.mega-menu:hover')) {
                        setIsAdmissionsMegaMenuOpen(false);
                      }
                    }, 100);
                  }}
                  onClick={() => {
                    setIsAdmissionsMegaMenuOpen(!isAdmissionsMegaMenuOpen);
                  }}
                  className={`${IMAS_TAILWIND_CLASSES.HOVER_TEXT_TEAL} transition-colors flex items-center gap-2 ${currentPage === 'admissions' ? IMAS_TAILWIND_CLASSES.TEXT_TEAL : ''
                    } ${isAdmissionsMegaMenuOpen ? IMAS_TAILWIND_CLASSES.TEXT_TEAL : ''}`}
                >
                  <FileText className="h-4 w-4" />
                  Admissions
                  <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${isAdmissionsMegaMenuOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>

              <Link
                to="/internships"
                className={`${IMAS_TAILWIND_CLASSES.HOVER_TEXT_TEAL} transition-colors flex items-center gap-2 ${
                  currentPage === 'internships' ? IMAS_TAILWIND_CLASSES.TEXT_TEAL : ''
                }`}
              >
                <Briefcase className="h-4 w-4" />
                Internships
              </Link>

              <Link
                to="/campus-life"
                className={`${IMAS_TAILWIND_CLASSES.HOVER_TEXT_TEAL} transition-colors flex items-center gap-2 ${
                  currentPage === 'campus-life' ? IMAS_TAILWIND_CLASSES.TEXT_TEAL : ''
                }`}
              >
                <Users className="h-4 w-4" />
                Campus Life
              </Link>


              <Link
                to="/contact"
                className={`${IMAS_TAILWIND_CLASSES.HOVER_TEXT_TEAL} transition-colors flex items-center gap-2 ${
                  currentPage === 'contact' ? IMAS_TAILWIND_CLASSES.TEXT_TEAL : ''
                }`}
              >
                <Phone className="h-4 w-4" />
                Contact
              </Link>
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <Button variant="ghost" className={`text-white ${IMAS_TAILWIND_CLASSES.HOVER_TEXT_TEAL} hover:bg-gray-800`}>
                Login
              </Button>
              <Button 
                className={`${IMAS_TAILWIND_CLASSES.GRADIENT_PRIMARY} hover:from-[#2e7bb3] hover:to-[#26c1d3] text-white`}
                onClick={applyNow}
              >
                Apply Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={onMenuToggle}
              className={`lg:hidden p-2 ${IMAS_TAILWIND_CLASSES.HOVER_BG_MEDIUM_BLUE} rounded-lg transition-colors`}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Scrollable Menu */}
          <div className="lg:hidden relative py-3 border-t border-gray-700">
            {/* Scroll Left Arrow */}
            <button
              onClick={scrollLeft}
              className={`absolute left-2 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} border ${IMAS_TAILWIND_CLASSES.BORDER_MEDIUM_BLUE} rounded-full flex items-center justify-center ${IMAS_TAILWIND_CLASSES.HOVER_BG_MEDIUM_BLUE} transition-colors`}
            >
              <ChevronLeft className="h-4 w-4 text-white" />
            </button>

            {/* Scroll Right Arrow */}
            <button
              onClick={scrollRight}
              className={`absolute right-2 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} border ${IMAS_TAILWIND_CLASSES.BORDER_MEDIUM_BLUE} rounded-full flex items-center justify-center ${IMAS_TAILWIND_CLASSES.HOVER_BG_MEDIUM_BLUE} transition-colors`}
            >
              <ChevronRight className="h-4 w-4 text-white" />
            </button>

            <div
              ref={scrollContainerRef}
              className="flex gap-3 overflow-x-auto scrollbar-hide px-12"
              onScroll={(e) => setScrollPosition(e.currentTarget.scrollLeft)}
            >
              {menuItems.map((menuItem) => {
                const getIcon = (label: string) => {
                  // Map common labels to icons
                  const iconMap: { [key: string]: React.ReactNode } = {
                    'Home': <Home className="h-3 w-3" />,
                    'Hero': <Home className="h-3 w-3" />,
                    'Overview': <Home className="h-3 w-3" />,
                    'Programs': <GraduationCap className="h-3 w-3" />,
                    'Program Highlights': <GraduationCap className="h-3 w-3" />,
                    'Curriculum': <BookOpen className="h-3 w-3" />,
                    'Faculty': <Users className="h-3 w-3" />,
                    'Academic Leaders': <Users className="h-3 w-3" />,
                    'Industry Experts': <Users className="h-3 w-3" />,
                    'Instructors & Mentors': <Users className="h-3 w-3" />,
                    'Mentors': <Users className="h-3 w-3" />,
                    'About': <BookOpen className="h-3 w-3" />,
                    'About the program': <GraduationCap className="h-3 w-3" />,
                    'About IMAS': <BookOpen className="h-3 w-3" />,
                    'Campus Life': <Image className="h-3 w-3" />,

                    'Careers': <Users className="h-3 w-3" />,
                    'Eligibility': <FileText className="h-3 w-3" />,
                    'Placement': <Users className="h-3 w-3" />,
                    'Statistics': <Users className="h-3 w-3" />,
                    'Recruiters': <Users className="h-3 w-3" />,
                    'Success Stories': <Users className="h-3 w-3" />,
                    'Admissions': <FileText className="h-3 w-3" />,
                    'Process': <FileText className="h-3 w-3" />,
                    'Apply': <FileText className="h-3 w-3" />,
                    'Apply Now': <FileText className="h-3 w-3" />,

                    'Contact': <Phone className="h-3 w-3" />,
                    'Information': <Phone className="h-3 w-3" />,
                    'Location': <Phone className="h-3 w-3" />,
                    'Form': <Phone className="h-3 w-3" />,
                    'Vision': <BookOpen className="h-3 w-3" />,
                    'Why Choose': <BookOpen className="h-3 w-3" />
                  };
                  return iconMap[label] || <Home className="h-3 w-3" />;
                };

                const scrollToSection = (sectionId: string) => {
                  const element = document.getElementById(sectionId);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    setActiveTab(menuItem.label);
                  }
                };

                const handleClick = () => {
                  if (menuItem.sectionId) {
                    scrollToSection(menuItem.sectionId);
                  } else {
                    setActiveTab(menuItem.label);
                  }
                };

                return (
                  <button
                    key={menuItem.label}
                    onClick={handleClick}
                    className={`flex-shrink-0 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-300 whitespace-nowrap flex items-center gap-2 ${activeTab === menuItem.label
                        ? `${IMAS_TAILWIND_CLASSES.BG_TEAL} ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} shadow-md`
                        : `text-gray-300 ${IMAS_TAILWIND_CLASSES.HOVER_TEXT_TEAL} hover:bg-gray-800`
                      }`}
                  >
                    {getIcon(menuItem.label)}
                    {menuItem.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Admissions Mega Menu */}
        <div 
          className="mega-menu relative"
          onMouseEnter={() => setIsAdmissionsMegaMenuOpen(true)}
          onMouseLeave={() => setIsAdmissionsMegaMenuOpen(false)}
        >
          <AdmissionsMegaMenu 
            isOpen={isAdmissionsMegaMenuOpen}
            onClose={() => setIsAdmissionsMegaMenuOpen(false)}
          />
        </div>
      </header>
    </>
  );
}
