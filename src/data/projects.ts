export interface ProjectItem {
  title: string;
  description: string;
  tech: string[];
  url?: string;
  repo?: string;
}

// Add your projects here. Each item will render as a card in the Projects section.
const projects: ProjectItem[] = [
  // Example — remove or replace with your real projects:
  // {
  //   title: "My Project",
  //   description: "A short description of what it does and why it's interesting.",
  //   tech: ["Python", "AWS Lambda", "DynamoDB"],
  //   url: "https://example.com",
  //   repo: "https://github.com/yourusername/my-project",
  // },
];

export default projects;
