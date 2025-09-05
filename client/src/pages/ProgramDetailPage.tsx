import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';

import { Badge } from '../components/ui/badge';
import {
    GraduationCap, Clock, Users, Award, ArrowRight, Star,
    Building2, CheckCircle, Globe, Calendar, MapPin,
    DollarSign, Briefcase, BookOpen, Target, Users2,
    Download, Mail, ExternalLink, Phone, MessageCircle,
    TrendingUp, Shield, Zap, Heart, ChevronLeft, ChevronRight
} from 'lucide-react';
import { getProgramBySlug, getAllProgramSlugs } from '../lib/programsData';
import { IMAS_TAILWIND_CLASSES, IMAS_BRAND } from '../lib/constants';
import { downloadBrochure } from '../lib/utils';
import { FAQ } from '../components/FAQ';

export function ProgramDetailPage() {
    const { slug } = useParams<{ slug: string }>();
    const program = getProgramBySlug(slug || '');

    const [curriculumIndex, setCurriculumIndex] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!program) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-primary-dark mb-4">Program Not Found</h1>
                    <p className="text-muted-foreground mb-6">The program you're looking for doesn't exist.</p>
                    <Link to="/programs">
                        <Button>Back to Programs</Button>
                    </Link>
                </div>
            </div>
        );
    }

    const handleCTAAction = (action: string) => {
        switch (action) {
            case 'apply':
                window.open('https://admission.imas.ac.in/', '_blank');
                break;
            case 'enquire':
                window.open('/contact', '_blank');
                break;
            case 'download':
                downloadBrochure();
                break;
            default:
                break;
        }
    };

    // Construct dynamic canonical URL
    const canonicalUrl = `https://www.imas.ac.in${program.seo.canonical}`;
    const ogUrl = `https://www.imas.ac.in${program.seo.canonical}`;

    return (
        <>
            <Helmet>
                {/* Basic Meta Tags */}
                <title>{program.seo.title}</title>
                <meta name="description" content={program.seo.description} />
                <meta name="keywords" content={program.seo.keywords.join(', ')} />
                
                {/* Canonical URL - Dynamic */}
                <link rel="canonical" href={canonicalUrl} />
                
                {/* Open Graph Meta Tags */}
                <meta property="og:title" content={program.seo.title} />
                <meta property="og:description" content={program.seo.description} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={ogUrl} />
                <meta property="og:image" content={`https://www.imas.ac.in${program.heroImage.desktop}`} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:site_name" content="IMAS Kolkata" />
                <meta property="og:locale" content="en_US" />
                
                {/* Twitter Card Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={program.seo.title} />
                <meta name="twitter:description" content={program.seo.description} />
                <meta name="twitter:image" content={`https://www.imas.ac.in${program.heroImage.desktop}`} />
                <meta name="twitter:site" content="@IMASKolkata" />
                
                {/* Additional SEO Meta Tags */}
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
                <meta name="author" content="International Management & Analytics School (IMAS)" />
                <meta name="publisher" content="IMAS Kolkata" />
                
                {/* Program-specific structured data for better SEO */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "EducationalProgram",
                        "name": program.name,
                        "description": program.description,
                        "provider": {
                            "@type": "EducationalOrganization",
                            "name": "International Management & Analytics School (IMAS)",
                            "url": "https://www.imas.ac.in"
                        },
                        "educationalLevel": "Postgraduate",
                        "timeRequired": program.duration,
                        "location": {
                            "@type": "Place",
                            "name": program.location,
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Kolkata",
                                "addressRegion": "West Bengal",
                                "addressCountry": "IN"
                            }
                        },
                        "url": canonicalUrl,
                        "sameAs": [
                            "https://www.imas.ac.in",
                            canonicalUrl
                        ]
                    })}
                </script>
            </Helmet>

            <div className="min-h-screen">
                {/* Hero Section with Enhanced Design */}
                <section id="hero" className={`relative ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} text-white py-8 sm:py-12 lg:py-16 overflow-hidden`}>
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <img 
                            src={program.heroImage.desktop}
                            alt={program.heroImage.alt}
                            className="w-full h-full object-cover hidden sm:block"
                        />
                        <img 
                            src={program.heroImage.mobile}
                            alt={program.heroImage.alt}
                            className="w-full h-full object-cover sm:hidden"
                        />
                        <div className="absolute inset-0 bg-slate-800/50"></div>
                        <div className="absolute inset-0 bg-primary-dark/80"></div>
                        
                        {/* Animated Geometric Elements */}
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="absolute top-10 -left-10 w-20 h-20 bg-white/5 rounded-full animate-pulse"></div>
                            <div className="absolute top-20 right-5 w-16 h-16 bg-white/10 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
                            <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-white/5 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
                            <div className="absolute bottom-20 right-1/3 w-18 h-18 bg-white/5 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
                        </div>
                        
                        {/* Enhanced Geometric Pattern */}
                        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
                            <svg viewBox="0 0 400 400" className="w-full h-full">
                                <defs>
                                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" fill="url(#grid)" />
                            </svg>
                        </div>
                    </div>

                    <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="max-w-5xl mx-auto">
                            {/* Enhanced Breadcrumb */}
                            <nav className="mb-4 sm:mb-6 animate-fade-in-up">
                                <div className="flex items-center space-x-1.5 text-xs text-white/80 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 inline-flex border border-white/20">
                                    <Link to="/" className="hover:text-white transition-colors font-medium">Home</Link>
                                    <ArrowRight className="h-2.5 w-2.5" />
                                    <Link to="/programs" className="hover:text-white transition-colors font-medium">Programs</Link>
                                    <ArrowRight className="h-2.5 w-2.5" />
                                    <span className="text-white font-semibold text-xs truncate max-w-[150px]">{program.name}</span>
                                </div>
                            </nav>

                            <div className="text-center lg:text-left">
                                <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-semibold mb-3 sm:mb-4 border border-white/30 shadow-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                                    <GraduationCap className="h-3 w-3" />
                                    {program.category.toUpperCase()} PROGRAM
                                </div>
                                
                                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 leading-tight animate-fade-in-up text-white" style={{ animationDelay: '0.4s' }}>
                                    {program.name}
                                </h1>
                                
                                <p className="text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 opacity-95 max-w-4xl mx-auto lg:mx-0 leading-relaxed font-light animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                                    {program.description}
                                </p>

                                {/* Enhanced Key Stats Row */}
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 mb-6 sm:mb-8 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                                    <div className="group bg-white/15 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-lg">
                                        <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-lg mb-2 mx-auto group-hover:scale-110 transition-transform duration-300">
                                            <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                                        </div>
                                        <div className="text-lg sm:text-xl font-bold mb-1 text-center">{program.duration}</div>
                                        <div className="text-xs sm:text-sm text-white/80 text-center font-medium">Duration</div>
                                    </div>
                                    <div className="group bg-white/15 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-lg">
                                        <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-lg mb-2 mx-auto group-hover:scale-110 transition-transform duration-300">
                                            <Target className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                                        </div>
                                        <div className="text-lg sm:text-xl font-bold mb-1 text-center">{program.placement.placementRate}</div>
                                        <div className="text-xs sm:text-sm text-white/80 text-center font-medium">Placement</div>
                                    </div>
                                    <div className="group bg-white/15 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-lg">
                                        <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-lg mb-2 mx-auto group-hover:scale-110 transition-transform duration-300">
                                            <DollarSign className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                                        </div>
                                        <div className="text-lg sm:text-xl font-bold mb-1 text-center">{program.placement.highestCTC}</div>
                                        <div className="text-xs sm:text-sm text-white/80 text-center font-medium">Highest CTC</div>
                                    </div>
                                    <div className="group bg-white/15 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-lg">
                                        <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-lg mb-2 mx-auto group-hover:scale-110 transition-transform duration-300">
                                            <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                                        </div>
                                        <div className="text-lg sm:text-xl font-bold mb-1 text-center">{program.location}</div>
                                        <div className="text-xs sm:text-sm text-white/80 text-center font-medium">Campus</div>
                                    </div>
                                </div>
                                
                                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '1s' }}>
                                    {program.cta.buttons.map((button, index) => (
                                        <Button
                                            key={index}
                                            size="default"
                                            className={`text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3 font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 shadow-lg ${
                                                index === 0
                                                    ? 'bg-white text-[#143674] hover:bg-gray-50 shadow-white/25 hover:shadow-white/40'
                                                    : 'border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#143674] backdrop-blur-sm'
                                            } rounded-full`}
                                            onClick={() => handleCTAAction(button.action)}
                                        >
                                            {button.action === 'download' && <Download className="mr-2 h-4 w-4" />}
                                            {button.action === 'enquire' && <Mail className="mr-2 h-4 w-4" />}
                                            {button.action === 'apply' && <ExternalLink className="mr-2 h-4 w-4" />}
                                            {button.text}
                                        </Button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Program Highlights - Enhanced */}
                <section id="program-highlights" className="py-8 sm:py-12 lg:py-16 bg-gray-50 relative overflow-hidden">
                    {/* Background Elements */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-20 -right-20 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 -left-20 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"></div>
                    </div>
                    
                    <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        {/* Enhanced Section Header */}
                        <div className="text-center mb-8 sm:mb-12">
                            <div className={`inline-block ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE}/10 ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} px-3 py-1.5 rounded-full text-xs font-semibold mb-3 border ${IMAS_TAILWIND_CLASSES.BORDER_DARK_BLUE}/20 shadow-lg backdrop-blur-sm`}>
                                ✨ PROGRAM HIGHLIGHTS
                            </div>
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 leading-tight">
                                Why Choose This Program?
                            </h2>
                            <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                Comprehensive details about your learning journey and career outcomes
                            </p>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                            <Card className="group hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-[#26c1d3]/30 bg-white">
                                <CardContent className="p-3 sm:p-4 text-center">
                                    <div className={`w-10 h-10 sm:w-12 sm:h-12 ${IMAS_TAILWIND_CLASSES.BG_MEDIUM_BLUE}/10 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300`}>
                                        <Clock className={`h-5 w-5 sm:h-6 sm:w-6 ${IMAS_TAILWIND_CLASSES.TEXT_MEDIUM_BLUE}`} />
                                    </div>
                                    <h3 className={`font-bold ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} mb-1 text-xs sm:text-sm tracking-wide`}>DURATION</h3>
                                    <p className={`text-lg sm:text-xl font-bold ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} mb-1 capitalize`}>{program.duration}</p>
                                    <p className="text-xs text-gray-500">{program.format} Program</p>
                                </CardContent>
                            </Card>

                            <Card className="group hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-[#26c1d3]/30 bg-white">
                                <CardContent className="p-3 sm:p-4 text-center">
                                    <div className={`w-10 h-10 sm:w-12 sm:h-12 ${IMAS_TAILWIND_CLASSES.BG_TEAL}/10 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300`}>
                                        <MapPin className={`h-5 w-5 sm:h-6 sm:w-6 ${IMAS_TAILWIND_CLASSES.TEXT_TEAL}`} />
                                    </div>
                                    <h3 className={`font-bold ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} mb-1 text-xs sm:text-sm tracking-wide`}>LOCATION</h3>
                                    <p className={`text-lg sm:text-xl font-bold ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} mb-1`}>{program.location}</p>
                                    <p className="text-xs text-gray-500">Salt Lake Sector V</p>
                                </CardContent>
                            </Card>

                            <Card className="group hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-[#26c1d3]/30 bg-white">
                                <CardContent className="p-3 sm:p-4 text-center">
                                    <div className={`w-10 h-10 sm:w-12 sm:h-12 ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE}/10 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300`}>
                                        <Calendar className={`h-5 w-5 sm:h-6 sm:w-6 ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE}`} />
                                    </div>
                                    <h3 className={`font-bold ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} mb-1 text-xs sm:text-sm tracking-wide`}>COMMENCEMENT</h3>
                                    <p className={`text-lg sm:text-xl font-bold ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} mb-1`}>{program.commencement}</p>
                                    <p className="text-xs text-gray-500">Next Batch</p>
                                </CardContent>
                            </Card>

                            <Card className="group hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-[#26c1d3]/30 bg-white">
                                <CardContent className="p-3 sm:p-4 text-center">
                                    <div className={`w-10 h-10 sm:w-12 sm:h-12 ${IMAS_TAILWIND_CLASSES.BG_MEDIUM_BLUE}/10 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300`}>
                                        <TrendingUp className={`h-5 w-5 sm:h-6 sm:w-6 ${IMAS_TAILWIND_CLASSES.TEXT_MEDIUM_BLUE}`} />
                                    </div>
                                    <h3 className={`font-bold ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} mb-1 text-xs sm:text-sm tracking-wide`}>HIGHEST PACKAGE</h3>
                                    <p className={`text-lg sm:text-xl font-bold ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} mb-1`}>{program.placement.highestCTC}</p>
                                    <p className="text-xs text-gray-500">{program.placement.placementRate} Placement</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Content Sections - Compact Design */}
                <div className="bg-gray-50">

                    {/* Overview Section - Compact */}
                    <section id="overview" className="py-4 sm:py-6">
                        <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="space-y-6 sm:space-y-8">
                                {/* Advanced Program Overview */}
                                <div className="relative">
                                    {/* Hero Overview Card */}
                                    <div className="bg-white rounded-3xl border border-gray-200/50 overflow-hidden backdrop-blur-sm">
                                        {/* Header with Animation */}
                                        <div className="relative p-6 sm:p-8 lg:p-10">
                                            {/* Background Pattern */}
                                            <div className="absolute inset-0 opacity-5">
                                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#143674] rounded-full -translate-y-16 translate-x-16"></div>
                                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#2e7bb3] rounded-full translate-y-12 -translate-x-12"></div>
                                            </div>
                                            
                                            <div className="relative z-10 text-center">
                                                {/* Enhanced Badge */}
                                                <div className="inline-flex items-center gap-2 bg-[#143674] text-white px-4 py-2 rounded-full text-xs font-bold mb-4 animate-pulse">
                                                    <BookOpen className="w-3 h-3" />
                                                    PROGRAM OVERVIEW
                                                    <div className="w-2 h-2 bg-white/50 rounded-full animate-ping"></div>
                                                </div>
                                                
                                                {/* Main Title with Gradient Text */}
                                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-4 text-[#143674] leading-tight">
                                                    Transform Your Career Journey
                                                </h2>
                                                
                                                {/* Description with Better Typography */}
                                                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/50 max-w-4xl mx-auto">
                                                    <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed font-medium">
                                                        {program.overview}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Advanced Why Choose Section - Compact */}
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
                                    {/* Main Content */}
                                    <div className="lg:col-span-8">
                                        <div className="bg-white rounded-2xl border border-gray-200/50 overflow-hidden">
                                            {/* Compact Header */}
                                            <div className="relative overflow-hidden">
                                                <div className={`bg-white p-4 sm:p-5 text-black relative`}>
                                                    {/* Smaller Animated Background Elements */}
                                                    <div className="absolute inset-0 overflow-hidden">
                                                        <div className="absolute top-0 right-0 w-12 h-12 bg-white/10 rounded-full animate-float"></div>
                                                        <div className="absolute bottom-0 left-0 w-10 h-10 bg-white/5 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
                                                    </div>
                                                    
                                                    <div className="relative z-10 text-center">
                                                        <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3 backdrop-blur-sm border border-white/30">
                                                            <Shield className="w-5 h-5 text-white" />
                                                        </div>
                                                        <h3 className="text-lg sm:text-xl font-bold mb-2">
                                                            Why Choose {program.name.split(' ').slice(0, 3).join(' ')} at IMAS?
                                                        </h3>
                                                        <p className="text-xs sm:text-sm opacity-90 max-w-xl mx-auto">
                                                            Discover the unique advantages that set this program apart
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Compact Content Grid */}
                                            <div className="p-4 sm:p-5">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
                                                    {/* Core Highlights */}
                                                    <div className="space-y-3">
                                                        <div className="flex items-center gap-2 mb-3">
                                                            <div className={`w-8 h-8 ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE}/10 rounded-lg flex items-center justify-center`}>
                                                                <Star className={`w-4 h-4 ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE}`} />
                                                            </div>
                                                            <h4 className={`font-bold ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} text-base`}>
                                                                Core Highlights
                                                            </h4>
                                                        </div>
                                                        <div className="space-y-2 max-h-80 overflow-y-auto scrollbar-hide">
                                                            {program.highlights.map((highlight, index) => (
                                                                <div key={index} className="group">
                                                                    <div className="flex items-start gap-2 p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 border border-transparent hover:border-gray-200/50">
                                                                        <div className={`w-5 h-5 ${IMAS_TAILWIND_CLASSES.BG_MEDIUM_BLUE}/10 rounded-md flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform duration-300`}>
                                                                            <CheckCircle className={`h-3 w-3 ${IMAS_TAILWIND_CLASSES.TEXT_MEDIUM_BLUE}`} />
                                                                        </div>
                                                                        <span className="text-gray-700 text-xs sm:text-sm font-medium leading-relaxed flex-1">
                                                                            {highlight}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* What You'll Learn */}
                                                    <div className="space-y-3">
                                                        <div className="flex items-center gap-2 mb-3">
                                                            <div className={`w-8 h-8 ${IMAS_TAILWIND_CLASSES.BG_MEDIUM_BLUE}/10 rounded-lg flex items-center justify-center`}>
                                                                <BookOpen className={`w-4 h-4 ${IMAS_TAILWIND_CLASSES.TEXT_MEDIUM_BLUE}`} />
                                                            </div>
                                                            <h4 className={`font-bold ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} text-base`}>
                                                                What You'll Learn
                                                            </h4>
                                                        </div>
                                                        <div className="space-y-2 max-h-80 overflow-y-auto scrollbar-hide">
                                                            {program.whatYouLearn.map((item, index) => (
                                                                <div key={index} className="group">
                                                                    <div className="flex items-start gap-2 p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 border border-transparent hover:border-gray-200/50">
                                                                        <div className={`w-5 h-5 ${IMAS_TAILWIND_CLASSES.BG_MEDIUM_BLUE}/10 rounded-md flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform duration-300`}>
                                                                            <Zap className={`h-3 w-3 ${IMAS_TAILWIND_CLASSES.TEXT_MEDIUM_BLUE}`} />
                                                                        </div>
                                                                        <span className="text-gray-700 text-xs sm:text-sm font-medium leading-relaxed flex-1">
                                                                            {item}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Sidebar Stats */}
                                    <div className="lg:col-span-4">
                                        <div className="sticky top-6 space-y-4">
                                            {/* Quick Stats */}
                                            <div className="bg-white rounded-2xl border border-gray-200/50 p-6 overflow-hidden">
                                                <h4 className={`font-bold ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} text-lg mb-4 flex items-center gap-2`}>
                                                    <TrendingUp className="w-5 h-5" />
                                                    Quick Stats
                                                </h4>
                                                <div className="space-y-4">
                                                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100/50">
                                                        <span className="text-sm font-medium text-gray-600">Duration</span>
                                                        <span className={`font-bold ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE}`}>{program.duration}</span>
                                                    </div>
                                                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100/50">
                                                        <span className="text-sm font-medium text-gray-600">Format</span>
                                                        <span className={`font-bold ${IMAS_TAILWIND_CLASSES.TEXT_MEDIUM_BLUE}`}>{program.format}</span>
                                                    </div>
                                                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100/50">
                                                        <span className="text-sm font-medium text-gray-600">Location</span>
                                                        <span className={`font-bold ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE}`}>{program.location}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* CTA Card */}
                                            <div className={`${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} rounded-2xl p-6 text-white text-center relative overflow-hidden`}>
                                                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
                                                <div className="relative z-10">
                                                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                                                        <ExternalLink className="w-6 h-6 text-white" />
                                                    </div>
                                                    <h5 className="font-bold text-lg mb-2">Ready to Apply?</h5>
                                                    <p className="text-sm opacity-90 mb-4">Start your journey today</p>
                                                    <Button 
                                                        className="w-full bg-white text-[#143674] hover:bg-gray-100 font-semibold transition-all duration-300 hover:scale-105"
                                                        onClick={() => handleCTAAction('apply')}
                                                    >
                                                        Apply Now
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Curriculum Section - Compact Carousel */}
                    <section id="curriculum" className="py-6 sm:py-8">
                        <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="space-y-4 sm:space-y-6">
                                {/* Section Header */}
                                <div className="text-center max-w-4xl mx-auto">
                                    <div className={`inline-flex items-center gap-2 ${IMAS_TAILWIND_CLASSES.BG_MEDIUM_BLUE}/10 ${IMAS_TAILWIND_CLASSES.TEXT_MEDIUM_BLUE} px-3 py-1.5 rounded-full text-xs font-semibold mb-3 border ${IMAS_TAILWIND_CLASSES.BORDER_MEDIUM_BLUE}/20`}>
                                        <GraduationCap className="w-3 h-3" />
                                        CURRICULUM STRUCTURE
                                    </div>
                                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-3">
                                        Your Learning Journey
                                    </h2>
                                    <p className="text-sm sm:text-base text-gray-600">
                                        Comprehensive curriculum designed to build expertise step by step
                                    </p>
                                </div>

                                {program.curriculum && (
                    <div className="space-y-6">
                        {/* Enhanced Program Duration Info */}
                        <div className="text-center">
                            <div className={`bg-[#143674]/10 rounded-2xl p-6 border border-[#143674]/20 shadow-sm`}>
                                
                                {/* Stats Grid */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3 border border-white/50">
                                        <div className={`text-lg font-bold ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE}`}>{program.duration}</div>
                                        <div className="text-xs text-gray-600 font-medium">Duration</div>
                                    </div>
                                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3 border border-white/50">
                                        <div className={`text-lg font-bold ${IMAS_TAILWIND_CLASSES.TEXT_MEDIUM_BLUE}`}>{program.curriculum.phases.length}</div>
                                        <div className="text-xs text-gray-600 font-medium">Semesters</div>
                                    </div>
                                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3 border border-white/50">
                                        <div className={`text-lg font-bold ${IMAS_TAILWIND_CLASSES.TEXT_TEAL}`}>{program.format}</div>
                                        <div className="text-xs text-gray-600 font-medium">Format</div>
                                    </div>
                                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3 border border-white/50">
                                        <div className={`text-lg font-bold ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE}`}>{program.commencement}</div>
                                        <div className="text-xs text-gray-600 font-medium">Commencement</div>
                                    </div>
                                </div>
                                
                                <Button 
                                    variant="default" 
                                    size="default" 
                                    className={`${IMAS_TAILWIND_CLASSES.GRADIENT_PRIMARY} hover:from-[#0f2a5a] hover:to-[#256a9a] text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
                                    onClick={() => handleCTAAction('download')}
                                >
                                    <Download className="w-4 h-4 mr-2" />
                                    Download Brochure
                                </Button>
                            </div>
                        </div>

                        {/* Enhanced Semester Cards Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {program.curriculum.phases.map((phase, index) => {
                                const gradients = [
                                    'from-[#143674] via-[#2e7bb3] to-[#26c1d3]',
                                    'from-[#2e7bb3] via-[#26c1d3] to-[#143674]', 
                                    'from-[#26c1d3] via-[#2e7bb3] to-[#143674]',
                                    'from-[#143674] via-[#26c1d3] to-[#2e7bb3]',
                                    'from-[#2e7bb3] via-[#143674] to-[#26c1d3]',
                                    'from-[#26c1d3] via-[#143674] to-[#2e7bb3]',
                                    'from-[#143674] via-[#2e7bb3] to-[#26c1d3]',
                                    'from-[#2e7bb3] via-[#26c1d3] to-[#143674]'
                                ];
                                const gradient = gradients[index % gradients.length];
                                
                                return (
                                    <div key={index} className="group relative">
                                        {/* Card with enhanced design */}
                                        <div className="relative overflow-hidden">
                                            <Card className="h-full bg-white text-gray-800 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 relative overflow-hidden">
                                                {/* Decorative elements */}
                                                <div className="absolute top-0 right-0 w-20 h-20 bg-gray-100/50 rounded-full -translate-y-10 translate-x-10"></div>
                                                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gray-50/50 rounded-full translate-y-8 -translate-x-8"></div>
                                                
                                                <CardHeader className="pb-4 relative z-10">
                                                    <div className="flex items-center justify-between mb-3">
                                                        <div className="flex items-center gap-3">
                                                            <div className={`w-10 h-10 ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} rounded-xl flex items-center justify-center shadow-lg`}>
                                                                <span className="text-base font-bold text-white">{index + 1}</span>
                                                            </div>
                                                            <div>
                                                                <CardTitle className="text-gray-800 text-lg font-bold">
                                                    Semester {index + 1}
                                                </CardTitle>
                                                <p className="text-gray-600 text-xs font-medium">
                                                    {phase.topics.length} Subjects
                                                </p>
                                                            </div>
                                                        </div>
                                                        <BookOpen className={`w-5 h-5 ${IMAS_TAILWIND_CLASSES.TEXT_MEDIUM_BLUE}`} />
                                                    </div>
                                                </CardHeader>
                                                
                                                <CardContent className="pt-0 relative z-10">
                                                    <div className="space-y-3">
                                                        {/* Key subjects with better styling */}
                                                        <div className="space-y-2.5">
                                                            {phase.topics.slice(0, 5).map((topic, topicIndex) => (
                                                                <div key={topicIndex} className="flex items-start gap-2 group/item">
                                                                    <div className={`w-1.5 h-1.5 ${IMAS_TAILWIND_CLASSES.BG_TEAL} rounded-full mt-2 transition-colors duration-300`}></div>
                                                                    <div className="text-sm text-gray-700 leading-relaxed font-medium transition-colors duration-300">
                                                                        {topic}
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                        
                                                        {/* More subjects indicator */}
                                                        {phase.topics.length > 5 && (
                                                            <div className="mt-4 pt-3 border-t border-gray-200">
                                                                <div className="flex items-center justify-between">
                                                                    <span className="text-xs text-gray-500 font-medium">
                                                                        +{phase.topics.length - 5} more subjects
                                                                    </span>
                                                                    <ArrowRight className={`w-3 h-3 ${IMAS_TAILWIND_CLASSES.TEXT_MEDIUM_BLUE}`} />
                                                                </div>
                                                            </div>
                                                        )}
                                                        
                                                        {/* Progress indicator */}
                                                        <div className="mt-4 pt-3 border-t border-gray-200">
                                                            <div className="flex items-center gap-2">
                                                                <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                                                    <div 
                                                                        className={`h-full ${IMAS_TAILWIND_CLASSES.BG_TEAL} rounded-full transition-all duration-1000 ease-out`}
                                                                        style={{ width: `${((index + 1) / (program.curriculum?.phases.length || 1)) * 100}%` }}
                                                                    ></div>
                                                                </div>
                                                                <span className="text-xs text-gray-500 font-medium">
                                                                    {Math.round(((index + 1) / (program.curriculum?.phases.length || 1)) * 100)}%
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </div>
                                        
                                        {/* Hover effect overlay */}
                                        <div className="absolute inset-0 bg-gray-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none"></div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Navigation Arrows for Mobile */}
                        <div className="flex justify-center gap-4 lg:hidden">
                            <button 
                                onClick={() => setCurriculumIndex(Math.max(0, curriculumIndex - 1))}
                                disabled={curriculumIndex === 0}
                                className={`p-2 rounded-full ${IMAS_TAILWIND_CLASSES.BG_MEDIUM_BLUE}/10 hover:${IMAS_TAILWIND_CLASSES.BG_MEDIUM_BLUE}/20 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed`}
                            >
                                <ChevronLeft className={`w-4 h-4 ${IMAS_TAILWIND_CLASSES.TEXT_MEDIUM_BLUE}`} />
                            </button>
                            <button 
                                onClick={() => setCurriculumIndex(Math.min((program.curriculum?.phases.length || 1) - 1, curriculumIndex + 1))}
                                disabled={curriculumIndex === (program.curriculum?.phases.length || 1) - 1}
                                className={`p-2 rounded-full ${IMAS_TAILWIND_CLASSES.BG_MEDIUM_BLUE}/10 hover:${IMAS_TAILWIND_CLASSES.BG_MEDIUM_BLUE}/20 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed`}
                            >
                                <ChevronRight className={`w-4 h-4 ${IMAS_TAILWIND_CLASSES.TEXT_MEDIUM_BLUE}`} />
                            </button>
                        </div>
                    </div>
                )}
                            </div>
                        </div>
                    </section>

                    {/* Careers Section - Compact */}
                    <section id="careers" className="py-8 sm:py-10">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="space-y-6 sm:space-y-8">
                                {/* Section Header */}
                                <div className="text-center max-w-3xl mx-auto">
                                    <div className={`inline-block ${IMAS_TAILWIND_CLASSES.BG_TEAL}/10 ${IMAS_TAILWIND_CLASSES.TEXT_TEAL} px-3 py-1.5 rounded-full text-xs font-semibold mb-3 border ${IMAS_TAILWIND_CLASSES.BORDER_TEAL}/20`}>
                                        CAREER OPPORTUNITIES
                                    </div>
                                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-3">
                                        Your Future Awaits
                                    </h2>
                                    <p className="text-sm text-gray-600 max-w-2xl mx-auto">
                                        Explore diverse career paths and opportunities available after graduation
                                    </p>
                                </div>

                                {/* Career Opportunities */}
                                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                                    <div className={`${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} p-4 sm:p-6 text-white text-center`}>
                                        <TrendingUp className="w-10 h-10 mx-auto mb-2 opacity-90" />
                                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">
                                            Career Paths After {program.name}
                                        </h3>
                                        <p className="text-sm opacity-90 max-w-xl mx-auto">
                                            High-demand positions and growth opportunities in your field
                                        </p>
                                    </div>
                                    <div className="p-4 sm:p-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                            {program.careerOpportunities.map((career, index) => (
                                                <div key={index} className="group flex items-start gap-2 p-3 rounded-xl hover:bg-gray-50 transition-all duration-300 border border-gray-100 hover:border-[#26c1d3]/30">
                                                    <Target className={`h-4 w-4 ${IMAS_TAILWIND_CLASSES.TEXT_TEAL} mt-0.5 group-hover:scale-110 transition-transform duration-300`} />
                                                    <span className="text-gray-700 font-medium text-sm leading-relaxed">{career}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Eligibility Section - Compact */}
                    <section id="eligibility" className="py-8 sm:py-10">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="space-y-6 sm:space-y-8">
                                {/* Section Header */}
                                <div className="text-center max-w-3xl mx-auto">
                                    <div className={`inline-block ${IMAS_TAILWIND_CLASSES.BG_MEDIUM_BLUE}/10 ${IMAS_TAILWIND_CLASSES.TEXT_MEDIUM_BLUE} px-3 py-1.5 rounded-full text-xs font-semibold mb-3 border ${IMAS_TAILWIND_CLASSES.BORDER_MEDIUM_BLUE}/20`}>
                                        ELIGIBILITY CRITERIA
                                    </div>
                                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-3">
                                        Are You Ready?
                                    </h2>
                                    <p className="text-sm text-gray-600 max-w-2xl mx-auto">
                                        Check if you meet the requirements to join this program
                                    </p>
                                </div>

                                {/* Eligibility Requirements */}
                                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                                    <div className={`${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} p-4 sm:p-6 text-white text-center`}>
                                        <Shield className="w-10 h-10 mx-auto mb-2 opacity-90" />
                                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">
                                            Requirements for {program.name}
                                        </h3>
                                        <p className="text-sm opacity-90 max-w-xl mx-auto">
                                            Ensure you meet all criteria before applying
                                        </p>
                                    </div>
                                    <div className="p-4 sm:p-6 space-y-4">
                                        {/* Education */}
                                        <div className="group p-4 rounded-xl border border-gray-100 hover:border-[#26c1d3]/30 hover:bg-gray-50 transition-all duration-300">
                                            <div className="flex items-start gap-3">
                                                <div className={`p-2 rounded-lg ${IMAS_TAILWIND_CLASSES.BG_TEAL}/10 group-hover:${IMAS_TAILWIND_CLASSES.BG_TEAL}/20 transition-colors duration-300`}>
                                                    <GraduationCap className={`h-4 w-4 ${IMAS_TAILWIND_CLASSES.TEXT_TEAL}`} />
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="text-sm font-bold text-gray-800 mb-1">Education</h4>
                                                    <p className="text-xs text-gray-600 leading-relaxed">{program.eligibility.education}</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Entrance Exams */}
                                        <div className="group p-4 rounded-xl border border-gray-100 hover:border-[#26c1d3]/30 hover:bg-gray-50 transition-all duration-300">
                                            <div className="flex items-start gap-3">
                                                <div className={`p-2 rounded-lg ${IMAS_TAILWIND_CLASSES.BG_MEDIUM_BLUE}/10 group-hover:${IMAS_TAILWIND_CLASSES.BG_MEDIUM_BLUE}/20 transition-colors duration-300`}>
                                                    <BookOpen className={`h-4 w-4 ${IMAS_TAILWIND_CLASSES.TEXT_MEDIUM_BLUE}`} />
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="text-sm font-bold text-gray-800 mb-1">Entrance Exams</h4>
                                                    <p className="text-xs text-gray-600 leading-relaxed">{program.eligibility.exams}</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Work Experience */}
                                        {program.eligibility.experience && (
                                            <div className="group p-4 rounded-xl border border-gray-100 hover:border-[#26c1d3]/30 hover:bg-gray-50 transition-all duration-300">
                                                <div className="flex items-start gap-3">
                                                    <div className={`p-2 rounded-lg ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE}/10 group-hover:${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE}/20 transition-colors duration-300`}>
                                                        <Briefcase className={`h-4 w-4 ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE}`} />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4 className="text-sm font-bold text-gray-800 mb-1">Work Experience</h4>
                                                        <p className="text-xs text-gray-600 leading-relaxed">{program.eligibility.experience}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Additional Requirements */}
                                        {program.eligibility.additional && (
                                            <div className="group p-4 rounded-xl border border-gray-100 hover:border-[#26c1d3]/30 hover:bg-gray-50 transition-all duration-300">
                                                <div className="flex items-start gap-3">
                                                    <div className={`p-2 rounded-lg ${IMAS_TAILWIND_CLASSES.BG_TEAL}/10 group-hover:${IMAS_TAILWIND_CLASSES.BG_TEAL}/20 transition-colors duration-300`}>
                                                        <CheckCircle className={`h-4 w-4 ${IMAS_TAILWIND_CLASSES.TEXT_TEAL}`} />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4 className="text-sm font-bold text-gray-800 mb-1">Additional Requirements</h4>
                                                        <p className="text-xs text-gray-600 leading-relaxed">{program.eligibility.additional}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                {/* Placement Section - Compact */}
                <section id="placement" className="p-6 sm:py-8">
                    <div className="space-y-6 sm:space-y-8">
                        {/* Section Header */}
                        <div className="text-center max-w-3xl mx-auto">
                            <div className={`inline-block ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE}/10 ${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} px-3 py-1.5 rounded-full text-xs font-semibold mb-3 border ${IMAS_TAILWIND_CLASSES.BORDER_DARK_BLUE}/20`}>
                                PLACEMENT HIGHLIGHTS
                            </div>
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-3">
                                Success Stories
                            </h2>
                            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
                                Outstanding placement records and career outcomes for our graduates
                            </p>
                        </div>

                        {/* Enhanced Placement Statistics */}
                        <div className="grid grid-cols-3 md:grid-cols-3 gap-3 lg:gap-4 mb-6">
                            <div className="group bg-[#143674] rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-102 hover:-translate-y-1">
                                <div className="p-4 sm:p-5 text-white text-center relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-12 h-12 bg-white/10 rounded-full -translate-y-6 translate-x-6"></div>
                                    <div className="relative z-10">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/25 rounded-xl flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                            <DollarSign className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                                        </div>
                                        <h3 className="text-xs font-bold mb-1 opacity-90 uppercase tracking-wider">Highest CTC</h3>
                                        <p className="text-xl sm:text-2xl font-black mb-1">{program.placement.highestCTC}</p>
                                        <div className="w-8 h-0.5 bg-white/30 rounded-full mx-auto"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="group bg-[#2e7bb3] rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-102 hover:-translate-y-1">
                                <div className="p-4 sm:p-5 text-white text-center relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-12 h-12 bg-white/10 rounded-full -translate-y-6 translate-x-6"></div>
                                    <div className="relative z-10">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/25 rounded-xl flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                            <Target className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                                        </div>
                                        <h3 className="text-xs font-bold mb-1 opacity-90 uppercase tracking-wider">Average CTC</h3>
                                        <p className="text-xl sm:text-2xl font-black mb-1">{program.placement.averageCTC}</p>
                                        <div className="w-8 h-0.5 bg-white/30 rounded-full mx-auto"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="group bg-[#143674] rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-102 hover:-translate-y-1">
                                <div className="p-4 sm:p-5 text-white text-center relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-12 h-12 bg-white/10 rounded-full -translate-y-6 translate-x-6"></div>
                                    <div className="relative z-10">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/25 rounded-xl flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                            <Users2 className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                                        </div>
                                        <h3 className="text-xs font-bold mb-1 opacity-90 uppercase tracking-wider">Placement Rate</h3>
                                        <p className="text-xl sm:text-2xl font-black mb-1">{program.placement.placementRate}</p>
                                        <div className="w-8 h-0.5 bg-white/30 rounded-full mx-auto"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Top Recruiters */}
                        <div className="py-6">
                            
                            <div className="relative overflow-hidden">
                                <div className="flex animate-scroll space-x-8">
                                    {/* First set of logos */}
                                    {program.placement.topRecruiters.map((recruiter, index) => (
                                        <div key={index} className="flex-shrink-0">
                                            <img
                                                src={recruiter.logo}
                                                alt={recruiter.alt}
                                                className="h-5 w-auto object-contain lg:h-16 md:h-16  transition-all duration-300 hover:opacity-70"
                                                onError={(e) => {
                                                    // Fallback to a placeholder if image fails to load
                                                    e.currentTarget.src = '/uploads/logos/IMAS_LOGO_PNG.png';
                                                }}
                                            />
                                        </div>
                                    ))}
                                    {/* Duplicate set for seamless scrolling */}
                                    {program.placement.topRecruiters.map((recruiter, index) => (
                                        <div key={`duplicate-${index}`} className="flex-shrink-0">
                                            <img
                                                src={recruiter.logo}
                                                alt={recruiter.alt}
                                                className="h-5 w-auto object-contain  lg:h-16 md:h-16 transition-all duration-300 hover:opacity-70"
                                                onError={(e) => {
                                                    // Fallback to a placeholder if image fails to load
                                                    e.currentTarget.src = '/uploads/logos/IMAS_LOGO_PNG.png';
                                                }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <FAQ />

                {/* Enhanced Dynamic CTA Section */}
                <section id="cta" className={`py-20 sm:py-15  content-center ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} text-white relative overflow-hidden`}>
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/uploads/IMASBUILDING.jpeg"
                            alt="IMAS Building"
                            className="w-full h-full object-cover opacity-20"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-[#143674]/80 via-[#143674]/70 to-[#143674]/80"></div>
                    </div>
                    
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10 z-10">
                        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
                    </div>
                    
                    <div className="container mx-auto px-4 text-center relative z-20">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">{program.cta.title}</h2>
                            <p className="text-sm sm:text-base lg:text-lg mb-6 opacity-90 max-w-2xl mx-auto leading-relaxed">
                                {program.cta.description}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                                {program.cta.buttons.map((button, index) => (
                                    <Button
                                        key={index}
                                        size="default"
                                        className={`text-sm sm:text-base px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                                            index === 0
                                                ? 'bg-white text-gray-800 hover:bg-gray-100 shadow-lg'
                                                : 'border-2 border-white text-white hover:bg-white hover:text-gray-800 bg-transparent'
                                        }`}
                                        onClick={() => handleCTAAction(button.action)}
                                    >
                                        {button.action === 'download' && <Download className="mr-2 h-4 w-4" />}
                                        {button.action === 'enquire' && <Mail className="mr-2 h-4 w-4" />}
                                        {button.action === 'apply' && <ExternalLink className="mr-2 h-4 w-4" />}
                                        {button.text}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sticky CTA Footer */}
                <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
                    <div className={`${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} p-4 shadow-2xl border-t border-white/20 rounded-lg`}>
                        <div className="flex gap-3">
                            <Button
                                className="flex-1 bg-white text-gray-800 hover:bg-gray-100 font-semibold py-3 rounded-xl shadow-lg"
                                onClick={() => handleCTAAction('enquire')}
                            >
                                <MessageCircle className="mr-2 h-4 w-4" />
                                Enquire Now
                            </Button>
                            <Button
                                className="flex-1 border-2 border-white text-white hover:bg-white hover:text-gray-800 bg-transparent font-semibold py-3 rounded-xl"
                                onClick={() => handleCTAAction('apply')}
                            >
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Apply Now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

// Generate static paths for all programs
export const generateStaticParams = () => {
    return getAllProgramSlugs().map((slug) => ({
        slug,
    }));
};
