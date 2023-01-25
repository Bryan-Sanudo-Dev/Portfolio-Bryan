import React from "react";
import arrayDestruct from "@/assets/Portfolio/arrayDestruct.jpg";
import installNode from "@/assets/Portfolio/installNode.jpg";
import navbar from "@/assets/Portfolio/navbar.jpg";
import reactParallax from "@/assets/Portfolio/reactParallax.jpg";
import reactSmooth from "@/assets/Portfolio/reactSmooth.jpg";
import reactWeather from "@/assets/Portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      demo: "https://linkedin.com",
      code: "https://linkedin.com",
    },
    {
      id: 2,
      src: installNode,
      demo: "https://linkedin.com",
      code: "https://linkedin.com",
    },
    {
      id: 3,
      src: navbar,
      demo: "https://linkedin.com",
      code: "https://linkedin.com",
    },
    {
      id: 4,
      src: reactParallax,
      demo: "https://linkedin.com",
      code: "https://linkedin.com",
    },
    {
      id: 5,
      src: reactSmooth,
      demo: "https://linkedin.com",
      code: "https://linkedin.com",
    },
    {
      id: 6,
      src: reactWeather,
      demo: "https://linkedin.com",
      code: "https://linkedin.com",
    },
  ];

  return (
    <div
      name="portfolio"
      className="w-full bg-gradient-to-b from-black to-gray-800 text-white md:h-screen"
    >
      <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center p-4">
        <div className="pb-8">
          <p className="inline border-b-4 border-gray-500 text-4xl font-bold">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work rigth here</p>
        </div>

        <div className="grid gap-8 px-12 sm:grid-cols-2 sm:px-0 md:grid-cols-3">
          {portfolios.map(({ id, src, code, demo }) => (
            <div key={id} className="rounded-lg shadow-md shadow-gray-600">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-between">
                <a
                  className=" duration-200 hover:scale-105"
                  href={demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="m-4 w-1/2 px-5 py-3 ">Demo</button>
                </a>
                <a
                  className="duration-200 hover:scale-105"
                  href={code}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="m-4 w-1/2 px-5 py-3 ">Code</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
