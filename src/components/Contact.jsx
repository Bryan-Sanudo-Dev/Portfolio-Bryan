import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="mx-auto flex h-full max-w-screen-lg flex-col justify-center p-4">
        <div className="pb-8">
          <p className="inline border-b-4 border-gray-500 text-4xl font-bold">
            Contac
          </p>
          <p className="py-6">Submit the from below to get in touch with me</p>
        </div>

        <div className="flex items-center justify-center">
          <form
            action="https://getform.io/f/e4fdebc1-c980-4a1e-8ec3-5bb90f1c10e9"
            className="flex w-full flex-col md:w-1/2"
            method="POST"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="rounded-md border-2 bg-transparent p-2 text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 rounded-md border-2 bg-transparent p-2 text-white focus:outline-none"
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Enter your message"
              className="rounded-md border-2 bg-transparent p-2 text-white focus:outline-none"
            ></textarea>

            <button className="my-8 mx-auto flex items-center rounded-md bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 text-white  duration-300 hover:scale-110">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
