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
    title: "Cloud Support Engineer",
    company: "Amazon Web Services",
    level: "Associate → L5",
    period: "July 2020 – Nov 2024",
    location: "Dublin, Ireland",
    bullets: [
      "Promoted from Associate to Engineer within 10 months (ahead of the standard timeline), then to Engineer II (L5) — accredited as an AWS Lambda Subject Matter Expert (SME) and received the AWS 'Most Valuable Player' award out of 60+ engineers.",
      "Built and maintained Python automation scripts and internal tools using the AWS SDK, resolving over 200 customer workflows.",
      "Authored knowledge base articles, ran global training sessions, and mentored engineers — contributing to five additional Lambda SMEs and over 8,000 article views.",
      "Troubleshot and resolved infrastructure and orchestration issues across AWS Lambda, API Gateway, Step Functions, SNS, SQS, Cloud9, Connect, Mainframe Modernization, and managed/self-managed Kafka, collaborating directly with AWS service teams on critical incidents.",
    ],
  },
];

export default experience;
