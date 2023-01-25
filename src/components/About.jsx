import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="h-screen w-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center p-4">
        <div className="pb-8">
          <p className="inline border-b-4 border-gray-500 text-4xl font-bold ">
            About
          </p>
        </div>
        <p className="mt-20 text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Exercitationem, numquam totam modi asperiores natus culpa minima
          assumenda nihil neque, quasi odit omnis optio, eos rerum ratione nulla
          placeat atque ab.
        </p>
        <br />

        <p className="text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et,
          molestias cum magnam, neque omnis possimus dicta hic harum dolorem
          nemo voluptates. Quo fugiat delectus aliquid repellendus iure mollitia
          rem numquam.
        </p>
      </div>
    </div>
  );
};

export default About;
