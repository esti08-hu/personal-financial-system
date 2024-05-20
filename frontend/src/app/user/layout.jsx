import React from "react";
import Navbar from "../components/user-components/navbar";
import ContactInfo from "../components/user-components/contact-info";
import Footer from "../components/footer";

const Layout = ({ children, pageTitle }) => {
  return (
    <div className="">
      <div className="">
        <Navbar />
        <div className="flex flex-col justify-center items-center h-40 font-black text-">
          <h1>{pageTitle}</h1>
          <hr className="w-3/4 border-2 my-10 rounded-lg"/>
        </div>
      </div>
      <div className="flex justify-between flex-col">
        <div className="flex container">
          <div className="w-3/5">{children}</div>
          <ContactInfo />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
