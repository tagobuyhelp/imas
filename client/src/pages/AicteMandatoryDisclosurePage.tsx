import React from 'react';
import { Button } from '../components/ui/button';
import { IMAS_TAILWIND_CLASSES } from '../lib/constants';
import { applyNow, downloadBrochure } from '../lib/utils';
import { Download, ArrowRight, FileText } from 'lucide-react';

export function AicteMandatoryDisclosurePage() {
    const pdfHref = '/uploads/aicte_mandatory_disclosure.pdf';

    const items = [
        'Name & Address of the Institution',
        'AICTE Approval Letters (Current & Previous Years)',
        'Affiliation & Accreditation Status',
        'Programs Offered & Intake Capacity',
        'Faculty Details with Qualifications & Experience',
        'Infrastructure & Facilities',
        'Admission Process & Eligibility',
        'Fee Structure & Refund Policy',
        'Placement & Training Details',
        'Governance & Committees',
        'Audited Financial Statements'
    ];

    return (
        <div className="min-h-screen bg-white">
            <section className="py-16 bg-gradient-to-br from-gray-900 via-[#143674] to-[#2e7bb3] text-white relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/uploads/campus_photos/imas_campus.png"
                        alt="IMAS Campus"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gray-900/70"></div>
                </div>
                <div className="relative max-w-[1260px] mx-auto px-4 text-center">
                    <div className="inline-block bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg border border-white/20">
                        AICTE Mandatory Disclosure – IMAS Kolkata
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">AICTE Mandatory Disclosure</h1>
                    <p className="text-base md:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        International Management & Analytics School (IMAS), Kolkata strictly adheres to the norms, standards, and regulations prescribed by the All India Council for Technical Education (AICTE). In compliance with AICTE guidelines, IMAS makes all statutory and institutional information available in the public domain for transparency and accountability.
                    </p>
                    <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                        <a href={pdfHref} target="_blank" rel="noopener noreferrer">
                            <Button className={` text-white inline-flex items-center gap-2`}>
                                <Download className="h-4 w-4" />
                                Download Mandatory Disclosure PDF
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="max-w-[960px] mx-auto px-4">
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-10">
                        <div className="flex items-center gap-3 mb-6">
                            <FileText className={`${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} h-6 w-6`} />
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900">Information Available in Mandatory Disclosure</h2>
                        </div>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-8">
                            {items.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-gray-700">
                                    <span className={`${IMAS_TAILWIND_CLASSES.TEXT_TEAL} mt-1`}>•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-gray-800 font-medium">
                            IMAS Kolkata is committed to maintaining high academic standards and ensuring full compliance with all statutory bodies.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-3">
                            <Button className={`${IMAS_TAILWIND_CLASSES.GRADIENT_PRIMARY} text-white`} onClick={applyNow}>
                                Apply Now
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                            <Button variant="outline" className="border-[#143674] text-[#143674] hover:bg-[#143674] hover:text-white" onClick={downloadBrochure}>
                                Download Brochure
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

