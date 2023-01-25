import React from "react";

import html from "@/assets/html.png";
import css from "@/assets/css.png";
import github from "@/assets/github.png";
import graphql from "@/assets/graphql.png";
import javascript from "@/assets/javascript.png";
import nextjs from "@/assets/nextjs.png";
import node from "@/assets/node.png";
import reactImage from "@/assets/react.png";
import tailwind from "@/assets/tailwind.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwdin",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 7,
      src: graphql,
      title: "GraphQL",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="experience"
      className="h-screen w-full bg-gradient-to-b from-gray-800 to-black"
    >
      <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center p-4 text-white">
        <div>
          <p className="inline border-b-4 border-gray-500 p-2 text-4xl font-bold">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="grid w-full grid-cols-2 gap-8 py-8 px-12 text-center sm:grid-cols-3 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`rounded-lg py-2 shadow-md duration-500 hover:scale-105 ${style}`}
            >
              <img src={src} alt="" className="mx-auto w-20" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
