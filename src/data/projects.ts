import type { ImageMetadata } from "astro";

import houseshareToday from "../assets/projects/houseshare/today.png";
import houseshareTimetable from "../assets/projects/houseshare/timetable.png";
import houseshareBills from "../assets/projects/houseshare/bills.png";
import houseshareBalance from "../assets/projects/houseshare/balance.png";
import houseshareHistory from "../assets/projects/houseshare/history.png";
import houseshareHousemates from "../assets/projects/houseshare/housemates.png";

export interface ProjectScreenshot {
  src: ImageMetadata;
  alt: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  // Extra paragraphs revealed behind a "Read more" toggle — for projects
  // that warrant more than a one-line summary.
  moreDescription?: string[];
  tech: string[];
  url?: string;
  repo?: string;
  screenshots?: ProjectScreenshot[];
  // Shown behind an "Architecture" tab alongside Overview — the technical
  // decisions worth explaining beyond a flat tech-tag list.
  architecture?: string[];
}

// Add your projects here. Each item will render as a card in the Projects section.
const projects: ProjectItem[] = [
  {
    title: "Houseshare",
    description:
      "When it comes to living with another person in an apartment, it turned out it's easier to build a whole application for managing chores, bills, and what needs to be done - rather than telling them about it. On the bright side there's no more hard feelings given machinery is doing the talking.",
    moreDescription: [
      "This allows me to spam him with emails when he leaves the dishes over night, automatically have scheduled tasks on a timetable (recurring and once-off), and each person in the household will receive a \"Daily Digest\" of things they need to do that day (not exactly the email you want to receive at 7 in the morning, but oh well). If you're going to ask me \"wait, how does the app know the dishes are dirty?\" - it doesn't, I just click \"nudge\" when I see them or make a \"once-off\" chore for the day assigned to him.",
      "Each person also gets notified for any recurring or once-off bills that must be paid, 2 days in advance. This also gives us a nice historical view of who's pulling their weight, and allows me to nudge the other person to do the responsible thing to keep the house clean for all of us.",
    ],
    tech: [
      "React",
      "TypeScript",
      "Firebase (Firestore / Auth / Functions)",
      "OpenTofu",
      "GitHub Actions",
    ],
    architecture: [
      "Built with React, and it directly works with Firebase and Firestore. It was my first time working with Firebase so there's a lot of new concepts, but it does make things quite a bit easier not having to worry about a \"Real Back-end\" one might say. I'm stuck with Firebase now though, so I guess you win some you lose some. Convenience has a cost.",
      "I've created Cloud Functions for things like sendNudge or emailing a user to get up and get the task done. I also did add a 1h cool-down (using a Firestore transaction) so unfortunately I cannot \"spam\" a user (sad, but probably a better User Experience).",
      "I used OpenTofu for some portion of the infra (Secret Manager, Firestore TTL policies, IAM Roles, WIF etc..). I had the state file on the GCP Bucket with versioning in case I broke something. In short, OpenTofu manages GCP-level resources (IAM, TTL policies, backup schedule), while the Firebase CLI owns Security Rules, Functions, and Hosting deploys.",
      "To use the app a user needs to get invited through email, so I can invite people to my \"Household\" if I want to. Or I can remove them as well. I used Resend for all the email functionality. Technically I can simply allow certain users to have \"Admin\" permissions so they could make their own household, but am I really going to release this to the public? Sounds like a nightmare having to deal with GDPR and all the other business decisions. This was just built to solve a simple problem I have.",
      "GitHub Actions are used via Workload Identity Federation so I can just push it and deploy. (Also completely overkill, but GitHub gives free compute so why not?) This also just lets me push tests there as well to check all the functions work fine, plus the code. This includes Firestore emulator rules tests which run before every deploy to main, and every pull request gets its own Hosting preview channel (also overkill).",
      "I have a 7 day rolling PITR, plus a separate weekly full-snapshot schedule managed by OpenTofu, 60-day retention. Restoring is a manual gcloud firestore backups restore, not an in-app feature.",
    ],
    // No live/repo link on purpose — the live app runs on our real
    // household data, and the repo is private. Screenshots stand in for both.
    screenshots: [
      { src: houseshareToday, alt: "Today — the daily chore checklist" },
      { src: houseshareTimetable, alt: "Timetable — drag-and-drop chore scheduling" },
      { src: houseshareBills, alt: "Bills — recurring & one-off bills, paid-tracking" },
      { src: houseshareBalance, alt: "Balance — who's pulling their weight" },
      { src: houseshareHistory, alt: "History — completed-chore log" },
      { src: houseshareHousemates, alt: "Housemates — member management & invites" },
    ],
  },
];

export default projects;
