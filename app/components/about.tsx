import Image from "next/image";
import profileImage from "@/public/assets/profileIMG.jpg";
import codeIcon from "@/public/assets/code-icon.png";
import terminalIcon from "@/public/assets/terminl-black.png";
import eduIcon from "@/public/assets/edu-icon.png";

export default function About() {
  return (
    <section id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">Introduction</h4>

      <h2 className="text-center text-5xl font-ovo">About me</h2>

      {/* Centered Container */}
      <div className="max-w-6xl mx-auto my-20">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-20">
          {/* Image */}
          <div className="w-64 sm:w-80 shrink-0">
            <Image
              src={profileImage}
              alt="Profile Image"
              className="w-full rounded-3xl"
            />
          </div>

          {/* Content */}
          <div className="max-w-2xl">
            <p className="mb-10 font-ovo leading-8">
              I’m a computer science student and early-career full-stack
              developer who learns best by building projects. I enjoy creating
              complete web applications by combining front-end technologies with
              back-end services and databases. Through academic and personal
              projects, I’m developing a strong foundation in software
              development and modern web technologies.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <li className="card">
                <Image
                  src={codeIcon}
                  alt="Code Icon"
                  className="w-7 mt-3 dark:invert"
                />

                <h3 className="my-4 font-semibold text-gray-700">
                  Core Technologies
                </h3>

                <p className="text-gray-600 text-sm">
                  C++, Java, C#, Kotlin, HTML, CSS, Tailwind, JavaScript,
                  TypeScript, ReactJS, NextJS, NestJS, FastAPI, .NET
                </p>
              </li>

              <li className="card">
                <Image
                  src={terminalIcon}
                  alt="Terminal Icon"
                  className="w-7 mt-3 dark:invert"
                />

                <h3 className="my-4 font-semibold text-gray-700">
                  Tools & Platforms
                </h3>

                <p className="text-gray-600 text-sm">
                  MySQL, PostgreSQL, MongoDB, VS Code, Firebase, Android Studio,
                  TypeORM, Prisma, Git, Postman, Docker, Vercel, Render
                </p>
              </li>

              <li className="card">
                <Image
                  src={eduIcon}
                  alt="Education Icon"
                  className="w-7 mt-3 dark:invert"
                />

                <h3 className="my-4 font-semibold text-gray-700">
                  Academic Background
                </h3>

                <p className="text-gray-600 text-sm">
                  B.Tech in Computer Science & Engineering
                  <br />
                  American International University-Bangladesh
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
