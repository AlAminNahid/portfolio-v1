import Image from "next/image";
import profileImage from "@/public/assets/profileIMG_rounded.png";
import handIcon from "@/public/assets/hand-icon.png";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";

export default function Header() {
  return (
    <>
      <div className="mx-auto flex min-h-screen w-11/12 max-w-3xl flex-col items-center justify-center gap-4 pt-28 pb-12 text-center sm:pt-24">
        <div>
          <Image
            src={profileImage}
            alt="Profile-Image"
            className="rounded-full w-32"
          />
        </div>

        <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo">
          Hi! I'm Al Amin Hossain Nahid
          <Image src={handIcon} alt="Hand-Icon" className="w-6" />
        </h3>

        <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-ovo">
          Full-Stack Web & Mobile Developer
        </h1>

        <p className="max-w-2xl mx-auto font-ovo">
          Passionate about creating seamless web and mobile experiences from
          front-end design to back-end systems.
        </p>

        <div className="flex items-center justify-center gap-6 py-4">
          <a
            href="https://www.linkedin.com/in/al-amin-hossain-nahid-876858193/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Al Amin Hossain Nahid on LinkedIn"
            className="rounded-full shadow-lg bg-white/70 shadow-gray-400 p-4 text-gray-950 cursor-pointer hover:scale-110 hover:text-blue-600 transition duration-300 dark:bg-gray-900 dark:text-gray-100 dark:shadow-gray-700 dark:hover:text-blue-400"
          >
            <FaLinkedinIn size={20} />
          </a>

          <a
            href="https://github.com/AlAminNahid"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Al Amin Hossain Nahid on GitHub"
            className="rounded-full shadow-lg bg-white/70 shadow-gray-400 p-4 text-gray-950 cursor-pointer hover:scale-110 hover:text-black transition duration-300 dark:bg-gray-900 dark:text-gray-100 dark:shadow-gray-700 dark:hover:text-white"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://codeforces.com/profile/AluBoss11"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Al Amin Hossain Nahid on Codeforces"
            className="rounded-full shadow-lg bg-white/70 shadow-gray-400 p-4 text-gray-950 cursor-pointer hover:scale-110 hover:text-black transition duration-300 dark:bg-gray-900 dark:text-gray-100 dark:shadow-gray-700 dark:hover:text-white"
          >
            <SiCodeforces size={20} />
          </a>
        </div>
      </div>
    </>
  );
}
