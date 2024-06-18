import React, { useEffect, useState } from "react";
import { IoLogoNodejs } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { ReactTyped } from "react-typed"; // Ensure correct import
import myimage from "../assets/test.jpeg";
import axios from "axios";

function Home() {
  const [datas, setDatas] = useState([]);
  const getHomeData = async () => {
    const response = await axios.get(
      "http://localhost:8000/api/v1/frontend/gethome"
    );

    console.log(response.data)
    setDatas(response.data);
  };

  useEffect(() => {
    getHomeData();
  }, []);

  return (
    <>
      <div
        name="Home" // Section name should match menuItems text in Navbar
        className="max-w-screen-2xl bg-white container mx-auto px-4 md:px-28 md:py-20 my-20"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 md:order-1 order-2">
            <span className="text-lg">Welcome to my website</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hi, I'm a</h1>
              <ReactTyped
                className="text-red-700 font-bold"
                strings={[
                  "Programmer",
                  "Backend Engineer",
                  "Database Engineer",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
              />
            </div>
            <br />
            {/* {
              datas.map((intro)=>(
                <h1>{intro.introduction}</h1>
              ))
            } */}
              <p className="text-xs text-justify md:text-base">

              hello i am a backend engineer
              </p>

            <br />
            {/* Social media links */}
            <div className="flex justify-between">
              <div className="space-y-2">
                <h1 className="font-bold">Connect with me:</h1>
                <ul className="flex space-x-2 text-2xl">
                  <li>
                    <FaFacebook className="hover:scale-110 cursor-pointer" />
                  </li>
                  <li>
                    <FaGithub className="hover:scale-110 cursor-pointer" />
                  </li>
                  <li>
                    <FaLinkedin className="hover:scale-110 cursor-pointer" />
                  </li>
                  <li>
                    <FaInstagramSquare className="hover:scale-110 cursor-pointer" />
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold">Currently working on:</h1>
                <div className="flex text-2xl space-x-2">
                  <IoLogoNodejs className="hover:scale-110 cursor-pointer" />
                  <SiMongodb className="hover:scale-110 cursor-pointer" />
                  <SiExpress className="hover:scale-110 cursor-pointer" />
                  <FaReact className="hover:scale-110 cursor-pointer" />
                  <FaPython className="hover:scale-110 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 ml-12 md:ml-48 md:mt-24 mt-10 order-1">
            <img
              src={myimage}
              alt="profile Image"
              className="rounded-full h-[300px] w-[300px]"
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;
