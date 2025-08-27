import React, { useState } from 'react';
import { X, Phone, Check } from 'lucide-react';
import { IoLogoWhatsapp } from "react-icons/io";
import { IMAS_TAILWIND_CLASSES } from '../../lib/constants';

interface AdvisorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AdvisorModal({ isOpen, onClose }: AdvisorModalProps) {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    graduationYear: '',
    examTaken: '',
    employer: '',
    countryCode: '+91',
    mobile: '',
    whatsappEnabled: true,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[100vh] ">
        {/* Header Section */}
        <div className={`relative ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} text-white rounded-t-2xl p-3 sm:p-4 lg:p-5 bg-gradient-to-r from-blue-900 to-blue-800`}>
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-blue-800/50 rounded-t-2xl"></div>
          <div className="absolute inset-0 bg-[url('/uploads/call_advisor.png')] bg-cover bg-center opacity-10 rounded-t-2xl"></div>
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 sm:top-3 sm:right-3 lg:top-3 lg:right-3 w-6 h-6 sm:w-7 sm:h-7 lg:w-7 lg:h-7 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors z-10"
          >
            <X className="w-3 h-3 sm:w-4 sm:h-4 lg:w-4 lg:h-4" />
          </button>

          {/* Logo and Branding */}
          <div className="flex items-center mb-2 sm:mb-3 lg:mb-3 relative z-10">
            <img 
              src="/uploads/logos/IMAS_WHITE.png" 
              alt="IMAS Icon" 
              className="w-15 h-8 sm:w-15 sm:h-15 lg:w-15 lg:h-15 mr-2 sm:mr-3"
            />
          </div>

          {/* Main Heading */}
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 lg:mb-3 relative z-10">Talk to our Admissions Team</h2>

          {/* Key Points */}
          <div className="space-y-1 sm:space-y-1.5 lg:space-y-2 relative z-10">
            <div className="flex items-center">
              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 lg:w-2 lg:h-2 bg-yellow-400 rounded-full mr-1.5 sm:mr-2 lg:mr-2"></div>
              <span className="text-xs sm:text-sm lg:text-sm">Am I the right fit for IMAS?</span>
            </div>
            <div className="flex items-center">
              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 lg:w-2 lg:h-2 bg-yellow-400 rounded-full mr-1.5 sm:mr-2 lg:mr-2"></div>
              <span className="text-xs sm:text-sm lg:text-sm">How does my career path look like?</span>
            </div>
            <div className="flex items-center">
              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 lg:w-2 lg:h-2 bg-yellow-400 rounded-full mr-1.5 sm:mr-2 lg:mr-2"></div>
              <span className="text-xs sm:text-sm lg:text-sm">Understand the curriculum, admissions process, and more.</span>
            </div>
          </div>

          {/* Advisor Image */}
          <div className="absolute top-2 right-12 sm:top-3 sm:right-16 lg:top-3 lg:right-16 w-10 h-10 sm:w-12 sm:h-12 lg:w-12 lg:h-12 bg-white/20 rounded-full flex items-center justify-center z-10">
            <img 
              src="/uploads/call_advisor.png" 
              alt="Call Advisor" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Form Section */}
        <div className="p-3 sm:p-4 lg:p-5">
          <h3 className={`text-base sm:text-lg lg:text-xl font-bold ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} mb-1 sm:mb-2 lg:mb-2`}>
            Talk to our Admissions Team
          </h3>
          <p className="text-gray-600 mb-3 sm:mb-4 lg:mb-4 text-xs sm:text-sm lg:text-sm">Have any queries? Our team will reach out to you!</p>

          <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3 lg:space-y-3">
            <div>
              <label className="block text-xs sm:text-sm lg:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5 lg:mb-1.5">
                Fill out your details!
              </label>
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Enter Email Address"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-3 py-2 sm:px-3 sm:py-2.5 lg:px-3 lg:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base lg:text-sm"
                required
              />
            </div>

            {/* Name */}
            <div>
              <input
                type="text"
                placeholder="Enter your Name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full px-3 py-2 sm:px-3 sm:py-2.5 lg:px-3 lg:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base lg:text-sm"
                required
              />
            </div>

            {/* Graduation Year */}
            <div>
              <select
                value={formData.graduationYear}
                onChange={(e) => handleInputChange('graduationYear', e.target.value)}
                className="w-full px-3 py-2 sm:px-3 sm:py-2.5 lg:px-3 lg:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base lg:text-sm"
                required
              >
                <option value="">Select your graduation year</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
              </select>
            </div>

            {/* Exam Taken */}
            <div>
              <select
                value={formData.examTaken}
                onChange={(e) => handleInputChange('examTaken', e.target.value)}
                className="w-full px-3 py-2 sm:px-3 sm:py-2.5 lg:px-3 lg:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base lg:text-sm"
                required
              >
                <option value="">Have you taken GMAT/GRE/CAT?</option>
                <option value="GMAT">GMAT</option>
                <option value="GRE">GRE</option>
                <option value="CAT">CAT</option>
                <option value="None">None</option>
              </select>
            </div>

            {/* Employer */}
            <div>
              <input
                type="text"
                placeholder="Enter your most recent employer"
                value={formData.employer}
                onChange={(e) => handleInputChange('employer', e.target.value)}
                className="w-full px-3 py-2 sm:px-3 sm:py-2.5 lg:px-3 lg:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base lg:text-sm"
              />
            </div>

            {/* Mobile Number */}
            <div className="flex gap-2">
              <select
                value={formData.countryCode}
                onChange={(e) => handleInputChange('countryCode', e.target.value)}
                className="px-3 py-2 sm:px-3 sm:py-2.5 lg:px-3 lg:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base lg:text-sm"
              >
                <option value="+91">+91</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
              </select>
              <input
                type="tel"
                placeholder="Enter Mobile Number"
                value={formData.mobile}
                onChange={(e) => handleInputChange('mobile', e.target.value)}
                className="flex-1 px-3 py-2 sm:px-3 sm:py-2.5 lg:px-3 lg:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base lg:text-sm"
                required
              />
            </div>

            {/* WhatsApp Option */}
            <div className="flex items-center justify-between p-2.5 sm:p-3 lg:p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 sm:gap-2.5 lg:gap-2">
              <IoLogoWhatsapp className="w-6 h-6 text-green-600 " />
                <span className="font-medium text-xs sm:text-sm lg:text-sm">Connect on WhatsApp</span>
              </div>
              <button
                type="button"
                onClick={() => handleInputChange('whatsappEnabled', !formData.whatsappEnabled)}
                className={`w-8 h-4 sm:w-10 sm:h-5 lg:w-10 lg:h-5 rounded-full transition-colors ${
                  formData.whatsappEnabled ? 'bg-green-500' : 'bg-gray-300'
                }`}
              >
                <div className={`w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3 lg:h-3 bg-white rounded-full transition-transform ${
                  formData.whatsappEnabled ? 'translate-x-4 sm:translate-x-5 lg:translate-x-5' : 'translate-x-1'
                }`}></div>
              </button>
            </div>

            {formData.whatsappEnabled && (
              <p className="text-xs sm:text-sm lg:text-xs text-gray-600">
                By confirming I wish to receive updates and confirmation via WhatsApp
              </p>
            )}

            
            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full py-2.5 sm:py-3 lg:py-3 ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} text-white rounded-lg font-bold text-sm sm:text-base lg:text-base hover:bg-opacity-90 transition-colors`}
            >
              Proceed
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
