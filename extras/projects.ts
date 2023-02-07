import { ProjectTypes } from "@/types";

const projects: ProjectTypes[] = [
  {
    name: "Web3afrika",
    mainType: "react",
    previewLink: "https://web3afrika.com",
    previewImg: "/projects-preview/web3afrika.png",
    category: ["React", "OpenSource"],
    description: "Official Website for Web3Afrika.",
    githubUrl: "https://github.com/Web3Afrika/web3afrika.com-v2",
  },
  {
    name: "RionNigeria",
    previewLink: "https://rionnigeria.vercel.app/",
    mainType: "next",
    previewImg: "/projects-preview/rionnigeria.png",
    category: ["NextJs", "Typescript"],
    description: "RION Nigeria website redesign",
  },
  {
    name: "BuyMeCoffee",
    previewLink: "https://buymeacoffee.qudusayo.me/",
    mainType: "react",
    previewImg: "/projects-preview/support.png",
    category: ["React", "Blockchain"],
    description: "Blockchain buy me a coffee tipping page",
    githubUrl: "https://github.com/qudusayo/buymecoffee",
  },
  {
    name: "web3Terms",
    previewLink: "https://github.com/Olanetsoft/web3terms",
    mainType: "opensource",
    previewImg: "/projects-preview/web3terms.png",
    category: ["NodeJs", "OpenSource", "Blockchain"],
    description: "A Twitter bot explaining web3 terms to everyone!",
    githubUrl: "https://github.com/olanetsoft/web3terms",
  },
  {
    name: "devFinder",
    previewLink: "https://gh-user-sa.qudusayo.me/",
    mainType: "react",
    previewImg: "/projects-preview/devfinder.png",
    category: ["React", "Typescript"],
    description: "Github user profile summary check",
    githubUrl: "https://github.com/Qudusayo/github-user-search-app",
  },
  {
    name: "Quiz",
    previewLink: "https://general-studies-practice.vercel.app/",
    mainType: "next",
    previewImg: "/projects-preview/quiz.png",
    category: ["NextJs", "Typescript"],
    description: "Exam practice application for students",
    githubUrl: "https://github.com/Qudusayo/pq-practice-app",
  },
];

export default projects;
