import React from "react";
import chutiyaImage from "../assets/chutiyaimage.jpeg";

const Blogs = () => {
  return (
    <div
      name="Blogs"
      className=" max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 mt-28 flex md:flex-col items-center justify-center"
    >
      <div className=" md:py-28">
        <div className="text-center space-y-2 mb-10">
          <h1 className="font-bold text-2xl font-serif">OUR NEWS</h1>
          <p className="italic font-normal text-[15px] text-[#555]">
            We share our best ideas in our blogs
          </p>
          <div className="border-b w-[55px] md:w-[55px] h-[1px] border-[#e41919] mx-auto"></div>
        </div>
        <div className="news grid grid-cols-2 md:grid-cols-5 gap-5">
          {[...Array(5)].map((_, idx) => (
            <div
              key={idx}
              className="relative h-[200px] w-[200px] shadow-2xl rounded-md hover:scale-110 duration-300 hover:cursor-pointer text-center"
            >
              <h1>topic</h1>
              <img src={chutiyaImage} alt="" className="mt-5" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out rounded-md">
                <p className="px-4">SEE MORE</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
