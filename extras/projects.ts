import { ProjectTypes } from "@/types";

const projects: ProjectTypes[] = [
  {
    name: "Web3afrika",
    mainType: "react",
    previewLink: "https://web3afrika.com",
    previewImg: "/projects-preview/web3afrika.png",
    category: ["React", "OpenSource"],
    description:
      "Official Website for Web3Afrika whose aim is to Onboard, Educate & Support Web3 Builders, Foster & Build Web3 Tools & Public Goods",
  },
  {
    name: "RionNigeria",
    previewLink: "https://rionnigeria.vercel.app/",
    mainType: "next",
    previewImg: "/projects-preview/rionnigeria.png",
    category: ["NextJs", "Typescript"],
    description: "A Website for an Islamic organisation",
  },
  {
    name: "BuyMeCoffee",
    previewLink: "https://buymeacoffee.qudusayo.me/",
    mainType: "react",
    previewImg: "/projects-preview/support.png",
    category: ["React", "Blockchain"],
    description:
      "A webpage which makes supporting me fun and easy on the polygon network",
  },
  {
    name: "web3Terms",
    previewLink: "https://github.com/Olanetsoft/web3terms",
    mainType: "opensource",
    previewImg: "/projects-preview/web3terms.png",
    category: ["NodeJs", "OpenSource", "Blockchain"],
    description:
      "A Twitter bot explaining and simplifying web3 terms to everyone!",
  },
  {
    name: "devFinder",
    previewLink: "https://gh-user-sa.qudusayo.me/",
    mainType: "react",
    previewImg: "/projects-preview/devfinder.png",
    category: ["React", "Typescript"],
    description:
      "A webpage that use the GitHub users API to pull profile data and display it",
  },
  {
    name: "Quiz",
    previewLink: "https://general-studies-practice.vercel.app/",
    mainType: "next",
    previewImg: "/projects-preview/quiz.png",
    category: ["NextJs", "Typescript"],
    description:
      "A random quiz practice application for the students of the University of Ibadan",
  },
];

export default projects;
