"use client";

import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import { useTheme } from "@/context/theme-context";
import { experiencesData } from "@/lib/data";
import React from "react";
import clsx from "clsx";

function Experiences() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40 max-w-[53rem]"
    >
      <SectionHeading>My experience</SectionHeading>
      {experiencesData.map((experience, index) => (
        <React.Fragment key={index}>
          <div className="relative py-6 pl-8 sm:pl-32 group">
            <div
              className={clsx(
                "mb-1 text-2xl font-mediu font-caveat sm:mb-0",
                theme === "light" ? "text-indigo-500" : "text-indigo-400"
              )}
            >
              {experience.company}
            </div>
            <div
              className={clsx(
                "flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px  sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content  after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5",
                theme === "light"
                  ? "after:border-slate-50 before:bg-slate-300"
                  : "after:border-slate-900 before:bg-slate-600"
              )}
            >
              <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                {experience.date}
              </time>
              <div className="text-xl font-bold ">{experience.title}</div>
            </div>
            <p
              dangerouslySetInnerHTML={{ __html: experience.description }}
              className={theme === "light" ? "text-slate-500" : "#F9FAFBE6"}
            />
          </div>
        </React.Fragment>
      ))}
    </section>
  );
}

export default Experiences;
