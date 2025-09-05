import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Alert, AlertDescription } from '../components/ui/alert';
import {
  GraduationCap, Phone, Mail, User, AtSign, MessageSquare, Send, ArrowRight,
  Award, Users, TrendingUp, Globe, CheckCircle, Star, BookOpen, Target,
  Calendar, Clock, Building2, Download, Loader2, AlertCircle, MapPin, Briefcase
} from 'lucide-react';
import { IMAS_TAILWIND_CLASSES, IMAS_BRAND, IMAS_CONTACT } from '../lib/constants';
import { programsData } from '../lib/programsData';
import { Helmet } from 'react-helmet-async';
import { applyNow, downloadBrochure } from '../lib/utils';
// Removed API dependency - using serverless form submission
import { useToast } from '../hooks/use-toast';

// Local interface definitions (previously from api.ts)
interface AdmissionFormData {
  // Personal Information
  name: string;
  email: string;
  phone: string;
  alternatePhone?: string;
  dateOfBirth: string;
  gender: 'male' | 'female' | 'other';
  
  // Address Information
  address: {
    street: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
  };
  
  // Program Information
  program: string;
  preferredBatch: '2025-2027' | '2026-2028';
  
  // Educational Background
  education: {
    graduation: {
      degree: string;
      university: string;
      percentage: number;
      yearOfPassing: number;
    };
    postGraduation?: {
      degree?: string;
      university?: string;
      percentage?: number;
      yearOfPassing?: number;
    };
  };
  
  // Work Experience
  workExperience: {
    totalExperience: number;
    currentCompany?: string;
    currentDesignation?: string;
    currentSalary?: number;
    industry?: string;
    workDetails?: string;
  };
  
  // Additional Information
  message?: string;
}

