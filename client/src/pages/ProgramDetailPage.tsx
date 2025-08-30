import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';
import {
    GraduationCap, Clock, Users, Award, ArrowRight, Star,
    Building2, CheckCircle, Globe, Calendar, MapPin,
    DollarSign, Briefcase, BookOpen, Target, Users2,
    Download, Mail, ExternalLink
} from 'lucide-react';
import { getProgramBySlug, getAllProgramSlugs } from '../lib/programsData';

export function ProgramDetailPage() {
    const { slug } = useParams<{ slug: string }>();
    const program = getProgramBySlug(slug || '');

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
                window.open('/admissions', '_blank');
                break;
            case 'enquire':
                window.open('/contact', '_blank');
                break;
            case 'download':
                // Handle brochure download
                console.log('Download brochure for:', program.name);
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
                {/* Hero Section with Dynamic Image */}
                <section className="relative bg-gradient-to-br from-primary-dark via-primary-medium to-primary-teal text-white py-20 overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src={program.heroImage.desktop}
                            alt={program.heroImage.alt}
                            className="w-full h-full object-cover opacity-20"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/80 via-primary-medium/60 to-primary-teal/80"></div>
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
                                {program.category.toUpperCase()} PROGRAM
                            </Badge>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6">
                                {program.name}
                            </h1>
                            <p className="text-xl md:text-2xl mb-8 opacity-90">
                                {program.description}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                {program.cta.buttons.map((button, index) => (
                                    <Button
                                        key={index}
                                        size="lg"
                                        className={`text-lg px-8 py-3 ${index === 0
                                                ? 'bg-white text-primary-dark hover:bg-gray-100'
                                                : 'border-white text-white hover:bg-white hover:text-primary-dark'
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

                {/* Program Highlights */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-primary-medium/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Clock className="h-8 w-8 text-primary-medium" />
                                </div>
                                <h3 className="font-semibold text-primary-dark mb-2">DURATION</h3>
                                <p className="text-2xl font-bold text-primary-dark">{program.duration}</p>
                                <p className="text-sm text-muted-foreground">{program.format} Program</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-primary-medium/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <MapPin className="h-8 w-8 text-primary-medium" />
                                </div>
                                <h3 className="font-semibold text-primary-dark mb-2">LOCATION</h3>
                                <p className="text-2xl font-bold text-primary-dark">{program.location}</p>
                                <p className="text-sm text-muted-foreground">Salt Lake Sector V</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-primary-medium/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Calendar className="h-8 w-8 text-primary-medium" />
                                </div>
                                <h3 className="font-semibold text-primary-dark mb-2">COMMENCEMENT</h3>
                                <p className="text-2xl font-bold text-primary-dark">{program.commencement}</p>
                                <p className="text-sm text-muted-foreground">Next Batch</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-primary-medium/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <DollarSign className="h-8 w-8 text-primary-medium" />
                                </div>
                                <h3 className="font-semibold text-primary-dark mb-2">HIGHEST PACKAGE</h3>
                                <p className="text-2xl font-bold text-primary-dark">{program.placement.highestCTC}</p>
                                <p className="text-sm text-muted-foreground">{program.placement.placementRate} Placement</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Navigation Tabs */}
                <section className="py-8 bg-gray-50 border-b">
                    <div className="container mx-auto px-4">
                        <Tabs defaultValue="overview" className="w-full">
                            <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-5">
                                <TabsTrigger value="overview">Overview</TabsTrigger>
                                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                                <TabsTrigger value="careers">Careers</TabsTrigger>
                                <TabsTrigger value="eligibility">Eligibility</TabsTrigger>
                                <TabsTrigger value="placement">Placement</TabsTrigger>
                            </TabsList>
                        </Tabs>
                    </div>
                </section>

                {/* Tab Content */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <Tabs defaultValue="overview">

                            {/* Overview Tab */}
                            <TabsContent value="overview" className="mt-0">
                                <div className="max-w-4xl mx-auto">
                                    <h2 className="text-3xl font-bold text-primary-dark mb-8">Program Overview</h2>
                                    <div className="prose prose-lg max-w-none">
                                        <p className="text-lg text-muted-foreground mb-6">
                                            {program.overview}
                                        </p>

                                        <Card className="border-primary-medium/20 mb-8">
                                            <CardHeader>
                                                <CardTitle className="text-primary-dark">Why Choose {program.name} at IMAS?</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <div>
                                                        <h4 className="font-semibold text-primary-dark mb-4">Core Highlights</h4>
                                                        <ul className="space-y-3">
                                                            {program.highlights.map((highlight, index) => (
                                                                <li key={index} className="flex items-start gap-2">
                                                                    <CheckCircle className="h-4 w-4 text-primary-medium mt-0.5" />
                                                                    <span>{highlight}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-primary-dark mb-4">What You'll Learn</h4>
                                                        <ul className="space-y-3">
                                                            {program.whatYouLearn.map((item, index) => (
                                                                <li key={index} className="flex items-start gap-2">
                                                                    <BookOpen className="h-4 w-4 text-primary-medium mt-0.5" />
                                                                    <span>{item}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                            </TabsContent>

                            {/* Curriculum Tab */}
                            <TabsContent value="curriculum" className="mt-0">
                                <div className="max-w-4xl mx-auto">
                                    <h2 className="text-3xl font-bold text-primary-dark mb-8">Curriculum Structure</h2>
                                    {program.curriculum && (
                                        <div className="space-y-6">
                                            {program.curriculum.phases.map((phase, index) => (
                                                <Card key={index} className="border-primary-medium/20">
                                                    <CardHeader>
                                                        <div className="flex items-center gap-4">
                                                            <div className="w-12 h-12 bg-primary-medium/10 rounded-lg flex items-center justify-center">
                                                                <span className="font-bold text-primary-medium">{index + 1}</span>
                                                            </div>
                                                            <div>
                                                                <CardTitle className="text-primary-dark">{phase.phase}</CardTitle>
                                                                <CardDescription>{phase.title} • {phase.duration}</CardDescription>
                                                            </div>
                                                        </div>
                                                    </CardHeader>
                                                    <CardContent>
                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                            {phase.topics.map((topic, topicIndex) => (
                                                                <div key={topicIndex} className="flex items-center gap-2">
                                                                    <div className="w-2 h-2 bg-primary-medium rounded-full"></div>
                                                                    <span className="text-sm">{topic}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </TabsContent>

                            {/* Careers Tab */}
                            <TabsContent value="careers" className="mt-0">
                                <div className="max-w-4xl mx-auto">
                                    <h2 className="text-3xl font-bold text-primary-dark mb-8">Career Opportunities</h2>
                                    <Card className="border-primary-medium/20 mb-8">
                                        <CardHeader>
                                            <CardTitle className="text-primary-dark">Career Paths After {program.name}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {program.careerOpportunities.map((career, index) => (
                                                    <div key={index} className="flex items-center gap-2">
                                                        <Target className="h-4 w-4 text-primary-medium" />
                                                        <span>{career}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>

                            {/* Eligibility Tab */}
                            <TabsContent value="eligibility" className="mt-0">
                                <div className="max-w-4xl mx-auto">
                                    <h2 className="text-3xl font-bold text-primary-dark mb-8">Eligibility Criteria</h2>
                                    <Card className="border-primary-medium/20">
                                        <CardHeader>
                                            <CardTitle className="text-primary-dark">Requirements for {program.name}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="space-y-4">
                                                <div className="flex items-start gap-2">
                                                    <GraduationCap className="h-4 w-4 text-primary-medium mt-0.5" />
                                                    <div>
                                                        <h4 className="font-semibold">Education</h4>
                                                        <p>{program.eligibility.education}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-2">
                                                    <BookOpen className="h-4 w-4 text-primary-medium mt-0.5" />
                                                    <div>
                                                        <h4 className="font-semibold">Entrance Exams</h4>
                                                        <p>{program.eligibility.exams}</p>
                                                    </div>
                                                </div>
                                                {program.eligibility.experience && (
                                                    <div className="flex items-start gap-2">
                                                        <Briefcase className="h-4 w-4 text-primary-medium mt-0.5" />
                                                        <div>
                                                            <h4 className="font-semibold">Work Experience</h4>
                                                            <p>{program.eligibility.experience}</p>
                                                        </div>
                                                    </div>
                                                )}
                                                {program.eligibility.additional && (
                                                    <div className="flex items-start gap-2">
                                                        <CheckCircle className="h-4 w-4 text-primary-medium mt-0.5" />
                                                        <div>
                                                            <h4 className="font-semibold">Additional Requirements</h4>
                                                            <p>{program.eligibility.additional}</p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>

                            {/* Placement Tab */}
                            <TabsContent value="placement" className="mt-0">
                                <div className="max-w-4xl mx-auto">
                                    <h2 className="text-3xl font-bold text-primary-dark mb-8">Placement Highlights</h2>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                        <Card className="border-primary-medium/20 text-center">
                                            <CardContent className="pt-6">
                                                <div className="w-16 h-16 bg-primary-medium/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                                    <DollarSign className="h-8 w-8 text-primary-medium" />
                                                </div>
                                                <h3 className="text-2xl font-bold text-primary-dark mb-2">Highest CTC</h3>
                                                <p className="text-3xl font-bold text-primary-medium">{program.placement.highestCTC}</p>
                                            </CardContent>
                                        </Card>
                                        <Card className="border-primary-medium/20 text-center">
                                            <CardContent className="pt-6">
                                                <div className="w-16 h-16 bg-primary-medium/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                                    <Target className="h-8 w-8 text-primary-medium" />
                                                </div>
                                                <h3 className="text-2xl font-bold text-primary-dark mb-2">Average CTC</h3>
                                                <p className="text-3xl font-bold text-primary-medium">{program.placement.averageCTC}</p>
                                            </CardContent>
                                        </Card>
                                        <Card className="border-primary-medium/20 text-center">
                                            <CardContent className="pt-6">
                                                <div className="w-16 h-16 bg-primary-medium/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                                    <Users2 className="h-8 w-8 text-primary-medium" />
                                                </div>
                                                <h3 className="text-2xl font-bold text-primary-dark mb-2">Placement Rate</h3>
                                                <p className="text-3xl font-bold text-primary-medium">{program.placement.placementRate}</p>
                                            </CardContent>
                                        </Card>
                                    </div>

                                    {/* Top Recruiters with Dynamic Logos */}
                                    <Card className="border-primary-medium/20 mb-8">
                                        <CardHeader>
                                            <CardTitle className="text-primary-dark">Our Top Recruiters</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                                                {program.placement.topRecruiters.map((recruiter, index) => (
                                                    <div key={index} className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                                        <img
                                                            src={recruiter.logo}
                                                            alt={recruiter.alt}
                                                            className="h-12 w-auto object-contain mb-2"
                                                            onError={(e) => {
                                                                // Fallback to a placeholder if image fails to load
                                                                e.currentTarget.src = '/uploads/logos/IMAS_LOGO_PNG.png';
                                                            }}
                                                        />
                                                        <span className="text-xs text-center text-muted-foreground font-medium">
                                                            {recruiter.name}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>

                        </Tabs>
                    </div>
                </section>

                {/* Dynamic CTA Section */}
                <section className="py-16 bg-primary-dark text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-6">{program.cta.title}</h2>
                        <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                            {program.cta.description}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            {program.cta.buttons.map((button, index) => (
                                <Button
                                    key={index}
                                    size="lg"
                                    className={`text-lg px-8 py-3 ${index === 0
                                            ? 'bg-white text-primary-dark hover:bg-gray-100'
                                            : 'border-white text-white hover:bg-white hover:text-primary-dark'
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
                </section>
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
