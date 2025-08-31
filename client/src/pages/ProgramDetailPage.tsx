import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Helmet } from 'react-helmet-async';
import {
    ArrowLeft, Clock, MapPin, GraduationCap, Target, DollarSign,
    Building2, CheckCircle, Globe, Calendar, Download, Mail, 
    ExternalLink, Phone, MessageCircle, TrendingUp, Shield, 
    Zap, Heart, Users2, BookOpen, Briefcase
} from 'lucide-react';
import { getProgramBySlug, getAllProgramSlugs } from '../lib/programsData';
import { IMAS_TAILWIND_CLASSES, IMAS_BRAND } from '../lib/constants';
import { downloadBrochure, applyNow } from '../lib/utils';

export function ProgramDetailPage() {
    const { slug } = useParams<{ slug: string }>();
    const program = getProgramBySlug(slug || '');

    if (!program) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Program Not Found</h1>
                    <p className="text-gray-600 mb-6">The program you're looking for doesn't exist.</p>
                    <Link 
                        to="/programs" 
                        className="inline-flex items-center gap-2 bg-[#143674] text-white px-6 py-3 rounded-lg hover:bg-[#2e7bb3] transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Programs
                    </Link>
                </div>
            </div>
        );
    }

    const handleCTAAction = (action: string) => {
        switch (action) {
            case 'apply':
                applyNow();
                break;
            case 'enquire':
                // Handle enquiry
                console.log('Enquire about:', program.name);
                break;
            case 'download':
                downloadBrochure();
                break;
            default:
                console.log('Unknown action:', action);
        }
    };

    return (
        <>
            <Helmet>
                <title>{program.seo.title}</title>
                <meta name="description" content={program.seo.description} />
                <meta name="keywords" content={program.seo.keywords.join(', ')} />
                <link rel="canonical" href={program.seo.canonical} />
                <meta property="og:title" content={program.seo.title} />
                <meta property="og:description" content={program.seo.description} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={program.seo.canonical} />
            </Helmet>

            <div className="min-h-screen">
                {/* Hero Section */}
                <section id="hero" className={`relative ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} text-white py-8 sm:py-12 lg:py-16 overflow-hidden`}>
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <img 
                            src={program.heroImage.desktop}
                            alt={program.heroImage.alt}
                            className="w-full h-full object-cover hidden sm:block"
                            loading="eager"
                        />
                        <img 
                            src={program.heroImage.mobile}
                            alt={program.heroImage.alt}
                            className="w-full h-full object-cover sm:hidden"
                            loading="eager"
                        />
                        <div className="absolute inset-0 bg-primary-dark/80"></div>
                    </div>

                    <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="max-w-5xl mx-auto">
                            {/* Breadcrumb */}
                            <nav className="mb-4 sm:mb-6 animate-fade-in-up">
                                <div className="inline-flex items-center space-x-1.5 text-xs text-white/80 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/20">
                                    <Link to="/" className="hover:text-white transition-colors font-medium">Home</Link>
                                    <span>/</span>
                                    <Link to="/programs" className="hover:text-white transition-colors font-medium">Programs</Link>
                                    <span>/</span>
                                    <span className="text-white font-semibold text-xs truncate max-w-[150px]">{program.name}</span>
                                </div>
                            </nav>

                            <div className="text-center lg:text-left">
                                <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-semibold mb-3 sm:mb-4 border border-white/30 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                                    <GraduationCap className="h-3 w-3" />
                                    {program.category.toUpperCase()} PROGRAM
                                </div>
                                
                                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 leading-tight animate-fade-in-up text-white" style={{ animationDelay: '0.4s' }}>
                                    {program.name}
                                </h1>
                                
                                <p className="text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 opacity-95 max-w-4xl mx-auto lg:mx-0 leading-relaxed font-light animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                                    {program.description}
                                </p>

                                {/* Key Stats */}
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 mb-6 sm:mb-8 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                                    <div className="group bg-white/15 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/30 hover:bg-white/20 transition-all duration-300">
                                        <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-lg mb-2 mx-auto">
                                            <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                                        </div>
                                        <div className="text-lg sm:text-xl font-bold mb-1 text-center">{program.duration}</div>
                                        <div className="text-xs sm:text-sm text-white/80 text-center font-medium">Duration</div>
                                    </div>
                                    <div className="group bg-white/15 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/30 hover:bg-white/20 transition-all duration-300">
                                        <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-lg mb-2 mx-auto">
                                            <Target className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                                        </div>
                                        <div className="text-lg sm:text-xl font-bold mb-1 text-center">{program.placement.placementRate}</div>
                                        <div className="text-xs sm:text-sm text-white/80 text-center font-medium">Placement</div>
                                    </div>
                                    <div className="group bg-white/15 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/30 hover:bg-white/20 transition-all duration-300">
                                        <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-lg mb-2 mx-auto">
                                            <DollarSign className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                                        </div>
                                        <div className="text-lg sm:text-xl font-bold mb-1 text-center">{program.placement.highestCTC}</div>
                                        <div className="text-xs sm:text-sm text-white/80 text-center font-medium">Highest CTC</div>
                                    </div>
                                    <div className="group bg-white/15 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/30 hover:bg-white/20 transition-all duration-300">
                                        <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-lg mb-2 mx-auto">
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
                                            className={`text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3 font-semibold transition-all duration-300 transform hover:scale-105 ${
                                                index === 0
                                                    ? 'bg-white text-[#143674] hover:bg-gray-50'
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

                {/* Program Overview Section */}
                <section id="overview" className="py-8 sm:py-12 bg-gray-50">
                    <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Program Overview</h2>
                            <p className="text-gray-600 leading-relaxed">{program.overview}</p>
                        </div>
                    </div>
                </section>

                {/* Program Highlights */}
                <section id="highlights" className="py-8 sm:py-12">
                    <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Program Highlights</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {program.highlights.map((highlight, index) => (
                                <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg border hover:shadow-sm transition-shadow">
                                    <CheckCircle className="h-5 w-5 text-[#143674] mt-0.5 flex-shrink-0" />
                                    <p className="text-gray-700">{highlight}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* What You'll Learn */}
                <section id="curriculum" className="py-8 sm:py-12 bg-gray-50">
                    <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">What You'll Learn</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {program.whatYouLearn.map((item, index) => (
                                <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg border">
                                    <BookOpen className="h-5 w-5 text-[#2e7bb3] mt-0.5 flex-shrink-0" />
                                    <p className="text-gray-700">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Career Opportunities */}
                <section id="careers" className="py-8 sm:py-12">
                    <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Career Opportunities</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {program.careerOpportunities.map((career, index) => (
                                <div key={index} className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border border-blue-100">
                                    <Briefcase className="h-5 w-5 text-[#143674] mt-0.5 flex-shrink-0" />
                                    <p className="text-gray-700 font-medium">{career}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Placement Statistics */}
                <section id="placement" className="py-8 sm:py-12 bg-gray-50">
                    <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Placement Statistics</h2>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <Card className="bg-[#143674] text-white">
                                <CardContent className="p-6 text-center">
                                    <TrendingUp className="h-8 w-8 mx-auto mb-3" />
                                    <div className="text-2xl font-bold mb-1">{program.placement.placementRate}</div>
                                    <div className="text-sm opacity-90">Placement Rate</div>
                                </CardContent>
                            </Card>
                            <Card className="bg-[#2e7bb3] text-white">
                                <CardContent className="p-6 text-center">
                                    <DollarSign className="h-8 w-8 mx-auto mb-3" />
                                    <div className="text-2xl font-bold mb-1">{program.placement.averageCTC}</div>
                                    <div className="text-sm opacity-90">Average CTC</div>
                                </CardContent>
                            </Card>
                            <Card className="bg-[#143674] text-white">
                                <CardContent className="p-6 text-center">
                                    <Target className="h-8 w-8 mx-auto mb-3" />
                                    <div className="text-2xl font-bold mb-1">{program.placement.highestCTC}</div>
                                    <div className="text-sm opacity-90">Highest CTC</div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Top Recruiters */}
                        <div className="text-center">
                            <h3 className="text-xl font-bold text-gray-800 mb-6">Our Top Recruiters</h3>
                            <div className="relative overflow-hidden">
                                <div className="flex animate-scroll space-x-8">
                                    {program.placement.topRecruiters.map((recruiter, index) => (
                                        <div key={index} className="flex-shrink-0">
                                            <img
                                                src={recruiter.logo}
                                                alt={recruiter.alt}
                                                className="h-12 w-auto object-contain lg:h-16 transition-all duration-300 hover:opacity-70"
                                                onError={(e) => {
                                                    e.currentTarget.src = '/uploads/logos/IMAS_LOGO_PNG.png';
                                                }}
                                            />
                                        </div>
                                    ))}
                                    {/* Duplicate for seamless scrolling */}
                                    {program.placement.topRecruiters.map((recruiter, index) => (
                                        <div key={`duplicate-${index}`} className="flex-shrink-0">
                                            <img
                                                src={recruiter.logo}
                                                alt={recruiter.alt}
                                                className="h-12 w-auto object-contain lg:h-16 transition-all duration-300 hover:opacity-70"
                                                onError={(e) => {
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

                {/* CTA Section */}
                <section id="cta" className={`py-12 ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} text-white text-center`}>
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4">{program.cta.title}</h2>
                        <p className="text-lg mb-8 opacity-90">{program.cta.description}</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            {program.cta.buttons.map((button, index) => (
                                <Button
                                    key={index}
                                    size="lg"
                                    className={`px-8 py-3 font-semibold transition-all duration-300 ${
                                        index === 0
                                            ? 'bg-white text-[#143674] hover:bg-gray-50'
                                            : 'border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#143674]'
                                    } rounded-full`}
                                    onClick={() => handleCTAAction(button.action)}
                                >
                                    {button.action === 'download' && <Download className="mr-2 h-5 w-5" />}
                                    {button.action === 'enquire' && <Mail className="mr-2 h-5 w-5" />}
                                    {button.action === 'apply' && <ExternalLink className="mr-2 h-5 w-5" />}
                                    {button.text}
                                </Button>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}