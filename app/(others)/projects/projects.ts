import { ProjectTypes } from "@/types";

const projects: ProjectTypes[] = [
  {
    name: "AIPrepWizard",
    mainType: "next",
    previewLink: "https://aiprepwizard.app",
    previewImg: "/projects/prepwizard.png",
    category: ["NextJs", "Typescript", "AI"],
    description: "AI-powered study assistant.",
  },
  {
    name: "Solvre",
    mainType: "next",
    previewLink: "https://solvre.pro",
    previewImg: "/projects/solvre.png",
    category: ["NextJs", "Typescript", "Blockchain"],
    description:
      "Task Delegation platform for businesses and individuals to delegate tasks to others easily and efficiently.",
  },
  {
    name: "RionNigeria",
    previewLink: "https://rionnigeria.org/",
    mainType: "next",
    previewImg: "/projects/rionnigeria.png",
    category: ["NextJs", "Typescript"],
    description: "RION Nigeria website redesign",
  },
  {
    name: "EFileBoi",
    mainType: "next",
    previewLink: "https://efileboi.com",
    previewImg: "/projects/efileboi.png",
    category: ["NextJs", "Typescript"],
    description: "Beneficial Ownership Information E-Filing System.",
  },
  {
    name: "Web3afrika",
    mainType: "react",
    previewLink: "https://web3afrika.com",
    previewImg: "/projects/web3afrika.png",
    category: ["React", "Contribution"],
    description: "Official Website for Web3Afrika.",
    githubUrl: "https://github.com/Web3Afrika/web3afrika.com-v2",
  },
];

export default projects;
