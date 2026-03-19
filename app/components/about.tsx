import Image from "next/image";
import profileImage from "@/public/assets/profileIMG.jpg";
import codeIcon from "@/public/assets/code-icon.png";
import terminalIcon from "@/public/assets/terminl-black.png";
import eduIcon from "@/public/assets/edu-icon.png";

export default function About() {
  return (
    <>
      <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
        <h4 className="text-center mb-2 text-lg font-ovo">Introduction</h4>
        <h2 className="text-center text-5xl font-ovo">About me</h2>

        <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
          <div className="w-64 sm:w-80 rounded-3xl max-w-none">
            <Image
              src={profileImage}
              alt="Profile-IMG"
              className="w-full rounded-3xl"
            />
          </div>
          <div className="flex-1">
            <p className="mb-10 max-w-2xl font-ovo">
              I’m a computer science student and early-career full-stack
              developer who learns best by building projects. I enjoy creating
              complete web applications by combining front-end technologies with
              back-end services and databases. Through academic and personal
              projects, I’m developing a strong foundation in software
              development and modern web technologies.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-2xl">
              <li className="card">
                <Image src={codeIcon} alt="CodeIcon" className="w-7 mt-3" />
                <h3 className="my-4 font-semibold text-gray-700">Tech Stack</h3>
                <p className="text-gray-600 text-sm">
                  C++, HTML, CSS, Tailwind, JavaScript, TypeScript, ReactJS,
                  NextJS, NestJS, Kotlin
                </p>
              </li>
              <li className="card">
                <Image src={terminalIcon} alt="CodeIcon" className="w-7 mt-3" />
                <h3 className="my-4 font-semibold text-gray-700">
                  Development Tools
                </h3>
                <p className="text-gray-600 text-sm">
                  MySQL, PostgreSQL, MongoDB, VS-Code, Firebase, Android Studio,
                  Git, Postman, Docker
                </p>
              </li>
              <li className="card">
                <Image src={eduIcon} alt="EduIcon" className="w-7 mt-3" />
                <h3 className="my-4 font-semibold text-gray-700">Education</h3>
                <p className="text-gray-600 text-sm">
                  B.Tech in Computer Science & Engineering
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
