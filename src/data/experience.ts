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
      "Authored knowledge base articles, ran global training sessions, and mentored engineers — contributing to five additional Lambda SMEs and over 8,000 article views.",
      "Went deep on API Gateway, Lambda, Step Functions, and a dozen other services I used daily — I don't think anyone actually knows AWS's full service list. If something broke on an Enterprise or Business support case, I was probably the one on the call figuring out why. If us-east-1 itself went down? That one's above my pay grade.",
    ],
  },
];

export default experience;
