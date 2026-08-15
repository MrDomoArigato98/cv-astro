import type { ImageMetadata } from "astro";

import tudLogo from "../assets/projects/Logos/TUD-trim.png";
import hanyangLogo from "../assets/projects/Logos/hanyang.svg";

export interface EducationItem {
  degree: string;
  institution: string;
  logo?: ImageMetadata;
  period: string;
  location: string;
  grade?: string;
  bullets: string[];
}

const education: EducationItem[] = [
  {
    degree: "BSc (Honours) Computer Science Infrastructure",
    institution: "Technological University Dublin, Kevin Street Campus",
    logo: tudLogo,
    period: "2020",
    location: "Dublin, Ireland",
    grade: "Second Class Honours",
    bullets: [
      "Coursework spanning full-stack development across mobile and enterprise platforms — object-oriented programming, database design, web deployment, and DevOps automation (Python, C, C#, Java, HTML, CSS, JavaScript).",
      "Networking advanced protocols, network programming, cryptography, cybersecurity, forensics, and IT infrastructure security.",
      "Coursework in OS administration, database design and management, system infrastructure architecture, and enterprise-level deployment environments, Azure.",
    ],
  },
  {
    degree: "Placement Abroad – Scholarship",
    institution: "Hanyang University",
    logo: hanyangLogo,
    period: "2018",
    location: "Seoul, South Korea",
    bullets: [
      "Awarded competitive scholarship for semester exchange at Hanyang University, Seoul, South Korea.",
      "Completed advanced coursework in computer networking, linear algebra (turns out people in Korea are pretty good at math, that was rough), and C# game development using Unity Engine.",
      "Achieved beginner-level Korean language proficiency through immersive cultural experience.",
    ],
  },
];

export default education;
