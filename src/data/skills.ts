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
      "Google Cloud (GCP)",
      "Microsoft Azure",
      "Infrastructure as Code (CDK, CloudFormation, SAM, Terraform, OpenTofu)",
      "CI/CD (GitHub Actions, Jenkins)",
      "Docker",
      "Apache Kafka",
    ],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "Amazon RDS", "DynamoDB"],
  },
  {
    category: "IT Administration & Identity",
    items: ["Workspace ONE (MDM)", "Okta (SSO / Identity Management)", "Jira Administration"],
  },
  {
    category: "Languages",
    items: ["English", "Polish", "Czech"],
  },
];

export default skills;
