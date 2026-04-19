export interface Profile {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  website: string;
  summary: string;
}

const profile: Profile = {
  name: "Dominik Dobrowolski",
  title: "Technical & Solutions Engineer",
  location: "Dublin, Ireland",
  email: "domdob98@proton.me",
  phone: "+353 085 134 6920",
  linkedin: "https://linkedin.com/in/dominik-dobrowolski",
  website: "https://dodobro.cv",
  summary:
    "Technical & Solutions Engineer with over 4 years of experience with hands-on coding, debugging, and building in production cloud environments in AWS. Now leveraging strong Python and JavaScript skills to build full-stack web applications. AWS Certified Developer, Solution Architect and Lambda SME bringing a unique combination of cloud infrastructure knowledge and hands-on coding experience. Eager to apply proven problem-solving, adaptability, and fast learning to an engineering team.",
};

export default profile;
