"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.275 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I graduated with a degree in{" "}
        <span className="font-medium">Finance</span>. After working couple of
        years as a financial analyst , I decided to pursue my passion for
        programming. I enrolled in the wild code school's bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>. I{" "}
        thrive on the excitement of crafting innovative features and finding
        ingenious solutions to challenges. I possess a solid 3-year track record
        in development, with a particular focus on{" "}
        <span className="font-medium">
          React, Next.js, Typescript, and Tailwindcss
        </span>
        . I am also familiar with Node, SQL and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a front-end
        engineer.
      </p>
    </motion.section>
  );
}
