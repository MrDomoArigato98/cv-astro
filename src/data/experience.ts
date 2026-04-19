export interface ExperienceItem {
  title: string;
  company: string;
  level?: string;
  period: string;
  location: string;
  bullets: string[];
}

const experience: ExperienceItem[] = [
  {
    title: "Cloud Support Engineer II",
    company: "Amazon Web Services",
    level: "L5",
    period: "June 2023 – Nov 2024",
    location: "Dublin, Ireland",
    bullets: [
      "Built and maintained Python automation scripts and internal tools using the AWS SDK which helped resolve over 200 customer workflows.",
      "Gained further experience with the AWS CDK, AWS SDK, and AWS CI/CD.",
      "Authored knowledge base articles, conducted global training sessions, and mentored engineers — contributing to five additional Lambda SMEs and over 8,000 article views.",
      "Collaborated with AWS service teams to resolve critical customer incidents and influence service improvements.",
      "Resolved complex infrastructure and orchestration challenges by optimizing Serverless Workflows and systematically troubleshooting integrations with AWS Lambda, API Gateway, Step Functions, SNS, SQS, Cloud9, Connect, Mainframe Modernization, and both managed and self-managed Kafka.",
    ],
  },
  {
    title: "Cloud Support Engineer I",
    company: "Amazon Web Services",
    level: "L4",
    period: "May 2021 – June 2023",
    location: "Dublin, Ireland",
    bullets: [
      "Received AWS 'Most Valuable Player Award' out of 60+ engineers for outstanding technical contributions, productivity, and mentoring contributions that elevated team standards.",
      "Expanded expertise in AWS architectures and services, handling more complex customer cases involving event-driven architectures and microservices.",
      "Accredited as Lambda Subject Matter Expert (SME), supporting advanced use cases, optimizations, and troubleshooting for AWS Lambda functions.",
    ],
  },
  {
    title: "Cloud Support Associate",
    company: "Amazon Web Services",
    level: "L4",
    period: "July 2020 – May 2021",
    location: "Dublin, Ireland",
    bullets: [
      "Developed foundational expertise in AWS services, with a focus on Serverless — AWS Lambda, API Gateway, and Step Functions.",
      "Advanced to Engineer within 10 months, exceeding standard promotion timeline through demonstrated technical depth and ownership.",
    ],
  },
];

export default experience;
