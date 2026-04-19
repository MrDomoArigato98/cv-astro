export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  grade?: string;
  bullets: string[];
}

const education: EducationItem[] = [
  {
    degree: "BSc (Honours) Computer Science Infrastructure",
    institution: "Technological University Dublin, Kevin Street Campus",
    period: "2020",
    location: "Dublin, Ireland",
    grade: "Second Class Honours",
    bullets: [
      "Full-stack development across mobile and enterprise platforms with expertise in object-oriented programming, database design, web deployment, and DevOps automation (Python, C, C#, Java, HTML, CSS, JavaScript).",
      "Networking advanced protocols, network programming, cryptography, cybersecurity, forensics, and IT infrastructure security.",
      "Proficiency in OS administration, database design and management, system infrastructure architecture, and enterprise-level deployment environments, Azure.",
    ],
  },
  {
    degree: "Placement Abroad – Scholarship",
    institution: "Hanyang University",
    period: "2018",
    location: "Seoul, South Korea",
    bullets: [
      "Awarded competitive scholarship for semester exchange at Hanyang University, Seoul, South Korea.",
      "Completed advanced coursework in computer networking, linear algebra, and C# game development using Unity Engine.",
      "Achieved beginner-level Korean language proficiency through immersive cultural experience.",
    ],
  },
];

export const certifications: string[] = [
  "AWS Certified Developer – Associate",
  "AWS Certified Solutions Architect – Associate",
  "AWS Lambda Subject Matter Expert (SME)",
];

export default education;
