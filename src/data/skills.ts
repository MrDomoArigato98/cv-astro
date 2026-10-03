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
    category: "Cloud",
    items: ["AWS", "Google Cloud (GCP)", "Microsoft Azure"],
  },
  {
    category: "Infrastructure as Code",
    items: ["Terraform", "OpenTofu", "AWS CDK", "CloudFormation", "AWS SAM"],
  },
  {
    category: "CI/CD & Platforms",
    items: ["GitHub Actions", "Jenkins", "Docker", "Apache Kafka"],
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
