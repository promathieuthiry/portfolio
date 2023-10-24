"use client";

import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";
import profile from "@/public/photo_mathieu_thiry_cropped .jpeg";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[60rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={profile}
              alt="Mathieu Thiry cover photo"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="dark:opacity-80 h-40 w-40 rounded-full object-cover border-[0rem] border-white dark:border-[#313248] shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute text-4xl animate-wave right-2 bottom-2"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 pt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold ">
          Hey there, I'm{" "}
          <span className="bg-gradient-to-r from-[#676394] to-[#946263] dark:from-[#c0b9f8] dark:to-[#c1adae] text-transparent bg-clip-text">
            Mathieu Thiry
          </span>
          <p className="font-normal">
            My goal? Turning your Ideas into Exceptional Web and Mobile
            Experiences! 🚀
          </p>
        </span>{" "}
      </motion.h1>

      <motion.div
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="flex items-center gap-2 py-3 transition bg-gray-900 rounded-full outline-none group px-7 focus:scale-105 hover:bg-gray-950 hover:brightness-90"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="transition group-hover:translate-x-1" />
        </Link>

        <a
          className="flex items-center gap-2 py-3 transition bg-white rounded-full outline-none cursor-pointer group px-7 focus:scale-105 borderBlack dark:bg-white/10 "
          href="/CV - Mathieu THIRY.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="transition group-hover:translate-y-0.5" />
        </a>
      </motion.div>
    </section>
  );
}
