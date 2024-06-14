import React from "react";
import python from "../assets/python.jpeg";
import mongodb from "../assets/mongodb.png";
const Portfolio = () => {
  const cardItems = [
    {
      id: 1,
      image: python,
      name: "python programming",
    },
    {
      id: 2,
      image: mongodb,
      name: "mongodb databases",
    },
  ];
  return (
    <div className=" max-w-screen-2xl container mx-auto px-4 md:px-20 my-10 space-y-2 ">
      <h1 className="text-2xl font-bold">Portfolio</h1>
      <h2 className="underline font-semibold">Featured Projects</h2>
      <br />

      <div className=" flex flex-wrap md:grid md:grid-cols-4 md:space-x-20 gap-10 justify-center">
        {cardItems.map((item) => {
          return (
            <div key={item.id}  className="bg-white w-[300px] h-[300px] md:w-[300px] md:h-[300px] text-center hover:scale-110 duration-300 rounded-3xl space-y-2 shadow-2xl hover:cursor-pointer flex flex-col items-center justify-center">
              <img
                src={item.image}
                alt=""
                className="w-[100px] h-[100px] rounded-full "
              />
              <div className="text-[#55e6a5] font-semibold  text-xl">
                {item.name}
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <div className="space-x-3">
                <button className="bg-[#55e6a5] hover:bg-violet-600 hover:text-white px-3 py-2 rounded-md ">
                  Project Link
                </button>
                <button className="bg-[#55e6a5] hover:bg-violet-600 hover:text-white px-3 py-2 rounded-md ">
                  Source code
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
