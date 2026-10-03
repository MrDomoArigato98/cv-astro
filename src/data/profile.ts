export interface Profile {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  website: string;
  // Short facts shown as a strip under the title — the 7-second-scan version.
  highlights: string[];
  // One entry per paragraph — Hero.astro renders each as its own <p>,
  // since a single string would have its blank-line breaks collapsed by HTML.
  // Personality is the default voice (Layout.astro's pre-paint script);
  // summaryCorpo is the alternate register shown when Nav.astro's
  // Corpo/Personality toggle is switched to "corpo".
  summary: string[];
  summaryCorpo: string[];
  contactCta: string;
  contactCtaCorpo: string;
}

const profile: Profile = {
  name: "Dominik Dobrowolski",
  title: "Cloud & Infrastructure Engineer",
  location: "Prague, Czech Republic",
  email: "dominik.dobrowolski@dodobro.cv",
  phone: "+353 085 134 6920",
  linkedin: "https://linkedin.com/in/dominik-dobrowolski",
  website: "https://dodobro.cv",
  highlights: [
    "Now: IT Infrastructure Engineer @ Collibra",
    "ex-AWS (L5)",
    "AWS Lambda SME",
    "5 yrs cloud & infra",
  ],
  summary: [
    "Born too early to be on-prem, born just in time to not be able to own my computer. Passionate tech geek like every other person has on their CV. Notable achievements include using em-dashes before AI made them suspicious.",
    "I enjoy fixing things, solving problems, and \"Building\" — getting things done.",
    "With modern AI I quite enjoy the freedom of learning and creating projects that for one person before would be an insurmountable hill. I'm fond of using it, as another tool in my toolbelt. However I won't sit here and tell you that I'm happy I can't buy a modern Graphics Card, RAM or storage for my computer.",
    "I had my share of corporate experience: AWS Dublin (4.5 years there). Now I'm working in Collibra in Prague as an IT Infrastructure Engineer, which gives me more freedom and options to touch more technologies, and build projects for the organisation.",
    "I have great attention to detail and quality (I've been recurringly told), fantastic interpersonal skills (turns out patience transfers between fields better than most tech skills do — thanks, Tesco), and I'll happily take on something I have no idea how to do yet — figuring it out as I go is half the fun.",
  ],
  summaryCorpo: [
    "Cloud & Infrastructure Engineer with 5 years of hands-on experience across cloud support, infrastructure engineering, and internal tooling — starting at AWS in Dublin, now at Collibra in Prague.",
    "Cloud experience spans AWS, GCP, and Azure, with Infrastructure as Code via CDK, CloudFormation, Terraform, and OpenTofu, and CI/CD through GitHub Actions and Jenkins. Also comfortable in application code (Python, TypeScript, React) and in identity and device management (Okta, Workspace ONE, Jira Administration).",
    "At Collibra, this comes together as an IT Infrastructure Engineer — owning infrastructure as code across a multi-cloud environment, plus the identity, access, and device management that keeps the org running.",
  ],
  contactCta: "If you want someone to talk to here's my contacts :-)",
  contactCtaCorpo: "Interested in working together? Reach out via email or connect on LinkedIn.",
};

export default profile;
