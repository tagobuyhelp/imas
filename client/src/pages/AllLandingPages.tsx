import React from "react";

/**
 * 1. Status Type (Strict Union)
 */
type PageStatus = "new" | "live" | "dev";

/**
 * 2. Page Type
 */
type Page = {
    title: string;
    desc: string;
    link: string;
    status: PageStatus;
};

/**
 * 3. Data Source (Can move to API later)
 */
const pages: Page[] = [
    {
        title: 'PGDM in AI & Data Science',
        desc: 'New compact template design for AI & Data Science.',
        link: '/pgdm-ai-data-science',
        status: 'new'
    },
    {
        title: 'PGDM in Fintech (New Design)',
        desc: 'New compact template design for Fintech.',
        link: '/pgdm-fintech-new',
        status: 'new'
    },
    {
        title: "PGDM Plus",
        desc: "Advanced PGDM program with industry-focused curriculum.",
        link: "/pgdm-plus",
        status: "live",
    },
    {
        title: "PGDM Fintech",
        desc: "Specialized program in Financial Technology & digital finance.",
        link: "/pgdm-fintech",
        status: "live",
    },
    {
        title: "Best PGDM MBA College in Kolkata",
        desc: "Explore top-ranked PGDM MBA programs in Kolkata.",
        link: "/best-pgdm-mba-college-in-kolkata",
        status: "new",
    },
    {
        title: "PGDM Working Executive Programs",
        desc: "Designed for professionals to upskill while working.",
        link: "/pgdm-working-executive-programs",
        status: "live",
    },
    {
        title: "Best PGDM BA College in Kolkata",
        desc: "Top Business Analytics PGDM programs overview.",
        link: "/best-pgdm-ba-college-in-kolkata",
        status: "new",
    },
    {
    title: "MBA Global Program",
    desc: "Explore top-ranked PGDM MBA programs in Kolkata.",
    link: "/mba-global-program",
    status: "new",
  },
  {
    title: "PGDM AI & Data Science",
    desc: "Build a High-Paying Career in AI, Data Science & Future Technologies.",
    link: "/pgdm-ai-data-science",
    status: "new",
  },
];

/**
 * 4. Status Order Mapping (Fully Typed)
 */
const statusOrder: Record<PageStatus, number> = {
    new: 1,
    live: 2,
    dev: 3,
};

/**
 * 5. Status Badge Component
 */
const StatusBadge: React.FC<{ status: PageStatus }> = ({ status }) => {
    if (status === "new") {
        return (
            <span className="text-xs font-semibold px-2 py-1 rounded-full bg-green-100 text-green-700 animate-pulse">
                New
            </span>
        );
    }

    if (status === "dev") {
        return (
            <span className="text-xs font-semibold px-2 py-1 rounded-full bg-yellow-100 text-yellow-700">
                Under Development
            </span>
        );
    }

    return null;
};

/**
 * 6. Main Component
 */
export const AllLandingPages: React.FC = () => {
    // Type-safe sorting
    const sortedPages = [...pages].sort(
        (a, b) => statusOrder[a.status] - statusOrder[b.status]
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white px-6 py-16">

            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-14">
                <h1 className="text-4xl font-bold text-gray-900">
                    All Landing Pages
                </h1>
                <p className="mt-3 text-lg text-gray-600">
                    All Landing Pages for IMAS Business School.
                </p>
            </div>

            {/* Cards Grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {sortedPages.map((page, index) => (
                    <div
                        key={index}
                        className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:-translate-y-1 flex flex-col justify-between"
                    >
                        {/* Title + Badge */}
                        <div className="flex items-start justify-between gap-3">
                            <h2 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition">
                                {page.title}
                            </h2>

                            <StatusBadge status={page.status} />
                        </div>

                        {/* Description */}
                        <p className="mt-3 text-gray-600 text-sm">
                            {page.desc}
                        </p>

                        {/* CTA */}
                        <a
                            href={page.status === "dev" ? "#" : page.link}
                            className={`mt-6 inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium transition ${page.status === "dev"
                                    ? "bg-gray-300 text-gray-600 cursor-not-allowed pointer-events-none"
                                    : "bg-blue-600 text-white hover:bg-blue-700"
                                }`}
                        >
                            {page.status === "dev" ? "Coming Soon" : "View Program →"}
                        </a>
                    </div>
                ))}
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-16">
                <p className="text-gray-600 mb-4">
                    Not sure which program suits you?
                </p>
                <button className="px-6 py-3 bg-teal-500 text-white rounded-xl font-medium hover:bg-teal-600 transition shadow-md">
                    Get Free Counseling
                </button>
            </div>
        </div>
    );
};