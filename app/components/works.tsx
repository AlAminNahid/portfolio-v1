import workOne from "@/public/projects/one.png";
import workTwo from "@/public/projects/two.png";
import Image from "next/image";
import sendIcon from "@/public/assets/send-icon.png";
import rightArrow from "@/public/assets/right-arrow-bold.png";

export default function Works() {
  const projects = [
    {
      title: "Clinic Management System",
      type: "Full-Stack Web App",
      tech: "HTML, CSS, JavaScript, PHP, MySQL",
      image: workOne,
      github: "https://github.com/AlAminNahid/Clinic_Management_System.git",
    },
    {
      title: "Mess Management System",
      type: "Full-Stack Web App",
      tech: "Tailwind-CSS, ReactJS, NextJS, NestJS, PostgreSQL",
      image: workTwo,
      github: "https://github.com/AlAminNahid/Mess_Management_System.git",
    },
  ];

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
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-70 object-contain bg-white"
                />

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-white rounded-md p-3 flex items-center justify-between shadow-md transition-all duration-300 group-hover:bottom-6">
                  <div>
                    <h2 className="font-semibold text-sm">{project.title}</h2>
                    <p className="text-xs text-gray-600">{project.type}</p>
                    <p className="text-xs text-gray-600">{project.tech}</p>
                  </div>

                  <div className="border rounded-full w-8 h-8 flex items-center justify-center shadow-[2px_2px_#000] group-hover:bg-lime-300 transition">
                    <Image src={sendIcon} alt="SendIcon" className="w-4" />
                  </div>
                </div>
              </div>
            </a>
          ))}
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
