import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <hr />
      <footer className="py-10 ">
        <div className=" max-w-screen-2xl   container mx-auto px-4 md:px-20 text-center space-y-2  ">
          <h4>&copy; Santu Bhaiiii {new Date().getFullYear()}</h4>
          <div className="flex justify-center gap-1 ">
            <a
              target="_blank"
              href="www.facebook.com"
              className="h-[30px] w-[30px] border-[1px] hover:border-gray-500 hover:scale-95 duration-300 rounded-full flex items-center justify-center"
            >
              <TiSocialFacebook />
            </a>

            <a
              href=""
              className="h-[30px] w-[30px] border-[1px] hover:border-gray-500 hover:scale-95 duration-300  rounded-full flex items-center justify-center"
            >
              {" "}
              <FaInstagram />
            </a>
            <a
              href=""
              className="h-[30px] w-[30px] border-[1px] hover:border-gray-500 hover:scale-95 duration-300 rounded-full flex items-center justify-center"
            >
              {" "}
              <CiYoutube />
            </a>
            <a
              href=""
              className="h-[30px] w-[30px] border-[1px] hover:border-gray-500 hover:scale-95 duration-300 rounded-full flex items-center justify-center"
            >
              {" "}
              <FaLinkedinIn />
            </a>
            <a
              href=""
              className="h-[30px] w-[30px] border-[1px] hover:border-gray-500 hover:scale-95 duration-300 rounded-full flex items-center justify-center"
            >
              <MdEmail />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
