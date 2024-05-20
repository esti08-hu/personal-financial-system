import Image from "next/image";
import React from "react";

const SignupForm = () => {
  return (
    <div className="signupformcontainer h-full flex justify-center items-center bg-[#E5E5E5]">
      <div className="container max-w-fit h-auto flex justify-center items-center gap-16 border-2 pt-10 pb-10 bg-white">
        <div className="">
          <div className="">
            <a href="/">
            <img src="/moneymaster.png" className="mb-14" />
            </a>
            <h1 className="text-2xl font-black text-[#22577A] mb-6">Sign In</h1>
            <p className="w-5/6 mb-10 text-[#6C7278]">
              Fill your information below or register using your social account.
            </p>
          </div>

          <form class="w-full">
            <div class="mb-16">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Enter email"
                required
              />
            </div>
            <div class="mb-5">
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                class="shadow-sm bg-gray-50 border mb-14 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
              />
            </div>
            <button
              type="submit"
              class="text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 bg-[#00ABCD] font-bold border-2 h-12 w-full rounded-full"
            >
              Sign In
            </button>
            <a href={"/signup"}>
              <label className="text-center cursor-pointer">
                <p className="mt-10">
                  Don’t have an account?{" "}
                  <span className="text-[#00ABCD] font-black underline">
                    Sign Up
                  </span>
                </p>
              </label>
            </a>
          </form>
        </div>
        <div className="welcome-img">
          <img src={"images/login.png"} />
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
