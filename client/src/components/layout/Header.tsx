import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { 
  Menu, X, Clock, ChevronDown, ChevronLeft, ChevronRight,
  Megaphone, Phone, Mail, MapPin, Search, User, ArrowRight,
  Home, BookOpen, Users, FileText, Briefcase, Camera, Calendar,
  GraduationCap, HelpCircle
} from 'lucide-react';
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
    days: 73,
    hours: 1,
    minutes: 2,
    seconds: 5
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
          { label: 'Courses', sectionId: 'programs-hero' },
          { label: 'Course Highlights', sectionId: 'program-highlights' },
          { label: 'Why Choose', sectionId: 'why-choose' },
          { label: 'Top Recruiters', sectionId: 'top-recruiters' },
          { label: 'Enquire Now', sectionId: 'cta' }
        ];
      case 'program-detail':
        return [
          { label: 'Overview', sectionId: 'hero' },
          { label: 'Course Highlights', sectionId: 'program-highlights' },
          { label: 'Curriculum', sectionId: 'curriculum' },
          { label: 'Careers', sectionId: 'careers' },
          { label: 'Eligibility', sectionId: 'eligibility' },
          { label: 'Placement', sectionId: 'placement' },
          { label: 'FAQ', sectionId: 'faq' },
          { label: 'Enquire Now', sectionId: 'cta' }
        ];
      case 'home':
        return [
          { label: 'About', sectionId: 'about-imas' },
          { label: 'Courses', sectionId: 'about-the-program' },
          { label: 'Placement Stats', sectionId: 'placement-stats' },
          { label: 'Placement Partners', sectionId: 'placement-partners' },
          { label: 'Testimonials', sectionId: 'student-testimonials' },
          { label: 'Campus Life', sectionId: 'campus-life' },
          { label: 'Mentors', sectionId: 'instructors-mentors' },
          { label: 'Industry Collaborations', sectionId: 'industry-collaborations' },
          { label: 'Why Choose', sectionId: 'why-choose' },
          { label: 'FAQ', sectionId: 'faq' },
          { label: 'Enquire Now', sectionId: 'final-cta' }
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
          { label: 'Enquire Now', sectionId: 'apply' }
        ];
      case 'internships':
        return [
          { label: 'Overview', sectionId: 'internships-hero' },
          { label: 'Why', sectionId: 'why-internships' },
          { label: 'Highlights', sectionId: 'internship-highlights' },
          { label: 'SIP', sectionId: 'sip' },
          { label: 'Process', sectionId: 'internship-process' },
          { label: 'Industries', sectionId: 'industries' },
          { label: 'Benefits', sectionId: 'benefits' },
          { label: 'Why IMAS', sectionId: 'why-imas' },
          { label: 'Support', sectionId: 'support' },
          { label: 'Success', sectionId: 'success-stories' },
          { label: 'FAQ', sectionId: 'faq' },
          { label: 'Apply', sectionId: 'final-cta' }
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
      case 'placements':
        return [
          { label: 'Overview', sectionId: 'placements-hero' },
          { label: 'Highlights', sectionId: 'placements-highlights' },
          { label: 'Recruiters', sectionId: 'placements-recruiters' },
          { label: 'Training', sectionId: 'placements-training' },
          { label: 'FAQ', sectionId: 'placements-faq' },
          { label: 'Success Stories', sectionId: 'placements-alumni' }
        ];
      default:
        return [
          { label: 'Overview', sectionId: 'overview' },
          { label: 'Programme Highlights', sectionId: 'program-highlights' },
          { label: 'Curriculum', sectionId: 'curriculum' },
          { label: 'Careers', sectionId: 'careers' },
          { label: 'Eligibility', sectionId: 'eligibility' },
          { label: 'Placement', sectionId: 'placement' }
        ];
    }
  };

  const menuItems = getMenuItemsForPage(currentPage);

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

  return (
    <>
      {/* Top Announcement Bar - Obsidian Navy Matching Mock */}
      <div className="bg-[#0c2440] text-white py-1.5 sm:py-2 text-xs border-b border-slate-800/80 overflow-hidden">
        <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Mobile View: Clean compact row fitting 320px-414px perfectly */}
          <div className="flex sm:hidden items-center justify-between w-full text-[11px]">
            <div className="flex items-center gap-1.5 font-medium text-white truncate">
              <Megaphone className="h-3 w-3 text-[#00bcd4] shrink-0" />
              <span>Admissions <span className="font-semibold text-white">2026–28</span></span>
            </div>
            <div className="flex items-center gap-1 shrink-0 font-mono text-[10px]">
              <span className="bg-[#193254] border border-[#274775] px-1 py-0.5 rounded text-white font-bold">{timeLeft.days}d</span>
              <span className="bg-[#193254] border border-[#274775] px-1 py-0.5 rounded text-white font-bold">{String(timeLeft.hours).padStart(2, '0')}h</span>
              <span className="bg-[#193254] border border-[#274775] px-1 py-0.5 rounded text-white font-bold">{String(timeLeft.minutes).padStart(2, '0')}m</span>
              <span className="bg-[#193254] border border-[#274775] px-1 py-0.5 rounded text-cyan-300 font-bold">{String(timeLeft.seconds).padStart(2, '0')}s</span>
            </div>
          </div>

          {/* Desktop/Tablet View */}
          <div className="hidden sm:flex items-center gap-2 sm:gap-3 flex-wrap">
            <div className="flex items-center gap-1.5 text-white font-medium">
              <Megaphone className="h-3.5 w-3.5 text-white shrink-0" />
              <span>Admissions Open <span className="text-white font-semibold">for 2026–28</span></span>
            </div>
            
            <span className="text-slate-500">|</span>
            
            <span className="hidden md:inline text-slate-300">
              Apply Before 30 November, 2026
            </span>

            {/* Countdown Badges */}
            <div className="flex items-center gap-1.5 ml-1 sm:ml-2">
              <div className="flex items-center">
                <span className="bg-[#193254] border border-[#274775] text-white font-bold px-1.5 py-0.5 rounded text-[11px] min-w-[24px] text-center">
                  {String(timeLeft.days).padStart(2, '0')}
                </span>
                <span className="text-slate-300 text-[11px] ml-1 mr-2">Days</span>
              </div>
              <div className="flex items-center">
                <span className="bg-[#193254] border border-[#274775] text-white font-bold px-1.5 py-0.5 rounded text-[11px] min-w-[24px] text-center">
                  {String(timeLeft.hours).padStart(2, '0')}
                </span>
                <span className="text-slate-300 text-[11px] ml-1 mr-2">Hrs</span>
              </div>
              <div className="flex items-center">
                <span className="bg-[#193254] border border-[#274775] text-white font-bold px-1.5 py-0.5 rounded text-[11px] min-w-[24px] text-center">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </span>
                <span className="text-slate-300 text-[11px] ml-1 mr-2">Mins</span>
              </div>
              <div className="flex items-center">
                <span className="bg-[#193254] border border-[#274775] text-white font-bold px-1.5 py-0.5 rounded text-[11px] min-w-[24px] text-center">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
                <span className="text-slate-300 text-[11px] ml-1">Secs</span>
              </div>
            </div>
          </div>

          {/* Right: Contact & Quick Info */}
          <div className="hidden lg:flex items-center gap-4 text-xs text-slate-300">
            <a href="tel:+913340685700" className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
              <Phone className="h-3.5 w-3.5 text-[#00bcd4] shrink-0" />
              <span>+91 33 4068 5700</span>
            </a>
            <span className="text-slate-600">|</span>
            <button 
              onClick={() => {
                try {
                  applyNow();
                } catch (e) {
                  window.dispatchEvent(new Event('imas:openEnquiryForm'));
                }
              }} 
              className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
            >
              <Mail className="h-3.5 w-3.5 text-slate-300 shrink-0" />
              <span>Enquiry Now</span>
            </button>
            <span className="text-slate-600">|</span>
            <Link to="/contact" className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
              <MapPin className="h-3.5 w-3.5 text-slate-300 shrink-0" />
              <span>New Town, Kolkata</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header - Clean White Matching Mock */}
      <header className="bg-white text-slate-800 sticky top-0 z-50 border-b border-slate-100 shadow-sm transition-all duration-200">
        <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20 gap-2 sm:gap-3">
            {/* Logo Group */}
            <Link 
              to="/"
              className="shrink-0 flex items-center gap-1 sm:gap-2.5 hover:opacity-90 transition-opacity"
            >
              <img
                src="/uploads/logos/IMAS_LOGO_PNG.png"
                alt="IMAS International Management & Analytics School"
                className="h-8 sm:h-11 xl:h-12 w-auto object-contain shrink-0 max-w-none"
              />
              <div className="h-6 sm:h-8 w-[1px] sm:w-[1.5px] bg-[#0c2340]/25 mx-0.5 sm:mx-1 shrink-0"></div>
              <div className="flex flex-col items-start leading-none shrink-0 pl-0.5">
                <span className="text-xs sm:text-base xl:text-lg font-bold text-[#0c2340] tracking-wider font-serif">AICTE</span>
                <span className="text-[6.5px] sm:text-[7.5px] xl:text-[8.5px] font-bold text-[#0c2340] tracking-[0.18em] sm:tracking-[0.2em] mt-0.5">APPROVED</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-sm font-semibold text-slate-700 shrink-0">
              <Link
                to="/"
                className={`relative py-1 transition-colors flex flex-col items-center ${
                  currentPage === 'home' || !currentPage ? 'text-[#0c2340]' : 'hover:text-[#00a8cc]'
                }`}
              >
                <span>Home</span>
                {(currentPage === 'home' || !currentPage) && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-[3px] bg-[#00bcd4] rounded-full" />
                )}
              </Link>
              
              <Link
                to="/about"
                className={`transition-colors hover:text-[#00a8cc] ${
                  currentPage === 'about' ? 'text-[#00a8cc]' : ''
                }`}
              >
                About
              </Link>

              {/* Programs Dropdown */}
              <div className="relative">
                <button
                  ref={admissionsButtonRef}
                  onMouseEnter={() => setIsAdmissionsMegaMenuOpen(true)}
                  onMouseLeave={() => {
                    setTimeout(() => {
                      if (!document.querySelector('.mega-menu:hover')) {
                        setIsAdmissionsMegaMenuOpen(false);
                      }
                    }, 100);
                  }}
                  onClick={() => setIsAdmissionsMegaMenuOpen(!isAdmissionsMegaMenuOpen)}
                  className={`transition-colors hover:text-[#00a8cc] flex items-center gap-1 ${
                    currentPage === 'programs' || currentPage === 'admissions' || isAdmissionsMegaMenuOpen ? 'text-[#00a8cc]' : ''
                  }`}
                >
                  <span>Courses</span>
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isAdmissionsMegaMenuOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {/* Academics Dropdown */}
              <Link
                to="/faculty"
                className={`transition-colors hover:text-[#00a8cc] flex items-center gap-1 ${
                  currentPage === 'faculty' ? 'text-[#00a8cc]' : ''
                }`}
              >
                <span>Academics</span>
                <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
              </Link>

              <Link
                to="/placements"
                className={`transition-colors hover:text-[#00a8cc] ${
                  currentPage === 'placements' ? 'text-[#00a8cc]' : ''
                }`}
              >
                Placements
              </Link>

              <Link
                to="/campus-life"
                className={`transition-colors hover:text-[#00a8cc] flex items-center gap-1 ${
                  currentPage === 'campus-life' ? 'text-[#00a8cc]' : ''
                }`}
              >
                <span>Campus Life</span>
                <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
              </Link>

              <Link
                to="/events"
                className={`transition-colors hover:text-[#00a8cc] flex items-center gap-1 ${
                  currentPage === 'events' ? 'text-[#00a8cc]' : ''
                }`}
              >
                <span>Resources</span>
                <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
              </Link>

              {/* Search Icon */}
              <button 
                onClick={() => window.dispatchEvent(new Event('imas:openSearch'))} 
                className="text-slate-700 hover:text-[#00a8cc] transition-colors p-1"
                aria-label="Search"
              >
                <Search className="h-4 w-4" />
              </button>
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <Button 
                variant="outline" 
                className="border border-[#3b82f6]/70 hover:border-[#2563eb] text-[#0c2340] bg-white hover:bg-blue-50/40 flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-xl shadow-xs transition-all"
                onClick={() => window.open('https://agorae.app/signin', '_blank')}
              >
                <User className="h-4 w-4 text-[#2563eb]" />
                Student Login
              </Button>
              <Button 
                className="bg-gradient-to-r from-[#00bcd4] via-[#00a8cc] to-[#1d4ed8] hover:from-[#00acc1] hover:to-[#1e40af] text-white text-sm font-semibold px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-sm hover:shadow-md transition-all duration-300"
                onClick={() => window.open('https://admission.imas.ac.in/', '_blank')}
              >
                <span>Apply Now</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Mobile Actions */}
            <div className="flex lg:hidden items-center gap-1.5 sm:gap-2 shrink-0">
              <Button 
                size="sm"
                className="bg-gradient-to-r from-[#00bcd4] to-[#1d4ed8] text-white text-xs px-2.5 sm:px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap shadow-xs"
                onClick={() => window.open('https://admission.imas.ac.in/', '_blank')}
              >
                Apply Now
              </Button>
              <button
                onClick={onMenuToggle}
                className="p-1.5 sm:p-2 hover:bg-slate-100 rounded-lg text-slate-700 transition-colors"
                aria-label="Menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Mobile Scrollable Menu - Crisp Clean White with subtle badges */}
          <div className="lg:hidden relative py-2 border-t border-slate-100 bg-white">
            {/* Scroll Left Arrow */}
            <button
              onClick={scrollLeft}
              className="absolute left-1 top-1/2 transform -translate-y-1/2 z-10 w-6 h-6 bg-white shadow-sm border border-slate-200 rounded-full flex items-center justify-center text-slate-600 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-3.5 w-3.5" />
            </button>

            {/* Scroll Right Arrow */}
            <button
              onClick={scrollRight}
              className="absolute right-1 top-1/2 transform -translate-y-1/2 z-10 w-6 h-6 bg-white shadow-sm border border-slate-200 rounded-full flex items-center justify-center text-slate-600 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-3.5 w-3.5" />
            </button>

            <div
              ref={scrollContainerRef}
              className="flex gap-1.5 overflow-x-auto scrollbar-hide px-8 py-0.5"
              onScroll={(e) => setScrollPosition(e.currentTarget.scrollLeft)}
            >
              {menuItems.map((menuItem) => {
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
                    className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 whitespace-nowrap ${
                      activeTab === menuItem.label
                        ? 'bg-gradient-to-r from-[#00bcd4] to-[#1d4ed8] text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 bg-slate-50 border border-slate-200/60'
                    }`}
                  >
                    {menuItem.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Admissions Mega Menu */}
        {isAdmissionsMegaMenuOpen && (
           <div 
             className="mega-menu absolute top-full left-0 right-0 z-[110]"
             onMouseEnter={() => setIsAdmissionsMegaMenuOpen(true)}
             onMouseLeave={() => setIsAdmissionsMegaMenuOpen(false)}
           >
            <AdmissionsMegaMenu 
              isOpen={isAdmissionsMegaMenuOpen}
              onClose={() => setIsAdmissionsMegaMenuOpen(false)}
            />
          </div>
        )}
      </header>
    </>
  );
}
