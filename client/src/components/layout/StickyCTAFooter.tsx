import React, { useState, useEffect } from 'react';
import { Plus, MessageCircle } from 'lucide-react';
import { IMAS_TAILWIND_CLASSES } from '../../lib/constants';
import { AdvisorModal } from './AdvisorModal';
import { applyNow } from '../../lib/utils';

interface StickyCTAFooterProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  onPrimaryClick?: () => void;
  onFloatingClick?: () => void;
  onAdvisorClick?: () => void;
  onPhoneClick?: () => void;
  showFloatingButton?: boolean;
  showAdvisorButton?: boolean;
  floatingButtonIcon?: React.ReactNode;
  heroSectionHeight?: number; // Height of hero section in pixels
}

export function StickyCTAFooter({
  title = "Admissions Open 2025",
  subtitle = "Join the next generation of leaders",
  primaryButtonText = "Apply Now",
  onPrimaryClick = applyNow,
  onFloatingClick = applyNow,
  onAdvisorClick,
  onPhoneClick,
  showFloatingButton = true,
  showAdvisorButton = true,
  floatingButtonIcon = <Plus className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />,
  heroSectionHeight = 600 // Default hero section height
}: StickyCTAFooterProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAdvisorModalOpen, setIsAdvisorModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide footer when hero section is visible (scrollY < heroSectionHeight)
      if (currentScrollY < heroSectionHeight) {
        setIsVisible(false);
        return;
      }
      
      // Show footer when scrolled up (current scroll < last scroll) and past hero section
      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, heroSectionHeight]);

  const handleAdvisorClick = () => {
    setIsAdvisorModalOpen(true);
    if (onAdvisorClick) {
      onAdvisorClick();
    }
  };

  const handlePhoneClick = () => {
    if (onPhoneClick) {
      onPhoneClick();
    } else {
      console.log('Phone clicked');
    }
  };

  const handleCloseModal = () => {
    setIsAdvisorModalOpen(false);
  };

  return (
    <>
      {/* Sticky CTA Footer */}
      <div 
        className={`fixed bottom-0 left-0 right-0 bg-white/90 border-t border-gray-200 shadow-2xl z-50 transition-all duration-300 ease-in-out ${
          isVisible ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          {/* Desktop CTA Strip */}
          <div className="hidden md:flex items-center justify-between py-3 px-4">
            <div className="flex items-center space-x-4">
              <span className="text-base font-bold text-gray-800">{title}</span>
              <span className="text-gray-600">|</span>
              <span className="text-gray-600 text-sm">{subtitle}</span>
            </div>
            <div className="flex space-x-3">
              <button 
                onClick={onPrimaryClick}
                className={`px-8 py-3 ${IMAS_TAILWIND_CLASSES.GRADIENT_PRIMARY} text-white rounded-lg hover:scale-105 transition-all duration-200 font-semibold text-base shadow-lg hover:shadow-xl`}
              >
                {primaryButtonText}
              </button>
            </div>
          </div>

          {/* Mobile CTA Button */}
          <div className="md:hidden py-4 px-4">
            <button 
              onClick={onPrimaryClick}
              className={`w-full py-4 ${IMAS_TAILWIND_CLASSES.GRADIENT_PRIMARY} text-white rounded-lg hover:scale-105 transition-all duration-200 font-semibold text-base shadow-lg hover:shadow-xl`}
            >
              {primaryButtonText}
            </button>
          </div>
        </div>
      </div>

      {/* Floating Apply Now Button (Mobile) */}
      {showFloatingButton && (
        <div className="md:hidden fixed bottom-20 right-4 z-40">
          <button 
            onClick={onFloatingClick || onPrimaryClick}
            className={`w-12 h-12 ${IMAS_TAILWIND_CLASSES.BG_TEAL} text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center group`}
          >
            {floatingButtonIcon}
          </button>
        </div>
      )}

      {/* Floating Advisor Button */}
      {showAdvisorButton && (
        <div className="fixed bottom-4 right-4 z-40">
          {/* Main Advisor Button */}
          <button
            onClick={handleAdvisorClick}
            className="bg-white border-2 border-green-600 text-green-600 px-4 py-2 rounded-full font-medium text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-green-50 flex items-center gap-2 animate-pulse hover:animate-none hover:scale-105 hover:border-green-700 hover:text-green-700"
          >
            <MessageCircle className="w-4 h-4 animate-bounce" />
            <span className="animate-pulse">Talk to our Advisor</span>
          </button>

          {/* Floating Phone Button */}
          <button
            onClick={handlePhoneClick}
            className={`absolute -bottom-2 -right-2 w-10 h-10 ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110 animate-pulse hover:animate-none`}
            style={{
              clipPath: 'polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)'
            }}
          >
            <svg
              className="w-5 h-5 animate-ping"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </button>
        </div>
      )}

      {/* Advisor Modal */}
      <AdvisorModal 
        isOpen={isAdvisorModalOpen} 
        onClose={handleCloseModal} 
      />


    </>
  );
}
