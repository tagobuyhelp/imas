import React, { useState, useEffect } from 'react';
import { Plus, MessageCircle, Send, Phone } from 'lucide-react';
import { IMAS_TAILWIND_CLASSES } from '../../lib/constants';
import { applyNow } from '../../lib/utils';

interface StickyCTAFooterProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  onPrimaryClick?: () => void;
  onFloatingClick?: () => void;
  onWhatsAppClick?: () => void;
  onPhoneClick?: () => void;
  showFloatingButton?: boolean;
  showWhatsAppButton?: boolean;
  floatingButtonIcon?: React.ReactNode;
  heroSectionHeight?: number; // Height of hero section in pixels
}

export function StickyCTAFooter({
  title = "Admissions Open 2026",
  subtitle = "Join the next generation of leaders",
  primaryButtonText = "Enquire Now",
  onPrimaryClick = applyNow,
  onFloatingClick = applyNow,
  onWhatsAppClick,
  onPhoneClick,
  showFloatingButton = true,
  showWhatsAppButton = true,
  floatingButtonIcon = <Send className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />,
  heroSectionHeight = 600 // Default hero section height
}: StickyCTAFooterProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  const handleWhatsAppClick = () => {
    const whatsappNumber = '919088822777';
    const message = encodeURIComponent('Hi! I am interested in IMAS programs. Can you help me with more information?');
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    
    if (onWhatsAppClick) {
      onWhatsAppClick();
    }
  };

  const handlePhoneClick = () => {
    if (onPhoneClick) {
      onPhoneClick();
    } else {
      // Open phone dialer
      window.open('tel:+919088822777', '_self');
    }
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

      {/* Floating WhatsApp & Call Buttons */}
      {showWhatsAppButton && (
        <div className="fixed bottom-28 right-4 z-40 flex flex-col sm:flex-row gap-3">
          {/* WhatsApp Button */}
          <button
            onClick={handleWhatsAppClick}
            className="bg-white  border-green-600 text-green-700 w-10 h-10 rounded-full shadow-lg flex items-center justify-center"
          >
            <img src="/uploads/icons/whatsapp.png" alt="WhatsApp" className="w-6 h-6" />
          </button>

          {/* Call Button */}
          <button
            onClick={handlePhoneClick}
            className={`bg-green-500 text-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center`}
          >
            <Phone className="w-5 h-5" />
          </button>
        </div>
      )}




    </>
  );
}
