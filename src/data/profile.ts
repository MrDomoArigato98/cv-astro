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
  summary: string[];
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
    "Born too early to be on-prem, born just in time to not be able to own my compute. Passionate tech geek like every other person has on their CV.",
    "I enjoy fixing things, solving problems, and \"Building\" - getting things done.",
    "With modern AI I'm quite enjoying the freedom of learning and creating projects that for one person before would be an insurmountable hill. I'm fond of using it, as another tool in my toolbelt. However I won't sit here and tell you that I'm happy I can't buy a modern Graphics Card, RAM or storage for my computer.",
    "I had my share of corporate experience: AWS Dublin (4.5 years there). Now I'm working in Collibra in Prague as an IT Infrastructure Engineer, which gives me more freedom and options to touch more technologies, and build projects for the organisation.",
  ],
};

export default profile;
