export type EventItem = {
  id: string;
  title: string;
  description: string;
  category: string;
  images: string[];
  date?: string;
  featured?: boolean;
};

export const staticEvents: EventItem[] = [
  {
    id: "business-innovation-talk",
    title: "Invited Talk on Business Management and Innovation in Entrepreneurship",
    description: "IAER College & IMAS successfully hosted an Invited Talk on Business Management and Innovation in Entrepreneurship featuring Dr. Sandeep Poddar, Deputy Vice Chancellor (Research & Innovation) at Lincoln University College, Malaysia, on 1st September 2025. The session offered students valuable insights into how innovation shapes modern entrepreneurship and business success. Dr. Poddar's expertise and engaging discussion inspired participants to think creatively and apply innovative strategies in their future business endeavors.",
    category: "Academic Talk",
    date: "September 1, 2025",
    images: [
      "/uploads/events/Invited-Talk-on-Business-1.jpg",
      "/uploads/events/Invited-Talk-on-Business-2.jpg",
      "/uploads/events/Invited-Talk-on-Business-3.jpg",
      "/uploads/events/Invited-Talk-on-Business-4.jpg"
    ],
    featured: true
  },
  {
    id: "bengal-chamber-taj-centre",
    title: "IMAS Students Attend Bengal Chamber of Commerce Event at Taj Centre, Kolkata",
    description: "Our students from IMAS – International Management & Analytics School had the remarkable opportunity to attend an impactful event hosted by the Bengal Chamber of Commerce at Taj Centre, Kolkata. The session was an enriching experience filled with industry insights, expert discussions, and professional networking opportunities, offering our students valuable exposure to the corporate world. We are proud to see our students actively engage, learn, and represent IMAS with excellence and enthusiasm.",
    category: "Industry Engagement",
    images: [
      "/uploads/events/taj-centre-bengal-chamber-1.jpg",
      "/uploads/events/taj-centre-bengal-chamber-2.jpg"
    ],
    featured: true
  },
  {
    id: "coca-cola-industrial-visit",
    title: "Industrial Visit to Coca-Cola Factory",
    description: "Students from IAER College had an enriching and interactive experience during their industrial visit to the Coca-Cola Factory, where they explored the fascinating world of large-scale beverage production, quality control, and sustainable manufacturing practices. This educational visit offered our students valuable practical exposure, bridging the gap between academic learning and real-world industry operations. Beyond learning, it was a truly refreshing experience that inspired curiosity and innovation.",
    category: "Industrial Visit",
    images: [
      "/uploads/events/Coca-Cola-Factory-visit-1.jpg",
      "/uploads/events/Coca-Cola-Factory-visit-2.jpg",
      "/uploads/events/Coca-Cola-Factory-visit-3.jpg",
      "/uploads/events/Coca-Cola-Factory-visit-4.jpg",
      "/uploads/events/Coca-Cola-Factory-visit-5.jpg"
    ],
    featured: false
  },
  {
    id: "lalit-great-eastern-engagement",
    title: "Prestigious Engagement at The Lalit Great Eastern",
    description: "Students of IMAS – International Management & Analytics School had the exceptional opportunity to participate in a prestigious event organized by the Indian Chamber of Commerce (ICC) at The Lalit Great Eastern, Kolkata. It was a proud moment as our students interacted with Mr. Pradeep Kumar Rawat, Hon'ble Indian Ambassador to China, gaining invaluable insights into international relations, diplomacy, and global leadership. Such remarkable engagements broaden our students' horizons, offering them a global perspective and real-world exposure to leadership beyond borders.",
    category: "Industry Engagement",
    images: [
      "/uploads/events/lalit-great-eastern-1.jpg",
      "/uploads/events/lalit-great-eastern-2.jpg",
      "/uploads/events/lalit-great-eastern-3.jpg",
      "/uploads/events/lalit-great-eastern-4.jpg",
      "/uploads/events/lalit-great-eastern-5.jpg"
    ],
    featured: true
  },
  {
    id: "bhai-phota-army-camp",
    title: "IAER Students Celebrate Bhai Phota at Indian Army Camp",
    description: "Students of IAER College had an unforgettable experience at the Indian Army Camp, celebrating Bhai Phota with pride, respect, and gratitude. This special occasion was a wonderful moment of bonding, tradition, and learning, allowing our students to honor the brave soldiers who safeguard our nation.",
    category: "Cultural Celebration",
    images: [
      "/uploads/events/bhai-phota-army-camp-1.jpg",
      "/uploads/events/bhai-phota-army-camp-2.jpg",
      "/uploads/events/bhai-phota-army-camp-3.jpg",
      "/uploads/events/bhai-phota-army-camp-4.jpg",
      "/uploads/events/bhai-phota-army-camp-5.jpg"
    ],
    featured: false
  },
  {
    id: "diwali-celebration-iaer",
    title: "Diwali Celebration at IAER College",
    description: "IAER College celebrated Diwali with an evening full of joy, laughter, and togetherness. Our college family came together to embrace the festival of lights, creating cherished memories and celebrating the spirit of community. Here's to the sparkle of new beginnings and the warmth of shared moments. Wishing everyone a Happy Diwali!",
    category: "Cultural Celebration",
    images: [
      "/uploads/events/diwali-celebration-1.jpg",
      "/uploads/events/diwali-celebration-2.jpg",
      "/uploads/events/diwali-celebration-3.jpg",
      "/uploads/events/diwali-celebration-4.jpg"
    ],
    featured: true
  }
];