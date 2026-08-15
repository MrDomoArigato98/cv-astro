import type { ImageMetadata } from "astro";

import awsLogo from "../assets/projects/Logos/AWS-trim.png";
import collibraLogo from "../assets/projects/Logos/COLLIBRA-trim.png";

export interface ExperienceItem {
  title: string;
  company: string;
  logo?: ImageMetadata;
  level?: string;
  period: string;
  location: string;
  bullets: string[];
}

const experience: ExperienceItem[] = [
  {
    title: "IT Infrastructure Engineer",
    company: "Collibra",
    logo: collibraLogo,
    period: "Jan 2026 – Present",
    location: "Prague, Czech Republic",
    bullets: [
      "Manage IaC with OpenTofu/Terraform, shipped through GitHub Actions and Jenkins pipelines — moving from being the one who calls out AWS's infra to being the one who owns it. We use Azure, GCP and AWS, so we're multi-cloud.",
      "Own identity and device management for the org: Okta for SSO and access, Workspace ONE for MDM across the fleet, and Jira administration for the workflows and tickets that tie it all together.",
      "More freedom here to touch a wider slice of the stack than an \"AWS Support Engineer\" role ever allowed — I'm building and maintaining internal tooling, not just explaining someone else's to them and why it doesn't work.",
    ],
  },
  {
    title: "Cloud Support Engineer",
    company: "Amazon Web Services",
    logo: awsLogo,
    level: "Associate → Engineer → L5 Engineer",
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
