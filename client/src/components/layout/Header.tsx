import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Menu, X, Clock, ChevronLeft, ChevronRight, Home, GraduationCap, Users, FileText, Calendar, Image, Phone, BookOpen, HelpCircle, ChevronDown } from 'lucide-react';
import { Sidebar } from './Sidebar';
import { IMAS_TAILWIND_CLASSES, IMAS_DATES } from '../../lib/constants';
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
  const [activeTab, setActiveTab] = useState('Overview');
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isAdmissionsMegaMenuOpen, setIsAdmissionsMegaMenuOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const admissionsButtonRef = useRef<HTMLButtonElement>(null);

  const menuItems = ['Overview', 'Instructors & Mentors', 'About the program', 'About IMAS', 'Student Testimonials', 'Campus Life'];

  // Intersection Observer to detect active section
  useEffect(() => {
    const sectionIds = ['overview', 'instructors-mentors', 'about-the-program', 'about-imas', 'student-testimonials', 'campus-life'];
    const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);
    
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const sectionId = entry.target.id;
            const tabName = getTabNameFromSectionId(sectionId);
            if (tabName && tabName !== activeTab) {
              setActiveTab(tabName);
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
  }, [activeTab]);

  const getTabNameFromSectionId = (sectionId: string): string => {
    switch (sectionId) {
      case 'overview':
        return 'Overview';
      case 'instructors-mentors':
        return 'Instructors & Mentors';
      case 'about-the-program':
        return 'About the program';
      case 'about-imas':
        return 'About IMAS';
      case 'student-testimonials':
        return 'Student Testimonials';
      case 'campus-life':
        return 'Campus Life';
      default:
        return '';
    }
  };

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
                to="/placements"
                className={`${IMAS_TAILWIND_CLASSES.HOVER_TEXT_TEAL} transition-colors flex items-center gap-2 ${
                  currentPage === 'placements' ? IMAS_TAILWIND_CLASSES.TEXT_TEAL : ''
                }`}
              >
                <BookOpen className="h-4 w-4" />
                Placements
              </Link>
              <Link
                to="/gallery"
                className={`${IMAS_TAILWIND_CLASSES.HOVER_TEXT_TEAL} transition-colors flex items-center gap-2 ${
                  currentPage === 'gallery' ? IMAS_TAILWIND_CLASSES.TEXT_TEAL : ''
                }`}
              >
                <Image className="h-4 w-4" />
                Gallery
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
              <Button className={`${IMAS_TAILWIND_CLASSES.GRADIENT_PRIMARY} hover:from-[#2e7bb3] hover:to-[#26c1d3] text-white`}>
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
              {menuItems.map((tab) => {
                const getIcon = (tabName: string) => {
                  switch (tabName) {
                    case 'Overview':
                      return <Home className="h-3 w-3" />;
                    case 'Instructors & Mentors':
                      return <Users className="h-3 w-3" />;
                    case 'About the program':
                      return <GraduationCap className="h-3 w-3" />;
                    case 'About IMAS':
                      return <BookOpen className="h-3 w-3" />;
                    case 'Student Testimonials':
                      return <Users className="h-3 w-3" />;
                    case 'Campus Life':
                      return <Image className="h-3 w-3" />;
                    case 'Curriculum':
                      return <BookOpen className="h-3 w-3" />;
                    case 'Admission Process':
                      return <FileText className="h-3 w-3" />;
                    case 'Events':
                      return <Calendar className="h-3 w-3" />;
                    case 'FAQs':
                      return <HelpCircle className="h-3 w-3" />;
                    default:
                      return null;
                  }
                };

                const scrollToSection = (sectionId: string) => {
                  const element = document.getElementById(sectionId);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    setActiveTab(tab);
                  }
                };

                const getSectionId = (tabName: string) => {
                  switch (tabName) {
                    case 'Overview':
                      return 'overview';
                    case 'Instructors & Mentors':
                      return 'instructors-mentors';
                    case 'About the program':
                      return 'about-the-program';
                    case 'About IMAS':
                      return 'about-imas';
                    case 'Student Testimonials':
                      return 'student-testimonials';
                    case 'Campus Life':
                      return 'campus-life';
                    default:
                      return '';
                  }
                };

                const handleClick = () => {
                  const sectionId = getSectionId(tab);
                  if (sectionId) {
                    scrollToSection(sectionId);
                  } else {
                    setActiveTab(tab);
                  }
                };

                return (
                  <button
                    key={tab}
                    onClick={handleClick}
                    className={`flex-shrink-0 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-300 whitespace-nowrap flex items-center gap-2 ${activeTab === tab
                        ? `${IMAS_TAILWIND_CLASSES.BG_TEAL} ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} shadow-md`
                        : `text-gray-300 ${IMAS_TAILWIND_CLASSES.HOVER_TEXT_TEAL} hover:bg-gray-800`
                      }`}
                  >
                    {getIcon(tab)}
                    {tab}
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
