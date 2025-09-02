import React, { useState } from 'react';
import { X, Phone, Check, Loader2, AlertCircle } from 'lucide-react';
import { IoLogoWhatsapp } from "react-icons/io";
import { IMAS_TAILWIND_CLASSES } from '../../lib/constants';
import { apiService, AdvisorInquiryData } from '../../lib/api';
import { Alert, AlertDescription } from '../ui/alert';
import { useToast } from '../../hooks/use-toast';

interface AdvisorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AdvisorModal({ isOpen, onClose }: AdvisorModalProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: '',
    currentEducation: '',
    interestedPrograms: [] as string[],
    careerGoals: '',
    specificQuestions: '',
    preferredContactMethod: 'email',
    urgency: 'medium',
    countryCode: '+1',
    whatsappEnabled: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const advisorData: AdvisorInquiryData = {
        personalDetails: {
          name: formData.name,
          email: formData.email,
          phone: `${formData.countryCode}${formData.phone}`,
          currentEducation: formData.currentEducation,
        },
        inquiryDetails: {
          interestedPrograms: formData.interestedPrograms,
          careerGoals: formData.careerGoals,
          specificQuestions: formData.specificQuestions,
          preferredContactMethod: formData.whatsappEnabled ? 'whatsapp' : formData.preferredContactMethod,
          urgency: formData.urgency,
        },
      };

      const response = await apiService.advisor.submit(advisorData);

      if (response.success) {
        toast({
          title: "Inquiry Submitted Successfully!",
          description: "Our advisor will contact you within 24 hours.",
        });
        
        // Reset form
        setFormData({
          email: '',
          name: '',
          phone: '',
          currentEducation: '',
          interestedPrograms: [],
          careerGoals: '',
          specificQuestions: '',
          preferredContactMethod: 'email',
          urgency: 'medium',
          countryCode: '+1',
          whatsappEnabled: false,
        });
        
        onClose();
      } else {
        setErrorMessage(response.message || 'Failed to submit inquiry. Please try again.');
      }
    } catch (error: any) {
      console.error('Error submitting advisor inquiry:', error);
      setErrorMessage(error.message || 'An unexpected error occurred. Please try again.');
      toast({
        title: "Submission Failed",
        description: "Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[100vh] " onClick={(e) => e.stopPropagation()}>
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

            {/* Error Message */}
            {errorMessage && (
              <Alert className="border-red-200 bg-red-50">
                <AlertCircle className="h-4 w-4 text-red-600" />
                <AlertDescription className="text-red-700">
                  {errorMessage}
                </AlertDescription>
              </Alert>
            )}

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Enter Email Address"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-3 py-2 sm:px-3 sm:py-2.5 lg:px-3 lg:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base lg:text-sm"
                disabled={isSubmitting}
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
                disabled={isSubmitting}
                required
              />
            </div>

            {/* Current Education */}
            <div>
              <input
                type="text"
                placeholder="Current Education Level (e.g., Bachelor's in Engineering)"
                value={formData.currentEducation}
                onChange={(e) => handleInputChange('currentEducation', e.target.value)}
                className="w-full px-3 py-2 sm:px-3 sm:py-2.5 lg:px-3 lg:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base lg:text-sm"
                disabled={isSubmitting}
                required
              />
            </div>

            {/* Career Goals */}
            <div>
              <textarea
                placeholder="What are your career goals?"
                value={formData.careerGoals}
                onChange={(e) => handleInputChange('careerGoals', e.target.value)}
                className="w-full px-3 py-2 sm:px-3 sm:py-2.5 lg:px-3 lg:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base lg:text-sm"
                rows={3}
                disabled={isSubmitting}
                required
              />
            </div>

            {/* Specific Questions */}
            <div>
              <textarea
                placeholder="Any specific questions about our programs?"
                value={formData.specificQuestions}
                onChange={(e) => handleInputChange('specificQuestions', e.target.value)}
                className="w-full px-3 py-2 sm:px-3 sm:py-2.5 lg:px-3 lg:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base lg:text-sm"
                rows={2}
                disabled={isSubmitting}
              />
            </div>

            {/* Mobile Number */}
            <div className="flex gap-2">
              <select
                value={formData.countryCode}
                onChange={(e) => handleInputChange('countryCode', e.target.value)}
                className="px-3 py-2 sm:px-3 sm:py-2.5 lg:px-3 lg:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base lg:text-sm"
                disabled={isSubmitting}
              >
                <option value="+91">+91</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
              </select>
              <input
                type="tel"
                placeholder="Enter Mobile Number"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="flex-1 px-3 py-2 sm:px-3 sm:py-2.5 lg:px-3 lg:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base lg:text-sm"
                disabled={isSubmitting}
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
                disabled={isSubmitting}
                onClick={() => handleInputChange('whatsappEnabled', !formData.whatsappEnabled)}
                className={`w-8 h-4 sm:w-10 sm:h-5 lg:w-10 lg:h-5 rounded-full transition-colors disabled:opacity-50 ${
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
              disabled={isSubmitting}
              className={`w-full py-2.5 sm:py-3 lg:py-3 ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} text-white rounded-lg font-bold text-sm sm:text-base lg:text-base hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Processing...
                </>
              ) : (
                'Proceed'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
