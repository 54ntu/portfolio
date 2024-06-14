import React from "react";
import newImage from "../assets/newback.jpg"
import { IoMdCall } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import ContactText from "./ContactText";

const Contacts = () => {
  return (
    <div
      name="Contacts"
      className="relative bg-cover bg-center h-screen md:h-[400px]"
      style={{ backgroundImage: `url(${newImage})` }}
    >
      <div className="absolute inset-0 bg-[rgba(28,25,23,0.85)]  flex flex-col   md:flex-row  ">
        <div className="text-gray-500 flex flex-col md:flex-col items-center justify-center space-y-2 md:space-y-5  md:w-1/3 mb-3  ">
          <ContactText icon={IoMdCall} number={84656} myheading="CALL US" />
          <ContactText
            icon={FaMapMarkerAlt}
            address="Thakurbaba -06 Bardiya"
            myheading="Address"
          />
          <ContactText
            icon={MdOutlineEmail}
            email="xaudharysantey12@gmail.com"
            myheading="SAY HELLO"
          />
        </div>
        <div className="text-gray-500 md:w-2/3 flex  items-center justify-center ">
          <div className="md:w-[800px] md:h-[300px]flex items-center">
            <form
              action=""
              className=" md:w-[300px] flex flex-col md:flex-col gap-3 md:gap-10  md:ml-[100px]"
            >
              <input
                className=" bg-transparent border-b  p-3  placeholder-gray-600  text-white outline-none "
                type="text"
                placeholder="Name"
                name="Name"
              />
              <input
                className=" bg-transparent border-b placeholder-gray-600  p-3 text-white outline-none"
                type="text"
                placeholder="Email"
                name="Name"
              />

              <textarea
                className=" bg-transparent border-[1px] border-gray-500 placeholder-gray-600 p-3  text-white outline-none overflow-hidden  "
                type="text"
                placeholder="Message"
                name="Name"
              />
              <button className="w-full bg-gray-700 text-white p-2 rounded-md hover:bg-gray-500">
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
