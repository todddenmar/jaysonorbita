import { TLinkItem, TSkillItem } from "@/types";

export const navLinkItems: TLinkItem[] = [
  {
    id: "about",
    name: "About",
    path: "#banner",
  },
  {
    id: "certifications",
    name: "Certifications",
    path: "#certifications",
  },
  {
    id: "skills",
    name: "Skills",
    path: "#skills",
  },
  {
    id: "work-samples",
    name: "Work Samples",
    path: "#work-samples",
  },
  {
    id: "clients",
    name: "Clients",
    path: "#clients",
  },
  {
    id: "contact",
    name: "Contact",
    path: "#contact",
  },
];

export const skillsItems: TSkillItem[] = [
  {
    id: "skill-1",
    imageURL: "/images/skills/digital-marketing.png",
    name: "Digital Marketing Strategy",
    description:
      "Social Media Strategy, Content Calendar Development, Campaign Planning & Execution, Brand Positioning, Market Research",
  },
  {
    id: "skill-2",
    imageURL: "/images/skills/bullhorn.png",
    name: "Social Media Management",
    description:
      " Facebook, Instagram, TikTok, Facebook Ads Manager, Meta Business Suite, Community Management, Live Updates",
  },
  {
    id: "skill-3",
    imageURL: "/images/skills/content-creation.png",
    name: "Content Creation",
    description:
      "Web Content Writing, Copywriting, Video Scripting, Basic Graphic Design (Canva), Photography Direction",
  },
  {
    id: "skill-4",
    imageURL: "/images/skills/movie.png",
    name: "Visual Production",
    description:
      "Official Video Marketing Ads, Area Photoshoots, Promotional Marketing Shoots (with Models)",
  },
  {
    id: "skill-5",
    imageURL: "/images/skills/analysis.png",
    name: "Analytics & Reporting",
    description:
      "Performance Tracking, Data Analysis, Social Media Insights, Report Generation",
  },
  {
    id: "skill-6",
    imageURL: "/images/skills/abilities.png",
    name: "General Skills",
    description:
      "Client Communication, Project Coordination, Time Management, Adaptability, Problem-Solving",
  },
];

export const sampleWorks = [
  {
    id: "sample-work-1",
    name: "Divers Posters",
    imageURL: "/images/work-samples/divers.png",
  },
  {
    id: "sample-work-2",
    name: "Mayanara Salon And Spa",
    imageURL: "/images/work-samples/mayanara.png",
  },
  {
    id: "sample-work-3",
    name: "Mayanara Salon And Spa 2",
    imageURL: "/images/work-samples/mayanara-2.png",
  },
  {
    id: "sample-work-4",
    name: "Women's Wellness Center",
    imageURL: "/images/work-samples/womens-wellness-center.png",
  },
];
