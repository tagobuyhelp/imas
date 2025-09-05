import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Home, GraduationCap, Users, FileText, Phone, BookOpen, Image } from 'lucide-react';
import { IMAS_TAILWIND_CLASSES } from '../../lib/constants';

interface MenuItem {
  label: string;
  sectionId?: string;
}

interface BottomNavBarProps {
  currentPage?: string;
  activeTab?: string;
  onTabChange?: (tab: string) => void;
  className?: string;
}

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

export function BottomNavBar({
  currentPage,
  activeTab,
  onTabChange,
  className = ''
}: BottomNavBarProps) {
  const menuItems = getMenuItemsForPage(currentPage);
  const [currentActiveTab, setCurrentActiveTab] = useState(activeTab || menuItems[0]?.label || '');
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = 200;
      container.scrollTo({
        left: container.scrollLeft - scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = 200;
      container.scrollTo({
        left: container.scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const getIcon = (label: string) => {
    // Map common labels to icons
    const iconMap: { [key: string]: React.ReactNode } = {
      'Home': <Home className="h-4 w-4" />,
      'Hero': <Home className="h-4 w-4" />,
      'Overview': <Home className="h-4 w-4" />,
      'Programs': <GraduationCap className="h-4 w-4" />,
      'Program Highlights': <GraduationCap className="h-4 w-4" />,
      'Curriculum': <BookOpen className="h-4 w-4" />,
      'Faculty': <Users className="h-4 w-4" />,
      'Academic Leaders': <Users className="h-4 w-4" />,
      'Industry Experts': <Users className="h-4 w-4" />,
      'Instructors & Mentors': <Users className="h-4 w-4" />,
      'Mentors': <Users className="h-4 w-4" />,
      'About': <BookOpen className="h-4 w-4" />,
      'About the program': <GraduationCap className="h-4 w-4" />,
      'About IMAS': <BookOpen className="h-4 w-4" />,
      'Campus Life': <Image className="h-4 w-4" />,
      'Careers': <Users className="h-4 w-4" />,
      'Eligibility': <FileText className="h-4 w-4" />,
      'Placement': <Users className="h-4 w-4" />,
      'Statistics': <Users className="h-4 w-4" />,
      'Recruiters': <Users className="h-4 w-4" />,
      'Success Stories': <Users className="h-4 w-4" />,
      'Admissions': <FileText className="h-4 w-4" />,
      'Process': <FileText className="h-4 w-4" />,
      'Apply': <FileText className="h-4 w-4" />,
      'Apply Now': <FileText className="h-4 w-4" />,
      'Contact': <Phone className="h-4 w-4" />,
      'Information': <Phone className="h-4 w-4" />,
      'Location': <Phone className="h-4 w-4" />,
      'Form': <Phone className="h-4 w-4" />,
      'Vision': <BookOpen className="h-4 w-4" />,
      'Why Choose': <BookOpen className="h-4 w-4" />
    };
    return iconMap[label] || <Home className="h-4 w-4" />;
  };

  const handleTabClick = (menuItem: MenuItem) => {
    setCurrentActiveTab(menuItem.label);
    if (onTabChange) {
      onTabChange(menuItem.label);
    }
    if (menuItem.sectionId) {
      scrollToSection(menuItem.sectionId);
    }
  };

  return (
    <div className={`hidden lg:block fixed bg-transparent bottom-3 left-0 right-0 z-50  ${IMAS_TAILWIND_CLASSES.BORDER_MEDIUM_BLUE} shadow-lg ${className}`}>
      <div className="flex justify-center bg-transparent">
        <div className="relative py-3 bg-primary-dark rounded-full flex justify-center items-center  shadow-lg max-w-[1250px] mx-auto" style={{ width: 'auto'}}>
          {/* Scroll Left Arrow */}
          <button
            onClick={scrollLeft}
            className={`absolute left-2 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-white text-teal-600 hover:bg-gray-100 transition-colors ${scrollPosition <= 0 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            disabled={scrollPosition <= 0}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {/* Scroll Right Arrow */}
          <button
            onClick={scrollRight}
            className={`absolute right-2 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-white text-teal-600 hover:bg-gray-100 transition-colors`}
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          {/* Scrollable Menu Items */}
          <div
            ref={scrollContainerRef}
            className="flex gap-3 overflow-x-auto scrollbar-hide px-12  w-[92%]"
            onScroll={(e) => setScrollPosition(e.currentTarget.scrollLeft)}
          >
            {menuItems.map((menuItem, index) => (
              <button
                key={index}
                onClick={() => handleTabClick(menuItem)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-200 ${currentActiveTab === menuItem.label
                    ? 'bg-white text-teal-600 shadow-md font-semibold'
                    : 'text-white hover:bg-teal-500 hover:text-white'
                  }`}
              >
                {getIcon(menuItem.label)}
                {menuItem.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomNavBar;