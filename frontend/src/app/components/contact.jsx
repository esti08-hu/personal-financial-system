import { Button } from "@/components/ui/button";
import React from "react";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact container border-2 flex flex-col items-center justify-center mt-10  gap-4 ">
        <div className="">
          <h1>Let's Connect here</h1>
        </div>
        <div className="">
          <h2>Get In Touch</h2>
          <p>
            So, how do you create an organization that is nimble, flexible and
            takes a fresh view of team struct
          </p>
        </div>
        <div className="flex"> 
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-gray-700">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-gray-700">
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-gray-700">
              Your Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <Button className="bg-[#00ABCD] hover:bg-blue-700">Submit</Button>
        </form>
        <div className="">Open Time</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
