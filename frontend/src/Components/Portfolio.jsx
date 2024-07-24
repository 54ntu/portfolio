import React, { useEffect, useState } from "react";
import python from "../assets/python.jpeg";
import mongodb from "../assets/mongodb.png";
import axios from 'axios'
const Portfolio = () => {
  const [portfoliodata,setPortfoliodata] = useState([])

  const getPortFolioData = async()=>{
    const response = await axios.get(
      "http://localhost:8000/api/v1/frontend/getPortfolios"
    );

    console.log(response.data.data)
    setPortfoliodata(response.data.data);
  }

  useEffect(()=>{
    getPortFolioData()
  },[])


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
    <div
      name="Portfolio"
      className="  max-w-screen-2xl container mx-auto px-4 md:px-20 my-10  "
    >
      <h1 className="text-2xl font-bold py-5">Portfolio</h1>
      <h2 className="underline font-semibold mb-10">Featured Projects</h2>
      <br />

      <div className=" flex flex-wrap md:grid md:grid-cols-4 md:space-x-5 gap-10 justify-center">
        {portfoliodata.map((portfolio) => {
          return (
            <div
              key={portfolio._id}
              className="bg-white w-[300px] h-[300px] md:w-[300px] md:h-[300px] text-center hover:scale-110 duration-300 rounded-3xl space-y-2 shadow-2xl hover:cursor-pointer flex flex-col items-center justify-center"
            >
              <img
                src={portfolio.project_img.url}
                alt=""
                className="w-[100px] h-[100px] rounded-full "
              />
              <div className="text-[#55e6a5] font-semibold  text-xl">
                {portfolio.project_name}
              </div>
              <p>{portfolio.description}</p>
              <div className="space-x-3">
                <a
                  className="button bg-[#55e6a5] hover:bg-violet-600 hover:text-white px-3 py-2 rounded-md "
                  href={portfolio.project_link}
                  target="_blank"
                >
                  Project Link
                </a>
                <a
                  className="button bg-[#55e6a5] hover:bg-violet-600 hover:text-white px-3 py-2 rounded-md "
                  href={portfolio.source_code_link}
                  target="_blank"
                >
                  Source Code
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <br />
      <br />
      <hr />
    </div>
  );
};

export default Portfolio;
