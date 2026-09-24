import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '../components/ui/button';
import { 
  Camera, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  Building2, 
  Users, 
  GraduationCap,
  ArrowLeft,
  Download,
  Share2,
  Heart,
  Eye,
  Phone,
  Mail,
  ArrowRight,
  Quote
} from 'lucide-react';
import { IMAS_TAILWIND_CLASSES, IMAS_BRAND, IMAS_CONTACT } from '../lib/constants';
import { useNavigate } from 'react-router-dom';
import { applyNow, downloadBrochure } from '../lib/utils';

export function CampusTourPage() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // Campus photos data (sourced from /public/uploads/campus_tour)
  const campusPhotos = [
    // Infrastructure
    { id: 1, src: '/uploads/campus_tour/Infrastructure/IMAS_BUILDING.png', title: 'IMAS Building', description: 'Iconic IMAS building with modern architecture.', category: 'Infrastructure' },
    // Classrooms
    { id: 2, src: '/uploads/campus_tour/Classroom-Photo/DSC_0027.jpg', title: 'Smart Classroom', description: 'Technology-enabled classroom for interactive learning.', category: 'Classrooms' },
    { id: 3, src: '/uploads/campus_tour/Classroom-Photo/DSC_0049.jpg', title: 'Lecture Hall', description: 'Spacious lecture hall with tiered seating.', category: 'Classrooms' },
    { id: 4, src: '/uploads/campus_tour/Classroom-Photo/IMG_7944.jpg', title: 'Presentation Room', description: 'Presentation-ready room with AV setup.', category: 'Classrooms' },
    // Library
    { id: 5, src: '/uploads/campus_tour/LIBRARY/Library_2.jpg', title: 'Library', description: 'Well-stocked library for research and study.', category: 'Library' },
    { id: 6, src: '/uploads/campus_tour/LIBRARY/DSC_2235.jpg', title: 'Reading Area', description: 'Quiet reading space for focused study.', category: 'Library' },
    { id: 7, src: '/uploads/campus_tour/LIBRARY/IMG_20251101_124350_164.jpg', title: 'Stacks', description: 'Extensive collection across disciplines.', category: 'Library' },
    // College Life
    { id: 8, src: '/uploads/campus_tour/College-Life/DSC_0114.jpg', title: 'Student Life', description: 'Vibrant campus life and activities.', category: 'College Life' },
    { id: 9, src: '/uploads/campus_tour/College-Life/DSC_3307.jpg', title: 'Events', description: 'Engaging student events and showcases.', category: 'College Life' },
    { id: 10, src: '/uploads/campus_tour/College-Life/MHA6.jpeg', title: 'Clubs & Societies', description: 'Active clubs for holistic growth.', category: 'College Life' },
    // Hostel
    { id: 11, src: '/uploads/campus_tour/Hostel/File_269.jpg', title: 'Hostel Exterior', description: 'Comfortable and secure student housing.', category: 'Hostel' },
    { id: 12, src: '/uploads/campus_tour/Hostel/File_316.jpg', title: 'Hostel Common Area', description: 'Common spaces designed for community.', category: 'Hostel' },
    // Cafeteria
    { id: 13, src: '/uploads/campus_tour/Cafeteria/File_272.jpg', title: 'Cafeteria', description: 'Healthy meals and social hangouts.', category: 'Cafeteria' },
    { id: 14, src: '/uploads/campus_tour/Cafeteria/File_356.jpg', title: 'Dining Space', description: 'Bright dining area for students.', category: 'Cafeteria' },
    // Labs (aggregated)
    { id: 15, src: '/uploads/campus_tour/Lab-Photo/Healthcare/1.jpg', title: 'Healthcare Lab', description: 'Hands-on learning in healthcare labs.', category: 'Labs' },
    { id: 16, src: '/uploads/campus_tour/Lab-Photo/IT/DSC_2228.jpg', title: 'IT Lab', description: 'Modern computing lab facilities.', category: 'Labs' },
    { id: 17, src: '/uploads/campus_tour/Lab-Photo/Management/DSC_0046.jpg', title: 'Management Lab', description: 'Applied management practice spaces.', category: 'Labs' },
    { id: 18, src: '/uploads/campus_tour/Lab-Photo/hospitality/School_of_Hospitality.png', title: 'Hospitality Lab', description: 'Professional hospitality training environment.', category: 'Labs' },
    { id: 19, src: '/uploads/campus_tour/Lab-Photo/BBAAO/MRO 1.jpg', title: 'Aviation Lab', description: 'Aviation operations practice room.', category: 'Labs' },
    // More College Life
    { id: 20, src: '/uploads/campus_tour/College-Life/File_371.jpg', title: 'Campus Fest', description: 'Celebrations and festivals on campus.', category: 'College Life' },
    { id: 21, src: '/uploads/campus_tour/College-Life/MHA11.jpeg', title: 'Community', description: 'Student engagement and networking.', category: 'College Life' },
  ];

  const categories = ['All', 'Infrastructure', 'Classrooms', 'Library', 'College Life', 'Hostel', 'Cafeteria', 'Labs'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPhotos = selectedCategory === 'All' 
    ? campusPhotos 
    : campusPhotos.filter(photo => photo.category === selectedCategory);

  // Featured photos for hero collage (compact selection across key categories)
  const featuredPhotos = campusPhotos
    .filter(p => ['Infrastructure', 'Classrooms', 'Library', 'College Life', 'Labs'].includes(p.category))
    .slice(0, 5);

  const openImageViewer = (index: number) => {
    setSelectedImage(index);
  };

  const closeImageViewer = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = selectedImage;
    const totalImages = filteredPhotos.length;
    
    if (direction === 'prev') {
      setSelectedImage(currentIndex === 0 ? totalImages - 1 : currentIndex - 1);
    } else {
      setSelectedImage(currentIndex === totalImages - 1 ? 0 : currentIndex + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeImageViewer();
    if (e.key === 'ArrowLeft') navigateImage('prev');
    if (e.key === 'ArrowRight') navigateImage('next');
  };

  const sharePage = async () => {
    const url = window.location.href;
    const title = `Campus Tour - ${IMAS_BRAND.SHORT_NAME}`;
    try {
      if (navigator.share) {
        await navigator.share({ title, url });
      } else {
        await navigator.clipboard.writeText(url);
        alert('Link copied to clipboard');
      }
    } catch {}
  };

  const testimonials = [
    {
      quote:
        'The campus is vibrant and the facilities are top-notch. IMAS made learning engaging every day.',
      name: 'Aisha, PGDM Student',
    },
    {
      quote:
        'Smart classrooms and modern labs helped me gain practical skills that employers value.',
      name: 'Rahul, Business Analytics',
    },
    {
      quote:
        'The library and student spaces foster collaboration and curiosity. A great environment to grow.',
      name: 'Meera, AI & Data Science',
    },
  ];

  const nextTestimonial = () => {
    setTestimonialIndex((i) => (i + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  };

  // UX: Clicking a hero collage photo selects its category and scrolls to gallery
  const handleHeroPhotoClick = (photo: { id: number; category: string }) => {
    setSelectedCategory(photo.category);
    const galleryEl = document.getElementById('gallery');
    if (galleryEl) {
      galleryEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <Helmet>
        <title>Campus Tour - {IMAS_BRAND.NAME}</title>
        <meta name="description" content="Take a virtual tour of IMAS Business School campus. Explore our state-of-the-art facilities, modern infrastructure, and vibrant campus life." />
        <meta name="keywords" content="IMAS campus tour, business school facilities, campus photos, infrastructure, academic spaces" />
      </Helmet>

      {/* Page-specific styles */}
      <style>
        {`
          /* Hide scrollbar for category chip scroller */
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}
      </style>

      <section className="relative min-h-[50vh] sm:min-h-[55vh] lg:min-h-[60vh] text-white overflow-hidden w-full flex items-center justify-center">
        {/* Branded gradient background (no background image) */}
        <div className="absolute inset-0 z-0">
          <div className={`absolute inset-0 ${IMAS_TAILWIND_CLASSES.GRADIENT_PRIMARY}/90`}></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="absolute inset-0 overflow-hidden z-10">
          <div className={`absolute top-20 left-10 w-20 h-20 ${IMAS_TAILWIND_CLASSES.BG_TEAL}/10 rounded-full animate-pulse`}></div>
          <div className={`absolute top-40 right-20 w-16 h-16 ${IMAS_TAILWIND_CLASSES.BG_MEDIUM_BLUE}/10 rounded-full animate-bounce`} style={{ animationDelay: '1s' }}></div>
          <div className={`absolute bottom-20 left-1/4 w-12 h-12 bg-white/5 rounded-full animate-ping`} style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-teal-600/20 to-blue-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-600/20 to-teal-600/20 rounded-full blur-2xl"></div>
        </div>

        <div className="relative max-w-[1260px] mx-auto px-2 py-12 lg:py-16 z-20">
          {/* Two-section hero layout with reduced side padding and clear separation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-4 sm:gap-6">
            {/* Left section: primary content */}
            <div className="order-2 lg:order-1">
              <div className="animate-fade-in-up p-4 sm:p-0">
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-5 py-2.5 rounded-full text-sm font-semibold mb-5 shadow-lg border border-white/20">
                  CAMPUS TOUR
                </div>

                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                    <Camera className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-2">Virtual Campus Experience</h1>
                    <div className="inline-block px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-white/20 backdrop-blur-sm">
                      Explore IMAS Facilities
                    </div>
                  </div>
                </div>

                <p className="text-lg md:text-xl text-white/90 max-w-3xl mb-6 leading-relaxed">
                  Take a virtual tour of our state-of-the-art campus facilities, modern infrastructure, and vibrant learning environment at IMAS Business School.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Button
                    className={`${IMAS_TAILWIND_CLASSES.GRADIENT_PRIMARY} hover:from-[#2e7bb3] hover:to-[#26c1d3] text-white px-6 py-2.5 text-sm sm:text-base font-semibold`}
                    aria-label="View Campus Gallery"
                    onClick={() => {
                      const el = document.getElementById('gallery');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    View Gallery
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white bg-transparent text-white hover:bg-white hover:text-gray-900 px-6 py-2.5 text-sm sm:text-base font-semibold"
                    onClick={downloadBrochure}
                  >
                    Download Brochure
                    <Download className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    className="text-white bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-2.5 text-sm sm:text-base font-semibold"
                    onClick={sharePage}
                  >
                    Share
                    <Share2 className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Right section: secondary visual collage */}
            <div className="order-1 lg:order-2">
              {featuredPhotos.length > 0 && (
                <div className="flex flex-col items-center gap-4">
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 sm:gap-4">
                    {featuredPhotos.map((photo) => (
                      <button
                        key={photo.id}
                        onClick={() => handleHeroPhotoClick(photo)}
                        className="relative overflow-hidden rounded-lg shadow-md ring-1 ring-white/30 bg-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/60"
                        aria-label={`View ${photo.category} photos`}
                      >
                        <img
                          src={photo.src}
                          alt={photo.title}
                          className="w-20 h-20 sm:w-24 sm:h-24 object-cover"
                          loading="lazy"
                          decoding="async"
                        />
                      </button>
                    ))}
                  </div>
                  <Button
                    variant="ghost"
                    className="text-white bg-white/10 hover:bg-white/20 border border-white/20"
                    aria-label="View all campus photos"
                    onClick={() => {
                      const el = document.getElementById('gallery');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    View All Photos
                  </Button>
                </div>
              )}
            </div>
          </div>

          
        </div>
      </section>

      <section className="py-12 bg-white hidden sm:block">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Campus Highlights
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 bg-gray-50 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Building2 className="h-6 w-6 text-[#143674]" />
                <span className="font-semibold text-gray-800">Modern Infrastructure</span>
              </div>
              <p className="text-gray-600 text-sm">Smart classrooms, advanced labs, and collaborative spaces.</p>
            </div>
            <div className="p-5 bg-gray-50 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Users className="h-6 w-6 text-[#2e7bb3]" />
                <span className="font-semibold text-gray-800">Vibrant Campus Life</span>
              </div>
              <p className="text-gray-600 text-sm">Clubs, events, and festivals that build community.</p>
            </div>
            <div className="p-5 bg-gray-50 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <GraduationCap className="h-6 w-6 text-[#26c1d3]" />
                <span className="font-semibold text-gray-800">World-Class Learning</span>
              </div>
              <p className="text-gray-600 text-sm">Industry-aligned programmes and expert faculty.</p>
            </div>
            <div className="p-5 bg-gray-50 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="h-6 w-6 text-[#143674]" />
                <span className="font-semibold text-gray-800">Prime Location</span>
              </div>
              <p className="text-gray-600 text-sm">{IMAS_CONTACT.ADDRESS}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Category Filter */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Campus <span className={IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE}>Gallery</span>
            </h2>
            
            {/* Mobile-friendly horizontal chip scroll */}
            <div className="overflow-x-auto no-scrollbar mb-6">
              <div className="flex items-center gap-2 sm:gap-3 w-max mx-auto px-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? `${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} text-white shadow-lg`
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
              </div>
            </div>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
            {filteredPhotos.map((photo, index) => (
              <div
                key={photo.id}
                className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                onClick={() => openImageViewer(index)}
              >
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <Eye className="h-5 w-5 text-gray-800" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 bg-black/50 text-white text-[11px] rounded-full backdrop-blur-sm">
                      {photo.category}
                    </span>
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-bold text-gray-800 mb-1 text-sm sm:text-base group-hover:text-[#143674] transition-colors">
                    {photo.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">
                    {photo.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Find Us</h2>
              <p className="text-gray-600 mb-6">Visit our campus at {IMAS_CONTACT.ADDRESS}. Explore the neighborhood and plan your route.</p>
              <div className="aspect-video w-full rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                <iframe
                  title="IMAS Campus Location"
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.238774664635!2d88.4322102!3d22.570171199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275aedaaaaaab%3A0x42fc9c8ae01a94cd!2sIMAS%20Business%20School!5e0!3m2!1sen!2sin!4v1763538389238!5m2!1sen!2sin`}
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>



              
            </div>
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Quote className="h-6 w-6 text-[#2e7bb3]" />
                <h3 className="text-xl font-semibold text-gray-800">Student Voices</h3>
              </div>
              <p className="text-gray-700 text-base sm:text-lg mb-4">“{testimonials[testimonialIndex].quote}”</p>
              <p className="text-gray-500 text-sm sm:text-base font-medium mb-6">{testimonials[testimonialIndex].name}</p>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="border-gray-300 text-gray-700"
                  onClick={prevTestimonial}
                >
                  <ChevronLeft className="h-4 w-4 mr-2" /> Prev
                </Button>
                <Button
                  className={`${IMAS_TAILWIND_CLASSES.GRADIENT_SECONDARY} text-white`}
                  onClick={nextTestimonial}
                >
                  Next <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/uploads/IMASBUILDING.jpeg" 
            alt="IMAS Building" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/80"></div>
        </div>
        
        <div className="relative max-w-[1260px] mx-auto px-4 text-center z-10">
          <div className="max-w-4xl mx-auto">
            <div className={`inline-block ${IMAS_TAILWIND_CLASSES.BG_MEDIUM_BLUE} text-white px-6 py-2 rounded-full text-sm font-semibold mb-6`}>
              VISIT OUR CAMPUS
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Experience Our Campus?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Schedule a visit to explore our world-class facilities in person and meet our faculty and students.
            </p>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center justify-center gap-3">
                <Phone className="h-5 w-5 text-teal-400" />
                <span className="text-gray-300">{IMAS_CONTACT.PHONE}</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Mail className="h-5 w-5 text-teal-400" />
                <span className="text-gray-300">{IMAS_CONTACT.EMAIL}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Button 
                className={`${IMAS_TAILWIND_CLASSES.GRADIENT_PRIMARY} hover:from-[#2e7bb3] hover:to-[#26c1d3] text-white px-8 sm:px-10 lg:px-12 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-semibold hover:scale-105 transition-all duration-300`}
                onClick={applyNow}
              >
                Enquire Now
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="border-white bg-transparent text-white hover:bg-white hover:text-gray-900 px-8 sm:px-10 lg:px-12 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-semibold hover:scale-105 transition-all duration-300"
                onClick={() => window.open(`tel:${IMAS_CONTACT.PHONE}`, '_self')}
              >
                Schedule Visit
                <Phone className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>

            {/* Additional Info */}
            <div className="mt-8 text-sm text-gray-400">
              <p>Campus Tours: <span className="text-teal-400 font-semibold">Monday to Saturday, 10 AM - 4 PM</span></p>
              <p className="mt-2">Prior appointment recommended for personalized tours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Viewer Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={closeImageViewer}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative max-w-6xl max-h-full" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={closeImageViewer}
              className="absolute top-3 right-3 z-10 w-9 h-9 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors backdrop-blur-sm"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors backdrop-blur-sm"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors backdrop-blur-sm"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Image */}
            <img
              src={filteredPhotos[selectedImage].src}
              alt={filteredPhotos[selectedImage].title}
              className="max-w-full max-h-full object-contain rounded-lg"
              loading="eager"
              decoding="async"
            />

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/50 text-white p-4 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-1">{filteredPhotos[selectedImage].title}</h3>
              <p className="text-white/80">{filteredPhotos[selectedImage].description}</p>
              <div className="flex items-center justify-between mt-3">
                <span className="px-2 py-1 bg-white/20 text-white text-sm rounded-full">
                  {filteredPhotos[selectedImage].category}
                </span>
                <span className="text-white/60 text-sm">
                  {selectedImage + 1} of {filteredPhotos.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}