import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Home, GraduationCap, Users, FileText, Award, Image, Phone, X, Trophy } from 'lucide-react';
import { IMAS_TAILWIND_CLASSES } from '../../lib/constants';
import MobileAdmissionsMenu from './MobileAdmissionsMenu';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  currentPage?: string;
}

export function Sidebar({ currentPage, isOpen, onClose }: SidebarProps) {
  const [isAdmissionsExpanded, setIsAdmissionsExpanded] = useState(false);

  const navigationItems = [
    { href: '/', label: 'Home', page: 'home', icon: Home },
    { href: '/programs', label: 'Programs', page: 'programs', icon: GraduationCap },
    { href: '/faculty', label: 'Faculty', page: 'faculty', icon: Users },
    { href: '/placements', label: 'Placements', page: 'placements', icon: Trophy },
    { href: '/gallery', label: 'Gallery', page: 'gallery', icon: Image },
    { href: '/contact', label: 'Contact', page: 'contact', icon: Phone },
  ];

  const handleNavClick = () => {
    onClose();
  };

  const handleCourseSelect = (course: string) => {
    console.log(`Selected course: ${course}`);
    // You can add navigation logic here
    onClose();
  };

  const handleAdmissionsToggle = () => {
    setIsAdmissionsExpanded(!isAdmissionsExpanded);
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        w-80 max-w-[85vw] lg:hidden
      `}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <img
                src="/uploads/logos/IMAS_LOGO_PNG.png"
                alt="IMAS International Management & Analytics School"
                className="h-11 w-auto"
              />
              
            </div>
            <Button variant="ghost" size="sm" onClick={onClose} className="text-gray-600 hover:text-gray-900">
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-6 overflow-y-auto">
            <ul className="space-y-2">
              {navigationItems.slice(0, 3).map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.page}>
                    <Link
                      to={item.href}
                      onClick={handleNavClick}
                      className={`
                        w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors
                        ${currentPage === item.page 
                          ? `${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} ${IMAS_TAILWIND_CLASSES.BG_TEAL}/10 border ${IMAS_TAILWIND_CLASSES.BORDER_TEAL}/20` 
                          : `text-gray-600 ${IMAS_TAILWIND_CLASSES.HOVER_TEXT_TEAL} ${IMAS_TAILWIND_CLASSES.HOVER_BG_TEAL}/5`
                        }
                      `}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
              
              {/* Mobile Admissions Menu */}
              <li>
                <MobileAdmissionsMenu
                  isExpanded={isAdmissionsExpanded}
                  onToggle={handleAdmissionsToggle}
                  onCourseSelect={handleCourseSelect}
                />
              </li>
              
              {navigationItems.slice(3).map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.page}>
                    <Link
                      to={item.href}
                      onClick={handleNavClick}
                      className={`
                        w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors
                        ${currentPage === item.page 
                          ? `${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} ${IMAS_TAILWIND_CLASSES.BG_TEAL}/10 border ${IMAS_TAILWIND_CLASSES.BORDER_TEAL}/20` 
                          : `text-gray-600 ${IMAS_TAILWIND_CLASSES.HOVER_TEXT_TEAL} ${IMAS_TAILWIND_CLASSES.HOVER_BG_TEAL}/5`
                        }
                      `}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-6 border-t border-gray-200 space-y-3">
            <Button 
              variant="outline"
              className={`w-full ${IMAS_TAILWIND_CLASSES.BORDER_TEAL} ${IMAS_TAILWIND_CLASSES.TEXT_TEAL} ${IMAS_TAILWIND_CLASSES.HOVER_BG_TEAL}/10`}
              onClick={handleNavClick}
            >
              Login
            </Button>
            <Link to="/admissions" onClick={handleNavClick}>
              <Button 
                className={`w-full ${IMAS_TAILWIND_CLASSES.GRADIENT_PRIMARY} hover:from-[#2e7bb3] hover:to-[#26c1d3] text-white`}
              >
                Apply Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
