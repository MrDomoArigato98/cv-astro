export interface Profile {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  website: string;
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
  title: "Technical & Solutions Engineer",
  location: "Prague, Czech Republic",
  email: "dominik.dobrowolski@dodobro.cv",
  phone: "+353 085 134 6920",
  linkedin: "https://linkedin.com/in/dominik-dobrowolski",
  website: "https://dodobro.cv",
  summary: [
    "Born too early to be on-prem, born just in time to not be able to own my computer. Passionate tech geek like every other person has on their CV.",
    "I enjoy fixing things, solving problems, and \"Building\" - getting things done.",
    "With modern AI I'm quite enjoying the freedom of learning and creating projects that for one person before would be an insurmountable hill. I'm fond of using it, as another tool in my toolbelt. However I won't sit here and tell you that I'm happy I can't buy a modern Graphics Card, RAM or storage for my computer.",
    "I had my share of corporate experience: AWS Dublin (4.5 years there). Now I'm working in Collibra in Prague as an IT Infrastructure Engineer, which gives me more freedom and options to touch more technologies, and build projects for the organisation.",
    "I have great attention to detail (I've been recurringly told), fantastic interpersonal skills (turns out patience transfers between fields better than most tech skills do — thanks, Tesco), and I'm willing to tackle tasks no matter the difficulty, learning as I go.",
  ],
  summaryCorpo: [
    "Technical & Solutions Engineer with over 4 years of hands-on experience building, debugging, and operating production cloud environments at AWS, followed by cloud and infrastructure engineering work at Collibra.",
    "Comfortable across the full stack — from Python, TypeScript, and React application code to Infrastructure as Code (AWS CDK, CloudFormation, Terraform/OpenTofu) and CI/CD automation — with particular strength in serverless architectures, identity and access management, and internal tooling for enterprise support teams.",
    "Currently based in Prague, working as an IT Infrastructure Engineer at Collibra, bringing together cloud platform expertise, software development skills, and a strong operational background in enterprise support.",
  ],
  contactCta: "If you want someone to talk to here's my contacts.",
  contactCtaCorpo: "Interested in working together? Reach out via email or connect on LinkedIn.",
};

export default profile;
