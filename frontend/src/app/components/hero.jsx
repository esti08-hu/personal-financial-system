import { Button } from "@/components/ui/button";
import React from "react";

const Hero = () => {
  return (
    <div
      style={{ backgroundColor: "rgba(0, 172, 205, 0.25)" }}
      className="hero-container h-full flex items-center justify-center relative"
    >
      <div className="hero flex h-full w-4/6 justify-between items-center p-10">
        <div className="flex flex-col items-start justify-center max-w-max h-96 gap-5">
          <h1 className="text-4xl font-black text-[#22577A] mb-6 w-96">
            Plan for your future with confidence.
          </h1>
          <p className="text-2xl font-bold text-[#00ABCD] w-72">
            Create and manage budgets effortlessly.
          </p>
          <Button className="bg-[#00ABCD] font-bold border-2 h-12 w-52">
            <a href="/signup">Create account now</a>
          </Button>
        </div>
        <div className="">
          <img
            src="/images/hero-img.png"
            alt="Hero Image"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="flex items-center border bg-white rounded-full pl-4 absolute bottom-[-30px]">
        <input
          type="text"
          placeholder="Search..."
          className="w-full focus:ring-blue-500appearance-none focus:outline-none"
        />
        <button
          type="submit"
          className="ml-2 text-gray-500 p-4 bg-[#22577A] hover:text-gray-700 rounded-tr-3xl rounded-br-3xl rounded-bl-3xl"
        >
          <svg
            className="h-4 w-4 fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Hero;
