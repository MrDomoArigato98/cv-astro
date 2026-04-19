export interface SkillCategory {
  category: string;
  items: string[];
}

const skills: SkillCategory[] = [
  {
    category: "Programming & Scripting",
    items: ["Python", "TypeScript", "JavaScript", "React", "Express.js", "Node.js", "HTML", "CSS", "Git"],
  },
  {
    category: "Cloud & Infrastructure",
    items: [
      "AWS Cloud",
      "Serverless",
      "Monitoring",
      "AWS CDK",
      "CloudFormation",
      "SAM",
      "Terraform",
      "Docker",
      "Apache Kafka",
      "REST APIs",
    ],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "Amazon RDS", "DynamoDB", "MongoDB"],
  },
  {
    category: "Languages",
    items: ["English", "Polish", "Korean"],
  },
  {
    category: "Soft Skills",
    items: [
      "Mentoring",
      "Online Presentations",
      "Technical Documentation",
      "Knowledge Base Authoring",
      "Public Speech",
    ],
  },
];

export default skills;
