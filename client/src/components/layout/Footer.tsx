import React from 'react';
import { Mail, Phone, MapPin, ExternalLink, Facebook, Instagram, Linkedin, Youtube, Globe, GraduationCap, Users, Award, BookOpen, HeadphonesIcon, HelpCircle, User, UserCheck } from 'lucide-react';
import { IMAS_TAILWIND_CLASSES, IMAS_CONTACT, IMAS_SOCIAL } from '../../lib/constants';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-[1260px] mx-auto px-4 py-8 md:py-12">
        {/* Mobile-First Compact Layout */}
        <div className="space-y-8">
          {/* Company Info - Always First */}
          <div className="text-left">
            <div className="flex justify-start items-center gap-3 mb-4">
              <img
                src="/uploads/logos/IMAS_WHITE.png"
                alt="IMAS International Management & Analytics School"
                className="h-10 md:h-12 w-auto"
              />
            </div>
            <p className="text-sm md:text-base text-gray-300 max-w-md leading-relaxed">
              🎓 Premier business school in Kolkata, redefining management education with industry-focused programs.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Quick Links with Icons */}
            <div className="space-y-4">
              <h4 className="font-bold text-lg flex items-center justify-start gap-2 text-white">
                <BookOpen className="h-5 w-5 text-teal-400" />
                Quick Links
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
                <a href="#" className={`flex items-center gap-2 text-gray-300 ${IMAS_TAILWIND_CLASSES.HOVER_TEXT_TEAL} transition-all duration-200 hover:translate-x-1 text-sm`}>
                  <Users className="h-4 w-4" /> About Us
                </a>
                <a href="#" className={`flex items-center gap-2 text-gray-300 ${IMAS_TAILWIND_CLASSES.HOVER_TEXT_TEAL} transition-all duration-200 hover:translate-x-1 text-sm`}>
                  <GraduationCap className="h-4 w-4" /> Programs
                </a>
                <a href="#" className={`flex items-center gap-2 text-gray-300 ${IMAS_TAILWIND_CLASSES.HOVER_TEXT_TEAL} transition-all duration-200 hover:translate-x-1 text-sm`}>
                  <Award className="h-4 w-4" /> Faculty
                </a>
                <a href="#" className={`flex items-center gap-2 text-gray-300 ${IMAS_TAILWIND_CLASSES.HOVER_TEXT_TEAL} transition-all duration-200 hover:translate-x-1 text-sm`}>
                  <ExternalLink className="h-4 w-4" /> Admissions
                </a>
              </div>
            </div>

            {/* Support with Icons */}
            <div className="space-y-4">
              <h4 className="font-bold text-lg flex items-center justify-start gap-2 text-white">
                <HeadphonesIcon className="h-5 w-5 text-teal-400" />
                Support
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
                <a href="#" className={`flex items-center gap-2 text-gray-300 ${IMAS_TAILWIND_CLASSES.HOVER_TEXT_TEAL} transition-all duration-200 hover:translate-x-1 text-sm`}>
                  <Phone className="h-4 w-4" /> Contact Us
                </a>
                <a href="#" className={`flex items-center gap-2 text-gray-300 ${IMAS_TAILWIND_CLASSES.HOVER_TEXT_TEAL} transition-all duration-200 hover:translate-x-1 text-sm`}>
                  <HelpCircle className="h-4 w-4" /> FAQ
                </a>
                <a href="#" className={`flex items-center gap-2 text-gray-300 ${IMAS_TAILWIND_CLASSES.HOVER_TEXT_TEAL} transition-all duration-200 hover:translate-x-1 text-sm`}>
                  <User className="h-4 w-4" /> Student Portal
                </a>
                <a href="#" className={`flex items-center gap-2 text-gray-300 ${IMAS_TAILWIND_CLASSES.HOVER_TEXT_TEAL} transition-all duration-200 hover:translate-x-1 text-sm`}>
                  <UserCheck className="h-4 w-4" /> Alumni
                </a>
              </div>
            </div>

            {/* Contact & Social */}
            <div className="space-y-4">
              <h4 className="font-bold text-lg flex items-center justify-start gap-2 text-white">
                <Globe className="h-5 w-5 text-teal-400" />
                Connect
              </h4>

              {/* Contact Info - Compact */}
              <div className="space-y-2">
                <div className="flex items-center justify-center md:justify-start gap-2 text-sm">
                  <div className="flex items-center gap-1 text-teal-400">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span className="text-gray-300">{IMAS_CONTACT.PHONE}</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2 text-sm">
                  <div className="flex items-center gap-1 text-teal-400">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span className="text-gray-300 truncate">{IMAS_CONTACT.EMAIL}</span>
                </div>
              </div>

              {/* Social Media - Enhanced */}
              <div className="flex justify-center md:justify-start gap-3 pt-2">
                <a href={IMAS_SOCIAL.FACEBOOK} className={`p-2 rounded-full bg-gray-800 text-gray-300 ${IMAS_TAILWIND_CLASSES.HOVER_TEXT_TEAL} hover:bg-gray-700 transition-all duration-200 hover:scale-110`}>
                  <Facebook className="h-4 w-4" />
                </a>
                <a href={IMAS_SOCIAL.INSTAGRAM} className={`p-2 rounded-full bg-gray-800 text-gray-300 ${IMAS_TAILWIND_CLASSES.HOVER_TEXT_TEAL} hover:bg-gray-700 transition-all duration-200 hover:scale-110`}>
                  <Instagram className="h-4 w-4" />
                </a>
                <a href={IMAS_SOCIAL.LINKEDIN} className={`p-2 rounded-full bg-gray-800 text-gray-300 ${IMAS_TAILWIND_CLASSES.HOVER_TEXT_TEAL} hover:bg-gray-700 transition-all duration-200 hover:scale-110`}>
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href={IMAS_SOCIAL.YOUTUBE} className={`p-2 rounded-full bg-gray-800 text-gray-300 ${IMAS_TAILWIND_CLASSES.HOVER_TEXT_TEAL} hover:bg-gray-700 transition-all duration-200 hover:scale-110`}>
                  <Youtube className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Compact */}
        <div className="border-t border-gray-700/50 mt-8 pt-6">
          <div className="text-center space-y-2">
            <p className="text-xs md:text-sm text-gray-400">
              © 2024 IMAS School of Business. All rights reserved.
            </p>
            <p className="text-xs text-gray-500">
              Developed By{' '}
              <a
                href="https://tagobuy.net/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${IMAS_TAILWIND_CLASSES.TEXT_TEAL} ${IMAS_TAILWIND_CLASSES.HOVER_TEXT_MEDIUM_BLUE} transition-colors font-medium hover:underline`}
              >
                Tagobuy IT Services
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
