import workOne from "@/public/projects/one.png";
import workTwo from "@/public/projects/two.png";
import Image from "next/image";
import sendIcon from "@/public/assets/send-icon.png";
import rightArrow from "@/public/assets/right-arrow-bold.png";

export default function Works() {
  return (
    <>
      <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
        <h4 className="text-center mb-2 text-lg font-ovo">My portfolio</h4>
        <h2 className="text-center text-5xl font-ovo">My latest work</h2>

        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
          Welcome to my portfolio! Explore a collection of projects showcasing
          my expertise in Full-Stack web & Mobile Development
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-10">
          <div className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer">
            <Image
              src={workOne}
              alt="Project"
              className="w-full h-70 object-contain bg-white"
            />

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-white rounded-md p-3 flex items-center justify-between shadow-md transition-all duration-300 group-hover:bottom-6">
              <div>
                <h2 className="font-semibold text-sm">
                  Clinic Management System
                </h2>
                <p className="text-xs text-gray-600">Full-Stack Web App</p>
                <p className="text-xs text-gray-600">
                  HTML, CSS, JavaScript, PHP, MySQL
                </p>
              </div>

              <div className="border rounded-full w-8 h-8 flex items-center justify-center shadow-[2px_2px_#000] group-hover:bg-lime-300 transition">
                <Image src={sendIcon} alt="SendIcon" className="w-4" />
              </div>
            </div>
          </div>

          <div className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer">
            <Image
              src={workTwo}
              alt="Project"
              className="w-full h-70 object-contain bg-white"
            />

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-white rounded-md p-3 flex items-center justify-between shadow-md transition-all duration-300 group-hover:bottom-6">
              <div>
                <h2 className="font-semibold text-sm">
                  Mess Management System
                </h2>
                <p className="text-xs text-gray-600">Full-Stack Web App</p>
                <p className="text-xs text-gray-600">
                  Tailwind-CSS, ReactJS, NextJS, NestJS, PostgreSQL
                </p>
              </div>

              <div className="border rounded-full w-8 h-8 flex items-center justify-center shadow-[2px_2px_#000] group-hover:bg-lime-300 transition">
                <Image src={sendIcon} alt="SendIcon" className="w-4" />
              </div>
            </div>
          </div>
        </div>
        <a
          href=""
          className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500"
        >
          Show more <Image src={rightArrow} alt="rightArrow" className="w-4" />
        </a>
      </div>
    </>
  );
}
