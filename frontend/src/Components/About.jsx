import React, { useState } from "react";
import axios from 'axios'
import { useEffect } from "react";

const About = () => {
  const [aboutData,setAboutData] = useState([])
  const getAboutData =async()=>{
    const response = await axios.get(
      "http://localhost:8000/api/v1/frontend/getAboutdata"
    );
    console.log(response.data.data)
    setAboutData(response.data.data)
  }

  useEffect(()=>{
    getAboutData();
  },[])

  return (
    <>
      {aboutData.map((data) => (
        <div
          name="About"
          className=" max-w-screen-2xl  container mx-auto px-4 md:px-20  space-y-2 md:mt-[40px] "
          key={data._id}
        >
          <div className="py-6">
            <h2 className="text-3xl font-bold mb-5">About</h2>
            <p className=" text-sm text-justify ">{data.introduction}</p>
            <br></br>
            <h2 className="font-semibold  text-[#55e6a5]">
              Education && Training
            </h2>
            <ul className="space-y-4 text-base">
              <li>
                <p>
                  [{data.degree_name}] [{data.completed_date}]{" "}
                  {data.institution_name}, {data.address}{" "}
                </p>
              </li>
              <li>
                <p>
                  [+2 Science] [2016-2018] Advance Academy, Kumaripati,
                  Lalitapur, Nepal
                </p>
              </li>
              <li>
                <p>[Python Django ][2024] Mindrisers Consortium</p>
              </li>
            </ul>
            <br></br>
            <h2 className="font-semibold text-[#55e6a5]">
              Skills && Expertise
            </h2>

            {data.skill_name.map((skill, index) => (
              <ul className="space-y-1 text-base" key={index}>
                <li>{skill}</li> 
              </ul>
            ))}

            <br />
            <h2 className="font-semibold text-[#55e6a5]">
              Achievements and Awards
            </h2>
            <ul className="space-y-1 text-base ">
              <li>{data.awards_title},{data.awards_received_on}</li>
            
            </ul>
          </div>
        </div>
      ))}

      <hr className="mt-10" />
    </>
  );
};

export default About;
