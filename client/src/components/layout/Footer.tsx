import React from 'react';
import { Mail, Phone, MapPin, ExternalLink, Facebook, Instagram, Linkedin, Youtube, Globe, GraduationCap, Users, Award, BookOpen, HeadphonesIcon, HelpCircle, User, UserCheck, Calendar, Star, Sparkles, ArrowRight } from 'lucide-react';
import { IMAS_TAILWIND_CLASSES, IMAS_CONTACT, IMAS_SOCIAL } from '../../lib/constants';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white relative overflow-hidden">
      {/* Enhanced Background Pattern with Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-teal-400/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-cyan-400/30 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-blue-400/30 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/4 right-1/4 w-20 h-20 border border-purple-400/20 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>
      
      {/* Floating Sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles className="absolute top-16 left-1/4 w-4 h-4 text-teal-400/40 animate-pulse" style={{animationDelay: '3s'}} />
        <Star className="absolute bottom-32 right-1/3 w-3 h-3 text-cyan-400/40 animate-pulse" style={{animationDelay: '1.5s'}} />
        <Sparkles className="absolute top-1/3 right-16 w-3 h-3 text-blue-400/40 animate-pulse" style={{animationDelay: '2.5s'}} />
      </div>

      <div className="relative z-10 max-w-[1260px] mx-auto px-4 py-8 md:py-12">
        {/* Mobile-First Compact Layout */}
        <div className="space-y-8">
          {/* Company Info - Enhanced */}
          <div className="text-left group">
            <div className="flex justify-start items-center gap-3 mb-4">
              <img
                src="/uploads/logos/IMAS_WHITE.png"
                alt="IMAS International Management & Analytics School"
                className="h-10 md:h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              />
              <div className="hidden md:flex items-center gap-1 text-teal-400">
                <Star className="w-4 h-4 animate-pulse" />
                <Star className="w-3 h-3 animate-pulse" style={{animationDelay: '0.5s'}} />
                <Star className="w-4 h-4 animate-pulse" style={{animationDelay: '1s'}} />
              </div>
            </div>
            <div className="relative">
              <p className="text-sm md:text-base text-gray-300 max-w-md leading-relaxed mb-3">
                🎓 Premier business school in Kolkata, redefining management education with industry-focused programs.
              </p>
              <div className="flex items-center gap-2 text-xs text-teal-400 font-medium">
                <Award className="w-4 h-4" />
                <span>Excellence in Education Since 2020</span>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Quick Links with Enhanced Interactions */}
            <div className="space-y-4">
              <h4 className="font-bold text-lg flex items-center justify-start gap-2 text-white group">
                <BookOpen className="h-5 w-5 text-teal-400 group-hover:rotate-12 transition-transform duration-300" />
                Quick Links
                <ArrowRight className="h-4 w-4 text-teal-400/60 group-hover:translate-x-1 transition-transform duration-300" />
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
                <a href="/about" className={`flex items-center gap-2 text-gray-300 ${IMAS_TAILWIND_CLASSES.HOVER_TEXT_TEAL} transition-all duration-300 hover:translate-x-2 hover:bg-gray-800/30 rounded-lg p-2 text-sm group`}>
                  <Users className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" /> About Us
                </a>
                <a href="/programs" className={`flex items-center gap-2 text-gray-300 ${IMAS_TAILWIND_CLASSES.HOVER_TEXT_TEAL} transition-all duration-300 hover:translate-x-2 hover:bg-gray-800/30 rounded-lg p-2 text-sm group`}>
                  <GraduationCap className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" /> Programs
                </a>
                <a href="/faculty" className={`flex items-center gap-2 text-gray-300 ${IMAS_TAILWIND_CLASSES.HOVER_TEXT_TEAL} transition-all duration-300 hover:translate-x-2 hover:bg-gray-800/30 rounded-lg p-2 text-sm group`}>
                  <Award className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" /> Faculty
                </a>
                <a href="/events" className={`flex items-center gap-2 text-gray-300 ${IMAS_TAILWIND_CLASSES.HOVER_TEXT_TEAL} transition-all duration-300 hover:translate-x-2 hover:bg-gray-800/30 rounded-lg p-2 text-sm group`}>
                  <Calendar className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" /> Events
                </a>
              </div>
            </div>

            {/* Support with Enhanced Interactions */}
            <div className="space-y-4">
              <h4 className="font-bold text-lg flex items-center justify-start gap-2 text-white group">
                <HeadphonesIcon className="h-5 w-5 text-teal-400 group-hover:animate-bounce" />
                Support
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse ml-1"></div>
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
                <a href="#" className={`flex items-center gap-2 text-gray-300 ${IMAS_TAILWIND_CLASSES.HOVER_TEXT_TEAL} transition-all duration-300 hover:translate-x-2 hover:bg-gray-800/30 rounded-lg p-2 text-sm group`}>
                  <Phone className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" /> Contact Us
                </a>
                <a href="#" className={`flex items-center gap-2 text-gray-300 ${IMAS_TAILWIND_CLASSES.HOVER_TEXT_TEAL} transition-all duration-300 hover:translate-x-2 hover:bg-gray-800/30 rounded-lg p-2 text-sm group`}>
                  <HelpCircle className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" /> FAQ
                </a>
                <a href="#" className={`flex items-center gap-2 text-gray-300 ${IMAS_TAILWIND_CLASSES.HOVER_TEXT_TEAL} transition-all duration-300 hover:translate-x-2 hover:bg-gray-800/30 rounded-lg p-2 text-sm group`}>
                  <User className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" /> Student Portal
                </a>
                <a href="#" className={`flex items-center gap-2 text-gray-300 ${IMAS_TAILWIND_CLASSES.HOVER_TEXT_TEAL} transition-all duration-300 hover:translate-x-2 hover:bg-gray-800/30 rounded-lg p-2 text-sm group`}>
                  <UserCheck className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" /> Alumni
                </a>
              </div>
            </div>

            {/* Contact & Social - Enhanced */}
            <div className="space-y-4">
              <h4 className="font-bold text-lg flex items-center justify-start gap-2 text-white group">
                <Globe className="h-5 w-5 text-teal-400 group-hover:rotate-180 transition-transform duration-500" />
                Connect
                <div className="flex gap-1 ml-2">
                  <div className="w-1 h-1 bg-teal-400 rounded-full animate-pulse"></div>
                  <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>
              </h4>

              {/* Contact Info - Enhanced */}
              <div className="space-y-3">
                <div className="flex items-center justify-center md:justify-start gap-3 text-sm group hover:bg-gray-800/20 rounded-lg p-2 transition-all duration-300">
                  <div className="flex items-center gap-1 text-teal-400">
                    <Phone className="h-4 w-4 group-hover:animate-pulse" />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{IMAS_CONTACT.PHONE}</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3 text-sm group hover:bg-gray-800/20 rounded-lg p-2 transition-all duration-300">
                  <div className="flex items-center gap-1 text-teal-400">
                    <Mail className="h-4 w-4 group-hover:animate-pulse" />
                  </div>
                  <span className="text-gray-300 truncate group-hover:text-white transition-colors duration-300">{IMAS_CONTACT.EMAIL}</span>
                </div>
              </div>

              {/* Social Media - Super Enhanced */}
              <div className="pt-2">
                <p className="text-xs text-gray-400 mb-3 text-center md:text-left">Follow us for updates</p>
                <div className="flex justify-center md:justify-start gap-3">
                  <a href={IMAS_SOCIAL.FACEBOOK} className={`p-3 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 text-white hover:from-blue-500 hover:to-blue-600 transition-all duration-300 hover:scale-110 hover:rotate-12 shadow-lg hover:shadow-blue-500/25 group`}>
                    <Facebook className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                  <a href={IMAS_SOCIAL.INSTAGRAM} className={`p-3 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 text-white hover:from-pink-400 hover:to-purple-500 transition-all duration-300 hover:scale-110 hover:rotate-12 shadow-lg hover:shadow-pink-500/25 group`}>
                    <Instagram className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                  <a href={IMAS_SOCIAL.LINKEDIN} className={`p-3 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white hover:from-blue-400 hover:to-blue-500 transition-all duration-300 hover:scale-110 hover:rotate-12 shadow-lg hover:shadow-blue-500/25 group`}>
                    <Linkedin className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                  <a href={IMAS_SOCIAL.YOUTUBE} className={`p-3 rounded-full bg-gradient-to-br from-red-500 to-red-600 text-white hover:from-red-400 hover:to-red-500 transition-all duration-300 hover:scale-110 hover:rotate-12 shadow-lg hover:shadow-red-500/25 group`}>
                    <Youtube className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Enhanced */}
        <div className="border-t border-gradient-to-r from-transparent via-gray-700/50 to-transparent mt-8 pt-6 relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-400/30 to-transparent"></div>
          <div className="text-center space-y-3">
            <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-gray-400">
              <Star className="w-3 h-3 text-teal-400" />
              <span>© 2024 IMAS School of Business. All rights reserved.</span>
              <Star className="w-3 h-3 text-teal-400" />
            </div>
            <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
              <span>Crafted with</span>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span>by</span>
              </div>
              <a
                href="https://tagobuy.net/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${IMAS_TAILWIND_CLASSES.TEXT_TEAL} ${IMAS_TAILWIND_CLASSES.HOVER_TEXT_MEDIUM_BLUE} transition-all duration-300 font-medium hover:underline hover:scale-105 inline-flex items-center gap-1 group`}
              >
                Tagobuy IT Services
                <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </a>
            </div>
            <div className="flex justify-center items-center gap-1 pt-2">
              <div className="w-1 h-1 bg-teal-400 rounded-full animate-pulse"></div>
              <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
              <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
