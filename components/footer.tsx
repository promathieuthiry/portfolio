import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
export default function Footer() {
  return (
    <footer className="w-full px-4 m-4 mx-auto border-gray-700 rounded-lg shadow dark:border-t dark:bg-gray-900 ">
      <div className="w-full p-4 mx-auto md:py-8 max-w-[70rem]">
        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="self-center mb-4 sm:mb-0">
            <span className="text-2xl font-semibold whitespace-nowrap">🧑‍💻</span>
            <span className="text-2xl font-semibold bg-gradient-to-r from-[#676394] to-[#946263] dark:from-[#c0b9f8] dark:to-[#c1adae] text-transparent bg-clip-text">
              {" "}
              Mathieu Thiry
            </span>
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
              Front-End Developer
            </span>
          </p>
          <ul className="flex items-center gap-4 text-lg font-medium text-gray-500 dark:text-gray-400">
            <a
              href="https://www.linkedin.com/in/mathieu-thiry/"
              target="_blank"
              className="p-3 transition bg-white rounded-full cursor-pointer borderBlack dark:bg-white/10 hover:brightness-150"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://github.com/promathieuthiry"
              target="_blank"
              className="p-3 transition bg-white rounded-full borderBlack dark:bg-white/10 hover:brightness-150"
            >
              <AiFillGithub />
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
}
