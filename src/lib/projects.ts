export interface ProjectData {
  slug: string;
  title: string;
  subtitle: string;
  accentColor: string;
  tags: string[];
  description: string;
  year: number | string;
}

export const projects: ProjectData[] = [
  {
    slug: "etherea",
    title: "Étheréa",
    subtitle: "LUXURY PERFUME EXPERIENCE",
    tags: ["3D", "WebGL", "GSAP"],
    accentColor: "#c9a84c",
    description: "A luxury perfume digital experience crafted with immersive 3D environments. This platform guides users through an interactive journey of scent discovery.",
    year: "2023",
  },
  {
    slug: "noctis-cafe",
    title: "Noctis Café",
    subtitle: "PREMIUM CAFÉ EXPERIENCE",
    tags: ["Parallax", "2D", "Framer Motion"],
    accentColor: "#8B4513",
    description: "A premium café website featuring smooth parallax scrolling and subtle 2D animations. The design captures the warm, inviting atmosphere of a late-night coffee shop.",
    year: "2023",
  },
  {
    slug: "veltrix-ai",
    title: "Veltrix AI",
    subtitle: "FUTURISTIC AI PLATFORM",
    tags: ["WebGL", "Three.js", "UI Design"],
    accentColor: "#3b82f6",
    description: "A cutting-edge platform interface for a futuristic AI company. It incorporates real-time WebGL visualizations and a sleek, modern UI design.",
    year: "2024",
  },
  {
    slug: "obsidian-threads",
    title: "Obsidian Threads",
    subtitle: "LUXURY FASHION EXPERIENCE",
    tags: ["Editorial", "Motion", "3D"],
    accentColor: "#c0c0c0",
    description: "An editorial-style luxury fashion experience driven by elegant motion and 3D product showcases. The site acts as a digital lookbook for high-end garments.",
    year: "2024",
  },
  {
    slug: "aurelion-capital",
    title: "Aurelion Capital",
    subtitle: "PREMIUM FINANCE PLATFORM",
    tags: ["Dashboard", "Glassmorphism", "Charts"],
    accentColor: "#10b981",
    description: "A premium finance dashboard featuring glassmorphism aesthetics and interactive charts. It provides users with a sophisticated yet intuitive data analysis platform.",
    year: "2024",
  },
];
