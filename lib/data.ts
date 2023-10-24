import tiktokClone from "@/public/TikTok_clone.jpeg";
import youtubeClone from "@/public/Youtube_clone.jpeg";
import CSSIcon from "@/public/logo/css-3.svg";
import GitIcon from "@/public/logo/git.svg";
import HTMLIcon from "@/public/logo/html-5.svg";
import JSIcon from "@/public/logo/javascript.svg";
import NextIcon from "@/public/logo/next-dot-js.svg";
import NodeIcon from "@/public/logo/node-js.svg";
import ReactIcon from "@/public/logo/react.svg";
import ReduxIcon from "@/public/logo/redux.svg";
import TailwindcssIcon from "@/public/logo/tailwindcss-icon.svg";
import TSIcon from "@/public/logo/typescript.svg";
import strapiPlugin from "@/public/strapi_plugin.jpeg";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Front-End Engineer",
    company: "api.video",
    description:
      "I was actively engaged in the development of new features using a tech stack that included React, Next.js, tailwindcss, and typescript. I also took charge of constructing reusable components, which were then exhibited on storybook. Moreover, I adeptly translated designs and wireframes into high-quality code using figma. Collaborating on the company's dashboard project, I integrated industry best practices to ensure responsiveness, performance, maintainability, and scalability.",
    icon: React.createElement(CgWorkAlt),
    date: "2021-2023",
  },
  {
    title: "Front-End Developer",
    company: "Hubup",
    description:
      "I actively contributed to the migration of the complete front-end codebase. This involved constructing essential features such as chat functionality, file storage, forms, and a contact list. Additionally, I ensured seamless integration by adapting the code to align with both the desktop application, built with <b>React</b>, and the mobile application, developed with React Native.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2021",
  },
  {
    title: "Bootcamp web development",
    company: "Wild code school",
    description:
      "I participated in a rigorous 5-month program dedicated to honing web development skills. During this period, I attained expertise in JavaScript, React, Node.js, and SQL. Additionally, I had the privilege of receiving valuable mentorship and constructive feedback from seasoned instructors and industry professionals.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2019",
  },
] as const;

export const projectsData = [
  {
    title: "Strapi plugin",
    description:
      "I created a Strapi plugin to easily manage your videos and integrate them in your project",
    tags: ["React", "Strapi", "plugin", "open source"],
    imageUrl: strapiPlugin,
    link: "https://market.strapi.io/plugins/@api.video-strapi-uploader-plugin",
  },
  {
    title: "TikTok clone",
    description:
      "A TikTok clone in PWA made with Next.js, TypeScript, and api.video",
    tags: ["React", "TypeScript", "Next.js", "PWA"],
    imageUrl: tiktokClone,
    link: "https://api.video/blog/tutorials/rebuilding-tiktok-with-api-video/",
  },
  {
    title: "Youtube clone",
    description:
      "A tutorial to demonstrate how to build a YouTube clone with Next.js, styled components and  api.video.",
    tags: ["React", "Next.js", "Styled Components", "JavaScript"],
    imageUrl: youtubeClone,
    link: "https://api.video/blog/use-cases/rebuilding-youtube-with-api-video-next-js/",
  },
] as const;

export const skillsData = [
  {
    name: "HTML",
    url: HTMLIcon,
  },
  {
    name: "CSS",
    url: CSSIcon,
  },
  {
    name: "JavaScript",
    url: JSIcon,
  },
  {
    name: "Typescript",
    url: TSIcon,
  },
  {
    name: "React",
    url: ReactIcon,
  },
  {
    name: "Next.js",
    url: NextIcon,
  },
  {
    name: "Node.js",
    url: NodeIcon,
  },
  {
    name: "GIT",
    url: GitIcon,
  },
  {
    name: "Tailwindcss",
    url: TailwindcssIcon,
  },
  {
    name: "Redux",
    url: ReduxIcon,
  },
] as const;
