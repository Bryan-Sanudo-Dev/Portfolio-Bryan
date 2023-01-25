import React from "react";
import HeroImage from "@/assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className=" h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div className="mx-auto flex h-full max-w-screen-lg flex-col items-center justify-center px-4 md:flex-row">
        <div className="flex h-full flex-col justify-center">
          <h2 className="text-4xl font-bold text-white sm:text-7xl">
            I'm a Full Stack Developer
          </h2>
          <p className="max-w-md py-4 text-gray-500">
            expeceince building and desginin software. Currently, I love to work
            on web application using technologies like React, Tailwind, Next JS
            and GrapQl.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group my-2 flex w-fit cursor-pointer items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-white "
            >
              portfolio
              <span className="duration-300 group-hover:rotate-90">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt=""
            className="mx-auto w-2/3 rounded-2xl md:w-full "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
