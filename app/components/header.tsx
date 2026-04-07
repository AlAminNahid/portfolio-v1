import Image from "next/image";
import profileImage from "@/public/assets/profileIMG.jpg";
import handIcon from "@/public/assets/hand-icon.png";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";

export default function Header() {
  return (
    <>
      <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
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
          >
            <div className="rounded-full shadow-lg bg-white/70 shadow-gray-400 p-4 cursor-pointer hover:scale-110 hover:text-blue-600 transition duration-300">
              <FaLinkedinIn size={20} />
            </div>
          </a>

          <a
            href="https://github.com/AlAminNahid"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="rounded-full shadow-lg bg-white/70 shadow-gray-400 p-4 cursor-pointer hover:scale-110 hover:text-black transition duration-300">
              <FaGithub size={20} />
            </div>
          </a>

          <a
            href="https://codeforces.com/profile/AluBoss11"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="rounded-full shadow-lg bg-white/70 shadow-gray-400 p-4 cursor-pointer hover:scale-110 hover:text-black transition duration-300">
              <SiCodeforces size={20} />
            </div>
          </a>

          <a
            href="https://leetcode.com/u/al_aminnahid11/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="rounded-full shadow-lg bg-white/70 shadow-gray-400 p-4 cursor-pointer hover:scale-110 hover:text-orange-500 transition duration-300">
              <SiLeetcode size={20} />
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