export function AdmissionsPage(): React.JSX.Element {
  const { toast } = useToast();
  const [formData, setFormData] = useState<AdmissionFormData>({
    name: '',
    email: '',
    phone: '',
    alternatePhone: '',
    dateOfBirth: '',
    gender: 'male',
    address: {
      street: '',
      city: '',
      state: '',
      pincode: '',
      country: 'India'
    },
    program: '',
    preferredBatch: '2025-2027',
    education: {
      graduation: {
        degree: '',
        university: '',
        percentage: 0,
        yearOfPassing: new Date().getFullYear()
      },
      postGraduation: {
        degree: '',
        university: '',
        percentage: 0,
        yearOfPassing: new Date().getFullYear()
      }
    },
    workExperience: {
      totalExperience: 0,
      currentCompany: '',
      currentDesignation: '',
      currentSalary: 0,
      industry: '',
      workDetails: ''
    },
    message: ''
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const keys = name.split('.');

    setFormData(prev => {
      const newData = { ...prev };
      let current: any = newData;

      // Navigate to the parent object
      for (let i = 0; i < keys.length - 1; i++) {
        if (!current[keys[i]]) {
          current[keys[i]] = {};
        }
        current[keys[i]] = { ...current[keys[i]] };
        current = current[keys[i]];
      }

      // Set the final value with proper type conversion
      const finalKey = keys[keys.length - 1];
      if (type === 'number') {
        current[finalKey] = parseFloat(value) || 0;
      } else {
        current[finalKey] = value;
      }

      return newData;
    });

    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};

    // Personal Information
    if (!formData.name.trim()) {
      errors['name'] = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      errors['name'] = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      errors['email'] = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors['email'] = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      errors['phone'] = 'Phone number is required';
    } else if (!/^[\d\s\+\-\(\)]{10,}$/.test(formData.phone.replace(/\s/g, ''))) {
      errors['phone'] = 'Please enter a valid phone number';
    }

    if (!formData.dateOfBirth) {
      errors['dateOfBirth'] = 'Date of birth is required';
    }

    if (!formData.gender) {
      errors['gender'] = 'Gender is required';
    }

    // Address Information
    if (!formData.address.street.trim()) {
      errors['address.street'] = 'Street address is required';
    }

    if (!formData.address.city.trim()) {
      errors['address.city'] = 'City is required';
    }

    if (!formData.address.state.trim()) {
      errors['address.state'] = 'State is required';
    }

    if (!formData.address.pincode.trim()) {
      errors['address.pincode'] = 'Pincode is required';
    } else if (!/^[1-9][0-9]{5}$/.test(formData.address.pincode)) {
      errors['address.pincode'] = 'Please enter a valid pincode';
    }

    // Program Information
    if (!formData.program) {
      errors['program'] = 'Please select a program';
    }

    if (!formData.preferredBatch) {
      errors['preferredBatch'] = 'Please select a preferred batch';
    }

    // Educational Background
    if (!formData.education.graduation.degree.trim()) {
      errors['education.graduation.degree'] = 'Graduation degree is required';
    }

    if (!formData.education.graduation.university.trim()) {
      errors['education.graduation.university'] = 'University name is required';
    }

    if (formData.education.graduation.percentage <= 0 || formData.education.graduation.percentage > 100) {
      errors['education.graduation.percentage'] = 'Please enter a valid percentage (1-100)';
    }

    if (formData.education.graduation.yearOfPassing < 1990 || formData.education.graduation.yearOfPassing > new Date().getFullYear()) {
      errors['education.graduation.yearOfPassing'] = 'Please enter a valid year of passing';
    }

    // Work Experience
    if (formData.workExperience.totalExperience < 0) {
      errors['workExperience.totalExperience'] = 'Total experience cannot be negative';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // Create FormData for FormSubmit.co
      const formData_submit = new FormData();
      
      // Add form fields
      formData_submit.append('name', formData.name);
      formData_submit.append('email', formData.email);
      formData_submit.append('phone', formData.phone);
      formData_submit.append('alternatePhone', formData.alternatePhone || '');
      formData_submit.append('dateOfBirth', formData.dateOfBirth);
      formData_submit.append('gender', formData.gender);
      formData_submit.append('program', formData.program);
      formData_submit.append('preferredBatch', formData.preferredBatch);
      
      // Address fields
      formData_submit.append('address_street', formData.address.street);
      formData_submit.append('address_city', formData.address.city);
      formData_submit.append('address_state', formData.address.state);
      formData_submit.append('address_pincode', formData.address.pincode);
      formData_submit.append('address_country', formData.address.country);
      
      // Education fields
      formData_submit.append('graduation_degree', formData.education.graduation.degree);
      formData_submit.append('graduation_university', formData.education.graduation.university);
      formData_submit.append('graduation_percentage', formData.education.graduation.percentage.toString());
      formData_submit.append('graduation_year', formData.education.graduation.yearOfPassing.toString());
      
      if (formData.education.postGraduation?.degree) {
        formData_submit.append('postgraduation_degree', formData.education.postGraduation.degree);
        formData_submit.append('postgraduation_university', formData.education.postGraduation.university || '');
        formData_submit.append('postgraduation_percentage', (formData.education.postGraduation.percentage || 0).toString());
        formData_submit.append('postgraduation_year', (formData.education.postGraduation.yearOfPassing || 0).toString());
      }
      
      // Work experience fields
      formData_submit.append('total_experience', formData.workExperience.totalExperience.toString());
      formData_submit.append('current_company', formData.workExperience.currentCompany || '');
      formData_submit.append('current_designation', formData.workExperience.currentDesignation || '');
      formData_submit.append('current_salary', (formData.workExperience.currentSalary || 0).toString());
      formData_submit.append('industry', formData.workExperience.industry || '');
      formData_submit.append('work_details', formData.workExperience.workDetails || '');
      
      formData_submit.append('message', formData.message || '');
      
      // FormSubmit.co configuration
      formData_submit.append('_replyto', formData.email);
      formData_submit.append('_subject', `Admission Application: ${formData.name} - ${formData.program}`);
      formData_submit.append('_captcha', 'false');
      formData_submit.append('_template', 'table');
      
      // Submit to FormSubmit.co
      const response = await fetch('https://formsubmit.co/admissions@imas.ac.in', {
        method: 'POST',
        body: formData_submit
      });
      
      if (response.ok) {
        setSubmitSuccess(true);

        // Show success toast
        toast({
          title: "Application Submitted Successfully!",
          description: "We'll contact you within 24 hours with next steps.",
        });
      } else {
        throw new Error('Form submission failed');
      }

      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        alternatePhone: '',
        dateOfBirth: '',
        gender: 'male',
        address: {
          street: '',
          city: '',
          state: '',
          pincode: '',
          country: ''
        },
        program: '',
        preferredBatch: '2025-2027',
        education: {
          graduation: {
            degree: '',
            university: '',
            percentage: 0,
            yearOfPassing: 0
          },
          postGraduation: {
            degree: '',
            university: '',
            percentage: 0,
            yearOfPassing: 0
          }
        },
        workExperience: {
          totalExperience: 0
        },
        message: ''
      });

      // Hide success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error: any) {
      console.error('Submission error:', error);
      console.error('Error response:', error.response?.data);

      // Log detailed validation errors if available
      if (error.response?.data?.errors) {
        console.error('Validation errors:', error.response.data.errors);
      }

      const errorMsg = error.response?.data?.message || 'There was an error submitting your application. Please try again.';
      setErrorMessage(errorMsg);

      toast({
        title: "Submission Failed",
        description: errorMsg,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };



  return (
    <>
      <Helmet>
        <title>Admissions - Apply to IMAS Business School | PGDM Programs</title>
        <meta name="description" content="Apply to IMAS - India's leading business school. Join our PGDM programs with 97% placement rate and excellent career outcomes. Start your application today." />
        <meta name="keywords" content="IMAS admissions, PGDM application, business school admission, MBA application, management courses" />
        <meta property="og:title" content="Admissions - Apply to IMAS Business School" />
        <meta property="og:description" content="Transform your career with IMAS. Apply now for our industry-leading PGDM programs." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://imas.ac.in/admissions" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section id="admissions-hero" className="bg-gray-900 text-white min-h-[70vh] relative overflow-hidden" style={{ backgroundImage: "url('/uploads/imas_hero_image1.webp')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
          <div className="absolute inset-0 bg-black/80" aria-hidden="true"></div>
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className={`absolute top-20 left-10 w-20 h-20 ${IMAS_TAILWIND_CLASSES.BG_MEDIUM_BLUE}/10 rounded-full animate-pulse`}></div>
            <div className={`absolute top-40 right-20 w-16 h-16 ${IMAS_TAILWIND_CLASSES.BG_MEDIUM_BLUE}/10 rounded-full animate-bounce`} style={{ animationDelay: '1s' }}></div>
            <div className={`absolute bottom-20 left-1/4 w-12 h-12 ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE}/10 rounded-full animate-ping`} style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="max-w-[1260px] mx-auto px-4 py-6 sm:py-10 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-20 justify-items-center lg:justify-items-start items-center min-h-[50vh]">

              {/* Left Section - Content */}
              <div className="space-y-4 sm:space-y-6 lg:space-y-8 animate-fade-in-up w-full text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-white/30 animate-fade-in-up hover:bg-white/30 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer">
                  <GraduationCap className="h-4 w-4 animate-pulse" />
                  ADMISSIONS OPEN 2025
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  Transform Your Career with {IMAS_BRAND.NAME}
                </h1>

                <p className="text-base sm:text-lg lg:text-xl mb-6 opacity-95 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                  Join India's leading business school and unlock your potential with our industry-focused PGDM programs
                </p>

                {/* Key Highlights Carousel */}
                <div className="relative overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                  <div className="w-full overflow-hidden">
                    <div className="flex gap-4 sm:gap-6 animate-scroll-left whitespace-nowrap">
                      <span className={`border ${IMAS_TAILWIND_CLASSES.BORDER_MEDIUM_BLUE} ${IMAS_TAILWIND_CLASSES.TEXT_MEDIUM_BLUE} px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold flex-shrink-0 bg-white/10`}>
                        97% Placement Rate
                      </span>
                      <span className={`border ${IMAS_TAILWIND_CLASSES.BORDER_MEDIUM_BLUE} ${IMAS_TAILWIND_CLASSES.TEXT_MEDIUM_BLUE} px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold flex-shrink-0 bg-white/10`}>
                        ₹25L Average Package
                      </span>
                      <span className={`border ${IMAS_TAILWIND_CLASSES.BORDER_MEDIUM_BLUE} ${IMAS_TAILWIND_CLASSES.TEXT_MEDIUM_BLUE} px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold flex-shrink-0 bg-white/10`}>
                        AICTE Approved Programs
                      </span>
                      <span className={`border ${IMAS_TAILWIND_CLASSES.BORDER_MEDIUM_BLUE} ${IMAS_TAILWIND_CLASSES.TEXT_MEDIUM_BLUE} px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold flex-shrink-0 bg-white/10`}>
                        Industry Expert Faculty
                      </span>
                      <span className={`border ${IMAS_TAILWIND_CLASSES.BORDER_MEDIUM_BLUE} ${IMAS_TAILWIND_CLASSES.TEXT_MEDIUM_BLUE} px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold flex-shrink-0 bg-white/10`}>
                        Global Partnerships
                      </span>
                      {/* Duplicate items for seamless loop */}
                      <span className={`border ${IMAS_TAILWIND_CLASSES.BORDER_MEDIUM_BLUE} ${IMAS_TAILWIND_CLASSES.TEXT_MEDIUM_BLUE} px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold flex-shrink-0 bg-white/10`}>
                        97% Placement Rate
                      </span>
                      <span className={`border ${IMAS_TAILWIND_CLASSES.BORDER_MEDIUM_BLUE} ${IMAS_TAILWIND_CLASSES.TEXT_MEDIUM_BLUE} px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold flex-shrink-0 bg-white/10`}>
                        ₹25L Average Package
                      </span>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                  <Button
                    className="bg-white text-[#143674] hover:bg-gray-50 active:bg-gray-100 px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold rounded-lg hover:scale-105 active:scale-95 transition-all duration-200 hover:shadow-lg"
                    onClick={applyNow}
                  >
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white bg-transparent text-white hover:bg-white hover:text-gray-900 active:bg-gray-100 active:text-gray-900 px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold hover:scale-105 active:scale-95 transition-all duration-200 hover:shadow-lg rounded-lg"
                    onClick={downloadBrochure}
                  >
                    Download Brochure
                    <Download className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Right Section - Quick Stats Card */}
              <div className="bg-white text-gray-800 rounded-lg p-4 sm:p-6 shadow-sm w-full max-w-[400px] mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="space-y-4">
                  <div className="border-b border-gray-200 pb-3">
                    <p className="text-gray-500 text-xs">IMAS 2025</p>
                    <h2 className="text-lg font-bold text-gray-800 leading-tight mt-1">
                      Admissions Open for PGDM Programs
                    </h2>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer group">
                      <div className="text-xl font-bold text-[#143674] mb-1 group-hover:animate-pulse">97%</div>
                      <div className="text-xs text-gray-600 group-hover:text-[#143674] transition-colors duration-200">Placement Rate</div>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer group">
                      <div className="text-xl font-bold text-[#143674] mb-1 group-hover:animate-pulse">₹25L</div>
                      <div className="text-xs text-gray-600 group-hover:text-[#143674] transition-colors duration-200">Avg Package</div>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer group">
                      <div className="text-xl font-bold text-[#143674] mb-1 group-hover:animate-pulse">50+</div>
                      <div className="text-xs text-gray-600 group-hover:text-[#143674] transition-colors duration-200">Top Recruiters</div>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer group">
                      <div className="text-xl font-bold text-[#143674] mb-1 group-hover:animate-pulse">15+</div>
                      <div className="text-xs text-gray-600 group-hover:text-[#143674] transition-colors duration-200">Years Legacy</div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <p className="text-xs text-gray-700">
                      Application Deadline:
                      <span className="font-bold text-red-600 ml-1 animate-pulse">July 15, 2025</span>
                    </p>
                  </div>

                  <Button
                    className={`w-full ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} hover:bg-[#2e7bb3] active:bg-[#1a2d5a] text-white py-3 text-sm font-semibold rounded-lg hover:scale-105 active:scale-95 transition-all duration-200 hover:shadow-lg`}
                    onClick={applyNow}
                  >
                    Start Application
                  </Button>
                </div>
              </div>
            </div>
          </div>
          </section>

        {/* Main Content - Application Process */}
        <section id="admission-process" className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              {/* Form Section - First on mobile, Right on desktop */}
              <div className="order-1 lg:order-2" id="apply">
                {/* Success Message */}
                {submitSuccess && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl animate-fade-in-up">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-800">Application Submitted Successfully!</h4>
                        <p className="text-green-700 text-sm">We'll contact you within 24 hours with next steps.</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {errorMessage && (
                  <Alert className="mb-6 border-red-200 bg-red-50">
                    <AlertCircle className="h-4 w-4 text-red-600" />
                    <AlertDescription className="text-red-700">
                      {errorMessage}
                    </AlertDescription>
                  </Alert>
                )}

                <Card className="shadow-sm border overflow-hidden">
                  <CardHeader className="text-center pb-6 bg-white">
                    <div className="inline-flex items-center gap-2 bg-[#143674]/10 text-[#143674] px-4 py-2 rounded-full text-sm font-semibold mb-4 hover:bg-[#143674]/20 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer">
                      <BookOpen className="h-4 w-4 animate-pulse" />
                      START YOUR JOURNEY
                    </div>
                    <CardTitle className="text-2xl sm:text-3xl font-bold text-[#143674] mb-2">
                      Application Form
                    </CardTitle>
                    <p className="text-gray-600">
                      Take the first step towards your business education excellence
                    </p>
                  </CardHeader>
                  <CardContent className="p-6 sm:p-8 bg-gray-50/50">
                    <form onSubmit={handleSubmit} className="space-y-8">
                      {/* Personal Information Section */}
                      <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-[#143674] border-b border-gray-200 pb-2">
                          Personal Information
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Full Name *
                            </label>
                            <div className="relative">
                              <User className={`absolute left-3 top-3 h-5 w-5 transition-colors duration-200 ${formErrors['name'] ? 'text-red-400' : formData.name ? 'text-[#143674]' : 'text-gray-400'}`} />
                              <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all duration-200 bg-white ${formErrors['name']
                                    ? 'border-red-300 focus:ring-red-200 bg-red-50/50'
                                    : formData.name
                                      ? 'border-[#143674] focus:ring-[#143674]/20'
                                      : 'border-gray-300 focus:ring-[#143674]/20'
                                  }`}
                                placeholder="Enter your full name"
                                required
                              />
                              {formErrors['name'] && (
                                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                  <span className="w-1 h-1 bg-red-600 rounded-full"></span>
                                  {formErrors['name']}
                                </p>
                              )}
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Email Address *
                            </label>
                            <div className="relative">
                              <AtSign className={`absolute left-3 top-3 h-5 w-5 transition-colors duration-200 ${formErrors['email'] ? 'text-red-400' : formData.email ? 'text-[#143674]' : 'text-gray-400'}`} />
                              <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all duration-200 bg-white ${formErrors['email']
                                    ? 'border-red-300 focus:ring-red-200 bg-red-50/50'
                                    : formData.email
                                      ? 'border-[#143674] focus:ring-[#143674]/20'
                                      : 'border-gray-300 focus:ring-[#143674]/20'
                                  }`}
                                placeholder="Enter your email address"
                                required
                              />
                              {formErrors['email'] && (
                                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                  <span className="w-1 h-1 bg-red-600 rounded-full"></span>
                                  {formErrors['email']}
                                </p>
                              )}
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Phone Number *
                            </label>
                            <div className="relative">
                              <Phone className={`absolute left-3 top-3 h-5 w-5 transition-colors duration-200 ${formErrors['phone'] ? 'text-red-400' : formData.phone ? 'text-[#143674]' : 'text-gray-400'}`} />
                              <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all duration-200 bg-white ${formErrors['phone']
                                    ? 'border-red-300 focus:ring-red-200 bg-red-50/50'
                                    : formData.phone
                                      ? 'border-[#143674] focus:ring-[#143674]/20'
                                      : 'border-gray-300 focus:ring-[#143674]/20'
                                  }`}
                                placeholder="+91 98765 43210"
                                required
                              />
                              {formErrors['phone'] && (
                                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                  <span className="w-1 h-1 bg-red-600 rounded-full"></span>
                                  {formErrors['phone']}
                                </p>
                              )}
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Alternate Phone
                            </label>
                            <div className="relative">
                              <Phone className={`absolute left-3 top-3 h-5 w-5 transition-colors duration-200 ${formData.alternatePhone ? 'text-[#143674]' : 'text-gray-400'}`} />
                              <input
                                type="tel"
                                name="alternatePhone"
                                value={formData.alternatePhone || ''}
                                onChange={handleInputChange}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#143674]/20 focus:border-transparent transition-all duration-200 bg-white"
                                placeholder="+91 98765 43210 (Optional)"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Date of Birth *
                            </label>
                            <div className="relative">
                              <Calendar className={`absolute left-3 top-3 h-5 w-5 transition-colors duration-200 ${formErrors['dateOfBirth'] ? 'text-red-400' : formData.dateOfBirth ? 'text-[#143674]' : 'text-gray-400'}`} />
                              <input
                                type="date"
                                name="dateOfBirth"
                                value={formData.dateOfBirth}
                                onChange={handleInputChange}
                                className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all duration-200 bg-white ${formErrors['dateOfBirth']
                                    ? 'border-red-300 focus:ring-red-200 bg-red-50/50'
                                    : formData.dateOfBirth
                                      ? 'border-[#143674] focus:ring-[#143674]/20'
                                      : 'border-gray-300 focus:ring-[#143674]/20'
                                  }`}
                                required
                              />
                              {formErrors['dateOfBirth'] && (
                                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                  <span className="w-1 h-1 bg-red-600 rounded-full"></span>
                                  {formErrors['dateOfBirth']}
                                </p>
                              )}
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Gender *
                            </label>
                            <div className="relative">
                              <User className={`absolute left-3 top-3 h-5 w-5 z-10 transition-colors duration-200 ${formErrors['gender'] ? 'text-red-400' : formData.gender ? 'text-[#143674]' : 'text-gray-400'}`} />
                              <select
                                name="gender"
                                value={formData.gender}
                                onChange={handleInputChange}
                                className={`w-full pl-10 pr-10 py-3 border rounded-xl focus:ring-2 focus:border-transparent appearance-none bg-white transition-all duration-200 cursor-pointer ${formErrors['gender']
                                    ? 'border-red-300 focus:ring-red-200 bg-red-50/50'
                                    : formData.gender
                                      ? 'border-[#143674] focus:ring-[#143674]/20'
                                      : 'border-gray-300 focus:ring-[#143674]/20'
                                  }`}
                                required
                              >
                                <option value="">Select gender...</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                              </select>
                              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <ArrowRight className={`h-4 w-4 rotate-90 transition-colors duration-200 ${formErrors['gender'] ? 'text-red-400' : 'text-gray-400'}`} />
                              </div>
                              {formErrors['gender'] && (
                                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                  <span className="w-1 h-1 bg-red-600 rounded-full"></span>
                                  {formErrors['gender']}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Address Information */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold text-gray-800">Address Information</h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="sm:col-span-2">
                              <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Street Address *
                              </label>
                              <div className="relative">
                                <MapPin className={`absolute left-3 top-3 h-5 w-5 transition-colors duration-200 ${formErrors['address.street'] ? 'text-red-400' : formData.address.street ? 'text-[#143674]' : 'text-gray-400'}`} />
                                <input
                                  type="text"
                                  name="address.street"
                                  value={formData.address.street}
                                  onChange={handleInputChange}
                                  className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all duration-200 bg-white ${formErrors['address.street']
                                      ? 'border-red-300 focus:ring-red-200 bg-red-50/50'
                                      : formData.address.street
                                        ? 'border-[#143674] focus:ring-[#143674]/20'
                                        : 'border-gray-300 focus:ring-[#143674]/20'
                                    }`}
                                  placeholder="Enter your street address"
                                  required
                                />
                                {formErrors['address.street'] && (
                                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                    <span className="w-1 h-1 bg-red-600 rounded-full"></span>
                                    {formErrors['address.street']}
                                  </p>
                                )}
                              </div>
                            </div>

                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">
                                City *
                              </label>
                              <div className="relative">
                                <Building2 className={`absolute left-3 top-3 h-5 w-5 transition-colors duration-200 ${formErrors['address.city'] ? 'text-red-400' : formData.address.city ? 'text-[#143674]' : 'text-gray-400'}`} />
                                <input
                                  type="text"
                                  name="address.city"
                                  value={formData.address.city}
                                  onChange={handleInputChange}
                                  className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all duration-200 bg-white ${formErrors['address.city']
                                      ? 'border-red-300 focus:ring-red-200 bg-red-50/50'
                                      : formData.address.city
                                        ? 'border-[#143674] focus:ring-[#143674]/20'
                                        : 'border-gray-300 focus:ring-[#143674]/20'
                                    }`}
                                  placeholder="Enter your city"
                                  required
                                />
                                {formErrors['address.city'] && (
                                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                    <span className="w-1 h-1 bg-red-600 rounded-full"></span>
                                    {formErrors['address.city']}
                                  </p>
                                )}
                              </div>
                            </div>

                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">
                                State *
                              </label>
                              <div className="relative">
                                <MapPin className={`absolute left-3 top-3 h-5 w-5 transition-colors duration-200 ${formErrors['address.state'] ? 'text-red-400' : formData.address.state ? 'text-[#143674]' : 'text-gray-400'}`} />
                                <input
                                  type="text"
                                  name="address.state"
                                  value={formData.address.state}
                                  onChange={handleInputChange}
                                  className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all duration-200 bg-white ${formErrors['address.state']
                                      ? 'border-red-300 focus:ring-red-200 bg-red-50/50'
                                      : formData.address.state
                                        ? 'border-[#143674] focus:ring-[#143674]/20'
                                        : 'border-gray-300 focus:ring-[#143674]/20'
                                    }`}
                                  placeholder="Enter your state"
                                  required
                                />
                                {formErrors['address.state'] && (
                                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                    <span className="w-1 h-1 bg-red-600 rounded-full"></span>
                                    {formErrors['address.state']}
                                  </p>
                                )}
                              </div>
                            </div>

                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Pincode *
                              </label>
                              <div className="relative">
                                <Mail className={`absolute left-3 top-3 h-5 w-5 transition-colors duration-200 ${formErrors['address.pincode'] ? 'text-red-400' : formData.address.pincode ? 'text-[#143674]' : 'text-gray-400'}`} />
                                <input
                                  type="text"
                                  name="address.pincode"
                                  value={formData.address.pincode}
                                  onChange={handleInputChange}
                                  className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all duration-200 bg-white ${formErrors['address.pincode']
                                      ? 'border-red-300 focus:ring-red-200 bg-red-50/50'
                                      : formData.address.pincode
                                        ? 'border-[#143674] focus:ring-[#143674]/20'
                                        : 'border-gray-300 focus:ring-[#143674]/20'
                                    }`}
                                  placeholder="Enter your pincode"
                                  required
                                />
                                {formErrors['address.pincode'] && (
                                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                    <span className="w-1 h-1 bg-red-600 rounded-full"></span>
                                    {formErrors['address.pincode']}
                                  </p>
                                )}
                              </div>
                            </div>

                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Country *
                              </label>
                              <div className="relative">
                                <MapPin className={`absolute left-3 top-3 h-5 w-5 transition-colors duration-200 ${formErrors['address.country'] ? 'text-red-400' : formData.address.country ? 'text-[#143674]' : 'text-gray-400'}`} />
                                <input
                                  type="text"
                                  name="address.country"
                                  value={formData.address.country}
                                  onChange={handleInputChange}
                                  className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all duration-200 bg-white ${formErrors['address.country']
                                      ? 'border-red-300 focus:ring-red-200 bg-red-50/50'
                                      : formData.address.country
                                        ? 'border-[#143674] focus:ring-[#143674]/20'
                                        : 'border-gray-300 focus:ring-[#143674]/20'
                                    }`}
                                  placeholder="Enter your country"
                                  required
                                />
                                {formErrors['address.country'] && (
                                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                    <span className="w-1 h-1 bg-red-600 rounded-full"></span>
                                    {formErrors['address.country']}
                                  </p>
                                )}
                              </div>
                            </div>


                          </div>
                        </div>

                        {/* Educational Information */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold text-gray-800">Educational Information</h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Graduation Degree *
                              </label>
                              <div className="relative">
                                <GraduationCap className={`absolute left-3 top-3 h-5 w-5 transition-colors duration-200 ${formErrors['education.graduation.degree'] ? 'text-red-400' : formData.education.graduation.degree ? 'text-[#143674]' : 'text-gray-400'}`} />
                                <input
                                  type="text"
                                  name="education.graduation.degree"
                                  value={formData.education.graduation.degree}
                                  onChange={handleInputChange}
                                  className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all duration-200 bg-white ${formErrors['education.graduation.degree']
                                      ? 'border-red-300 focus:ring-red-200 bg-red-50/50'
                                      : formData.education.graduation.degree
                                        ? 'border-[#143674] focus:ring-[#143674]/20'
                                        : 'border-gray-300 focus:ring-[#143674]/20'
                                    }`}
                                  placeholder="e.g., Bachelor of Science"
                                  required
                                />
                                {formErrors['education.graduation.degree'] && (
                                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                    <span className="w-1 h-1 bg-red-600 rounded-full"></span>
                                    {formErrors['education.graduation.degree']}
                                  </p>
                                )}
                              </div>
                            </div>

                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">
                                University *
                              </label>
                              <div className="relative">
                                <Building2 className={`absolute left-3 top-3 h-5 w-5 transition-colors duration-200 ${formErrors['education.graduation.university'] ? 'text-red-400' : formData.education.graduation.university ? 'text-[#143674]' : 'text-gray-400'}`} />
                                <input
                                  type="text"
                                  name="education.graduation.university"
                                  value={formData.education.graduation.university}
                                  onChange={handleInputChange}
                                  className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all duration-200 bg-white ${formErrors['education.graduation.university']
                                      ? 'border-red-300 focus:ring-red-200 bg-red-50/50'
                                      : formData.education.graduation.university
                                        ? 'border-[#143674] focus:ring-[#143674]/20'
                                        : 'border-gray-300 focus:ring-[#143674]/20'
                                    }`}
                                  placeholder="Enter your university name"
                                  required
                                />
                                {formErrors['education.graduation.university'] && (
                                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                    <span className="w-1 h-1 bg-red-600 rounded-full"></span>
                                    {formErrors['education.graduation.university']}
                                  </p>
                                )}
                              </div>
                            </div>

                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Percentage *
                              </label>
                              <div className="relative">
                                <Award className={`absolute left-3 top-3 h-5 w-5 transition-colors duration-200 ${formErrors['education.graduation.percentage'] ? 'text-red-400' : formData.education.graduation.percentage ? 'text-[#143674]' : 'text-gray-400'}`} />
                                <input
                                  type="number"
                                  name="education.graduation.percentage"
                                  value={formData.education.graduation.percentage}
                                  onChange={handleInputChange}
                                  className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all duration-200 bg-white ${formErrors['education.graduation.percentage']
                                      ? 'border-red-300 focus:ring-red-200 bg-red-50/50'
                                      : formData.education.graduation.percentage
                                        ? 'border-[#143674] focus:ring-[#143674]/20'
                                        : 'border-gray-300 focus:ring-[#143674]/20'
                                    }`}
                                  placeholder="Enter percentage"
                                  min="0"
                                  max="100"
                                  required
                                />
                                {formErrors['education.graduation.percentage'] && (
                                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                    <span className="w-1 h-1 bg-red-600 rounded-full"></span>
                                    {formErrors['education.graduation.percentage']}
                                  </p>
                                )}
                              </div>
                            </div>

                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Year of Passing *
                              </label>
                              <div className="relative">
                                <Calendar className={`absolute left-3 top-3 h-5 w-5 transition-colors duration-200 ${formErrors['education.graduation.yearOfPassing'] ? 'text-red-400' : formData.education.graduation.yearOfPassing ? 'text-[#143674]' : 'text-gray-400'}`} />
                                <input
                                  type="number"
                                  name="education.graduation.yearOfPassing"
                                  value={formData.education.graduation.yearOfPassing}
                                  onChange={handleInputChange}
                                  className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all duration-200 bg-white ${formErrors['education.graduation.yearOfPassing']
                                      ? 'border-red-300 focus:ring-red-200 bg-red-50/50'
                                      : formData.education.graduation.yearOfPassing
                                        ? 'border-[#143674] focus:ring-[#143674]/20'
                                        : 'border-gray-300 focus:ring-[#143674]/20'
                                    }`}
                                  placeholder="e.g., 2023"
                                  min="1950"
                                  max="2030"
                                  required
                                />
                                {formErrors['education.graduation.yearOfPassing'] && (
                                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                    <span className="w-1 h-1 bg-red-600 rounded-full"></span>
                                    {formErrors['education.graduation.yearOfPassing']}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Program Information */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold text-gray-800">Program Information</h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Program *
                              </label>
                              <div className="relative">
                                <GraduationCap className={`absolute left-3 top-3 h-5 w-5 z-10 transition-colors duration-200 ${formErrors['program'] ? 'text-red-400' : formData.program ? 'text-[#143674]' : 'text-gray-400'}`} />
                                <select
                                  name="program"
                                  value={formData.program}
                                  onChange={handleInputChange}
                                  className={`w-full pl-10 pr-10 py-3 border rounded-xl focus:ring-2 focus:border-transparent appearance-none bg-white transition-all duration-200 cursor-pointer ${formErrors['program']
                                      ? 'border-red-300 focus:ring-red-200 bg-red-50/50'
                                      : formData.program
                                        ? 'border-[#143674] focus:ring-[#143674]/20'
                                        : 'border-gray-300 focus:ring-[#143674]/20'
                                    }`}
                                  required
                                >
                                  <option value="">Choose your ideal program...</option>
                                  {programsData.map((program) => (
                                    <option key={program.id} value={program.slug}>
                                      {program.name} ({program.duration})
                                    </option>
                                  ))}
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                  <ArrowRight className={`h-4 w-4 rotate-90 transition-colors duration-200 ${formErrors['program'] ? 'text-red-400' : 'text-gray-400'}`} />
                                </div>
                                {formErrors['program'] && (
                                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                    <span className="w-1 h-1 bg-red-600 rounded-full"></span>
                                    {formErrors['program']}
                                  </p>
                                )}
                              </div>
                            </div>

                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Preferred Batch *
                              </label>
                              <div className="relative">
                                <Calendar className={`absolute left-3 top-3 h-5 w-5 z-10 transition-colors duration-200 ${formErrors['preferredBatch'] ? 'text-red-400' : formData.preferredBatch ? 'text-[#143674]' : 'text-gray-400'}`} />
                                <select
                                  name="preferredBatch"
                                  value={formData.preferredBatch}
                                  onChange={handleInputChange}
                                  className={`w-full pl-10 pr-10 py-3 border rounded-xl focus:ring-2 focus:border-transparent appearance-none bg-white transition-all duration-200 cursor-pointer ${formErrors['preferredBatch']
                                      ? 'border-red-300 focus:ring-red-200 bg-red-50/50'
                                      : formData.preferredBatch
                                        ? 'border-[#143674] focus:ring-[#143674]/20'
                                        : 'border-gray-300 focus:ring-[#143674]/20'
                                    }`}
                                  required
                                >
                                  <option value="">Select preferred batch...</option>
                                  <option value="morning">Morning Batch</option>
                                  <option value="afternoon">Afternoon Batch</option>
                                  <option value="evening">Evening Batch</option>
                                  <option value="weekend">Weekend Batch</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                  <ArrowRight className={`h-4 w-4 rotate-90 transition-colors duration-200 ${formErrors['preferredBatch'] ? 'text-red-400' : 'text-gray-400'}`} />
                                </div>
                                {formErrors['preferredBatch'] && (
                                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                    <span className="w-1 h-1 bg-red-600 rounded-full"></span>
                                    {formErrors['preferredBatch']}
                                  </p>
                                )}
                              </div>
                            </div>

                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Total Work Experience (Years) *
                              </label>
                              <div className="relative">
                                <Briefcase className={`absolute left-3 top-3 h-5 w-5 transition-colors duration-200 ${formErrors['workExperience.totalExperience'] ? 'text-red-400' : formData.workExperience.totalExperience ? 'text-[#143674]' : 'text-gray-400'}`} />
                                <input
                                  type="number"
                                  name="workExperience.totalExperience"
                                  value={formData.workExperience.totalExperience}
                                  onChange={handleInputChange}
                                  className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all duration-200 bg-white ${formErrors['workExperience.totalExperience']
                                      ? 'border-red-300 focus:ring-red-200 bg-red-50/50'
                                      : formData.workExperience.totalExperience
                                        ? 'border-[#143674] focus:ring-[#143674]/20'
                                        : 'border-gray-300 focus:ring-[#143674]/20'
                                    }`}
                                  placeholder="Enter years of experience"
                                  min="0"
                                  max="50"
                                  required
                                />
                                {formErrors['workExperience.totalExperience'] && (
                                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                    <span className="w-1 h-1 bg-red-600 rounded-full"></span>
                                    {formErrors['workExperience.totalExperience']}
                                  </p>
                                )}
                              </div>
                            </div>

                            <div className="sm:col-span-2">
                              <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Additional Message (Optional)
                              </label>
                              <div className="relative">
                                <MessageSquare className={`absolute left-3 top-3 h-5 w-5 transition-colors duration-200 ${formErrors['message'] ? 'text-red-400' : formData.message ? 'text-[#143674]' : 'text-gray-400'}`} />
                                <textarea
                                  name="message"
                                  value={formData.message}
                                  onChange={handleInputChange}
                                  rows={4}
                                  className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all duration-200 bg-white resize-none ${formErrors['message']
                                      ? 'border-red-300 focus:ring-red-200 bg-red-50/50'
                                      : formData.message
                                        ? 'border-[#143674] focus:ring-[#143674]/20'
                                        : 'border-gray-300 focus:ring-[#143674]/20'
                                    }`}
                                  placeholder="Any additional information you'd like to share..."
                                />
                                {formErrors['message'] && (
                                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                    <span className="w-1 h-1 bg-red-600 rounded-full"></span>
                                    {formErrors['message']}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>



                        <div className="pt-6">
                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} hover:bg-[#2e7bb3] active:bg-[#1a2d5a] text-white py-4 text-lg font-semibold transition-all duration-200 shadow-sm hover:shadow-lg rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98] transform`}
                          >
                            {isSubmitting ? (
                              <>
                                <Loader2 className="w-5 h-5 animate-spin mr-2" />
                                Processing Application...
                              </>
                            ) : (
                              <>
                                Submit Application
                                <Send className="ml-2 h-5 w-5" />
                              </>
                            )}
                          </Button>

                          <div className="mt-3 sm:mt-4 text-center">
                            <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
                              <CheckCircle className="h-3 w-3" />
                              Your information is secure and will not be shared
                            </p>
                          </div>
                        </div>

                        <div className="text-center pt-4 sm:pt-6 border-t border-gray-200">
                          <div className="bg-blue-50 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-3 sm:mb-4">
                            <h4 className="text-sm font-semibold text-[#143674] mb-1 sm:mb-2">Need Help with Your Application?</h4>
                            <p className="text-xs text-gray-600 mb-2 sm:mb-3">Our admissions team is here to guide you through the process</p>
                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
                              <a
                                href={`tel:${IMAS_CONTACT.PHONE}`}
                                className="flex items-center justify-center gap-2 bg-white text-[#143674] hover:bg-[#143674] hover:text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-all duration-300 text-xs sm:text-sm font-medium border hover:shadow-sm group"
                              >
                                <Phone className="h-4 w-4 group-hover:scale-110 transition-transform" />
                                {IMAS_CONTACT.PHONE}
                              </a>
                              <a
                                href={`mailto:${IMAS_CONTACT.EMAIL}`}
                                className="flex items-center justify-center gap-2 bg-white text-[#143674] hover:bg-[#143674] hover:text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-all duration-300 text-xs sm:text-sm font-medium border hover:shadow-sm group"
                              >
                                <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                                {IMAS_CONTACT.EMAIL}
                              </a>
                            </div>
                          </div>
                        </div>
                        </div>
                        </form>
                      </CardContent>
                    </Card>
                  </div>

              {/* IMAS Information Section - Second on mobile, Left on desktop */}
              <div className="order-2 lg:order-1">
          <div className="lg:sticky lg:top-8 space-y-6">
                      {/* Welcome Card */}
                      <Card className="bg-white border shadow-sm overflow-hidden">
                        <div className={`${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} p-6 lg:p-8 text-white relative overflow-hidden`}>
                          {/* Background Elements */}
                          <div className="absolute inset-0 overflow-hidden opacity-10">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
                          </div>

                          <div className="relative z-10 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold mb-4">
                              <Star className="h-3 w-3" />
                              ADMISSIONS 2025
                            </div>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
                              Why Choose {IMAS_BRAND.NAME}?
                            </h2>
                            <p className="text-base text-white/90 leading-relaxed">
                              Join India's premier business school and transform your career with our industry-focused approach to management education.
                            </p>
                          </div>
                        </div>

                        {/* Key Highlights */}
                        <div className="p-6 lg:p-8 space-y-6">
                          <div className="group flex items-start space-x-4 hover:bg-gray-50 p-3 rounded-xl transition-all duration-300">
                            <div className={`w-12 h-12 rounded-full ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                              <Award className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-gray-800 mb-1 group-hover:text-[#143674] transition-colors">AICTE Approved</h3>
                              <p className="text-gray-600 text-sm leading-relaxed">Recognized programs with industry-relevant curriculum and government accreditation</p>
                            </div>
                          </div>

                          <div className="group flex items-start space-x-4 hover:bg-gray-50 p-3 rounded-xl transition-all duration-300">
                            <div className={`w-12 h-12 rounded-full ${IMAS_TAILWIND_CLASSES.BG_MEDIUM_BLUE} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                              <TrendingUp className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-gray-800 mb-1 group-hover:text-[#143674] transition-colors">97% Placement Rate</h3>
                              <p className="text-gray-600 text-sm leading-relaxed">Outstanding career outcomes with top multinational companies and startups</p>
                            </div>
                          </div>

                          <div className="group flex items-start space-x-4 hover:bg-gray-50 p-3 rounded-xl transition-all duration-300">
                            <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                              <Users className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-gray-800 mb-1 group-hover:text-[#143674] transition-colors">Expert Faculty</h3>
                              <p className="text-gray-600 text-sm leading-relaxed">Learn from seasoned industry veterans and renowned academic leaders</p>
                            </div>
                          </div>

                          <div className="group flex items-start space-x-4 hover:bg-gray-50 p-3 rounded-xl transition-all duration-300">
                            <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                              <Globe className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-gray-800 mb-1 group-hover:text-[#143674] transition-colors">Global Exposure</h3>
                              <p className="text-gray-600 text-sm leading-relaxed">International partnerships, exchange programs, and global business perspectives</p>
                            </div>
                          </div>
                        </div>
                      </Card>

                      {/* Quick Action Card */}
                      <Card className="bg-white border shadow-sm overflow-hidden">
                        <div className="p-6">
                          <div className="text-center">
                            <h3 className="text-lg font-bold text-gray-800 mb-3">Application Deadlines</h3>
                            <div className="space-y-3">
                              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                                <div className="flex items-center gap-2">
                                  <Calendar className="h-4 w-4 text-[#143674]" />
                                  <span className="text-sm font-medium">Early Bird</span>
                                </div>
                                <span className="text-sm font-bold text-[#143674]">March 15, 2025</span>
                              </div>
                              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                                <div className="flex items-center gap-2">
                                  <Clock className="h-4 w-4 text-amber-600" />
                                  <span className="text-sm font-medium">Regular</span>
                                </div>
                                <span className="text-sm font-bold text-amber-600">May 30, 2025</span>
                              </div>
                              <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                                <div className="flex items-center gap-2">
                                  <Target className="h-4 w-4 text-red-600" />
                                  <span className="text-sm font-medium">Final</span>
                                </div>
                                <span className="text-sm font-bold text-red-600">July 15, 2025</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>

                      {/* Stats Card */}
                      <Card className="bg-white border shadow-sm overflow-hidden">
                        <div className={`${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} p-4 text-white text-center`}>
                          <h3 className="text-lg font-bold flex items-center justify-center gap-2">
                            <Building2 className="h-5 w-5" />
                            IMAS by Numbers
                          </h3>
                        </div>
                        <div className="p-6">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-center p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                              <div className="text-2xl font-bold text-[#143674] mb-1">₹25L</div>
                              <div className="text-xs text-gray-600 font-medium">Avg Package</div>
                            </div>
                            <div className="text-center p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                              <div className="text-2xl font-bold text-[#143674] mb-1">50+</div>
                              <div className="text-xs text-gray-600 font-medium">Top Recruiters</div>
                            </div>
                            <div className="text-center p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                              <div className="text-2xl font-bold text-[#143674] mb-1">15+</div>
                              <div className="text-xs text-gray-600 font-medium">Years Legacy</div>
                            </div>
                            <div className="text-center p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                              <div className="text-2xl font-bold text-[#143674] mb-1">5000+</div>
                              <div className="text-xs text-gray-600 font-medium">Alumni Network</div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
        </section>

        {/* Eligibility & Information Section */}
        <section id="eligibility" className="py-12 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Eligibility & Application Process</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Understand our admission requirements and get guidance on the application process to join IMAS's world-class business education.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-sm hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all duration-300 border cursor-pointer group">
                    <div className={`w-12 h-12 ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <BookOpen className="h-6 w-6 text-white group-hover:animate-pulse" />
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-[#143674] transition-colors duration-300">Eligibility Criteria</h3>
                    <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Bachelor's degree with minimum 50% marks and valid entrance exam scores</p>
                  </div>

                  <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-sm hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all duration-300 border cursor-pointer group">
                    <div className={`w-12 h-12 ${IMAS_TAILWIND_CLASSES.BG_MEDIUM_BLUE} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Users className="h-6 w-6 text-white group-hover:animate-pulse" />
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-[#143674] transition-colors duration-300">Application Process</h3>
                    <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Simple 4-step process: Apply → Test → Interview → Admission</p>
                  </div>

                  <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-sm hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all duration-300 border cursor-pointer group">
                    <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <TrendingUp className="h-6 w-6 text-white group-hover:animate-pulse" />
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-[#143674] transition-colors duration-300">Admission Support</h3>
                    <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Dedicated counselors to guide you through every step</p>
                  </div>
                </div>
              </div>
            </section>
        </div>
        </>
        );
}