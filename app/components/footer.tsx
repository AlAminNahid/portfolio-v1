import Image from "next/image";
import logo from "@/public/assets/logo.png";
import mailIcon from "@/public/assets/mail_icon.png";

export default function Footer() {
  return (
    <>
      <div className="mt-20">
        <div className="text-center">
          <Image src={logo} alt="logo" className="w-36 mx-auto mb-2" />

          <div className="w-max flex items-center gap-2 mx-auto">
            <Image src={mailIcon} alt="mailIcon" className="w-6" />
            robin.nahid123@gmail.com
          </div>
        </div>

        <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
          <p>Al Amin Hossain Nahid</p>
          <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
            <li>
              <a href="https://github.com/AlAminNahid" target="_blank">
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/al-amin-hossain-nahid-876858193/"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://leetcode.com/u/al_aminnahid11/" target="_blank">
                LeetCode
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
