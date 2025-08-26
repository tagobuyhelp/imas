import React from 'react';
import { Mail, Phone, MapPin, ExternalLink, Facebook, Instagram, Linkedin, Youtube, Globe } from 'lucide-react';
import { IMAS_TAILWIND_CLASSES, IMAS_CONTACT, IMAS_SOCIAL } from '../../lib/constants';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-[1260px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/uploads/logos/IMAS_WHITE.png"
                alt="IMAS International Management & Analytics School"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-sm text-gray-300">
              Premier business school in Kolkata, redefining management education with industry-focused programs.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className={`text-gray-300 ${IMAS_TAILWIND_CLASSES.HOVER_TEXT_TEAL} transition-colors`}>About Us</a></li>
              <li><a href="#" className={`text-gray-300 ${IMAS_TAILWIND_CLASSES.HOVER_TEXT_TEAL} transition-colors`}>Programs</a></li>
              <li><a href="#" className={`text-gray-300 ${IMAS_TAILWIND_CLASSES.HOVER_TEXT_TEAL} transition-colors`}>Faculty</a></li>
              <li><a href="#" className={`text-gray-300 ${IMAS_TAILWIND_CLASSES.HOVER_TEXT_TEAL} transition-colors`}>Admissions</a></li>
              <li><a href="#" className={`text-gray-300 ${IMAS_TAILWIND_CLASSES.HOVER_TEXT_TEAL} transition-colors`}>Placements</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className={`text-gray-300 ${IMAS_TAILWIND_CLASSES.HOVER_TEXT_TEAL} transition-colors`}>Contact Us</a></li>
              <li><a href="#" className={`text-gray-300 ${IMAS_TAILWIND_CLASSES.HOVER_TEXT_TEAL} transition-colors`}>FAQ</a></li>
              <li><a href="#" className={`text-gray-300 ${IMAS_TAILWIND_CLASSES.HOVER_TEXT_TEAL} transition-colors`}>Student Portal</a></li>
              <li><a href="#" className={`text-gray-300 ${IMAS_TAILWIND_CLASSES.HOVER_TEXT_TEAL} transition-colors`}>Alumni</a></li>
            </ul>
          </div>

          {/* Social Media & Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Connect With Us</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gray-300" />
                <span className="text-sm text-gray-300">{IMAS_CONTACT.PHONE}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gray-300" />
                <span className="text-sm text-gray-300">{IMAS_CONTACT.EMAIL}</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-gray-300" />
                <span className="text-sm text-gray-300">{IMAS_CONTACT.WEBSITE}</span>
              </div>
            </div>
            <div className="flex gap-3">
              <a href={IMAS_SOCIAL.FACEBOOK} className={`text-gray-300 ${IMAS_TAILWIND_CLASSES.HOVER_TEXT_TEAL} transition-colors`}>
                <Facebook className="h-5 w-5" />
              </a>
              <a href={IMAS_SOCIAL.INSTAGRAM} className={`text-gray-300 ${IMAS_TAILWIND_CLASSES.HOVER_TEXT_TEAL} transition-colors`}>
                <Instagram className="h-5 w-5" />
              </a>
              <a href={IMAS_SOCIAL.LINKEDIN} className={`text-gray-300 ${IMAS_TAILWIND_CLASSES.HOVER_TEXT_TEAL} transition-colors`}>
                <Linkedin className="h-5 w-5" />
              </a>
              <a href={IMAS_SOCIAL.YOUTUBE} className={`text-gray-300 ${IMAS_TAILWIND_CLASSES.HOVER_TEXT_TEAL} transition-colors`}>
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-300 mb-2">
            © 2024 IMAS School of Business. All rights reserved. | Empowering Future Business Leaders
          </p>
          <p className="text-sm text-gray-400">
            Developed By{' '}
            <a
              href="https://tagobuy.net/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${IMAS_TAILWIND_CLASSES.TEXT_TEAL} ${IMAS_TAILWIND_CLASSES.HOVER_TEXT_MEDIUM_BLUE} transition-colors font-medium`}
            >
              Tagobuy IT Services
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
