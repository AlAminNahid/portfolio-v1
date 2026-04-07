import mobileIcon from "@/public/assets/mobile-icon.png";
import webIcon from "@/public/assets/web-icon.png";
import rightArrow from "@/public/assets/right-arrow.png";
import Image from "next/image";

export default function Services() {
  return (
    <>
      <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
        <h4 className="text-center mb-2 text-lg font-ovo">What I offer</h4>
        <h2 className="text-center text-5xl font-ovo">My services</h2>

        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
          I build scalable and user-friendly applications by combining modern
          front-end technologies with powerful back-end systems, delivering
          complete web and mobile solutions.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-2xl mx-auto">
          <li className="card">
            <Image src={webIcon} alt="WebIcon" className="w-7 mt-3" />
            <h3 className="my-4 font-semibold text-gray-700">
              Full-Stack Web Development
            </h3>
            <p className="text-gray-600 text-sm">
              Building complete web applications using modern frontend and
              backend technologies with databases and APIs...
            </p>
            <a href="#work" className="flex items-center gap-2 text-sm mt-5">
              Read more <Image src={rightArrow} alt="" className="w-4" />
            </a>
          </li>
          <li className="card">
            <Image src={mobileIcon} alt="MobileIcon" className="w-7 mt-3" />
            <h3 className="my-4 font-semibold text-gray-700">
              Android App Development
            </h3>
            <p className="text-gray-600 text-sm">
              Developing Android applications using Kotlin and modern
              development tools to create efficient and user-friendly mobile
              experiences...
            </p>
            <a href="#work" className="flex items-center gap-2 text-sm mt-5">
              Read more <Image src={rightArrow} alt="" className="w-4" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
