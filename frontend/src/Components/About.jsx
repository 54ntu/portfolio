import React from "react";

const About = () => {
  return (
    <>
      <div className="max-w-screen-2xl  container mx-auto px-4 md:px-20 mb-10 space-y-2">
        <h2 className="text-3xl font-bold">About</h2>
        <p className=" text-sm text-justify ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
          necessitatibus facere labore distinctio saepe corporis aspernatur quam
          minima ab, omnis dignissimos. Eligendi, eveniet iste eius ab quia
          ipsum nobis incidunt?
        </p>
        <br></br>
        <h2 className="font-semibold  text-[#55e6a5]">Education && Training</h2>
        <ul className="space-y-4 text-base">
          <li>
            <p>
              [Bachelor of computer Application] [2019-2022] SJES College of
              Management studies, Bengaluru, India{" "}
            </p>
          </li>
          <li>
            <p>
              [+2 Science] [2016-2018] Advance Academy, Kumaripati, Lalitapur,
              Nepal
            </p>
          </li>
          <li>
            <p>[Python Django ][2024] Mindrisers Consortium</p>
          </li>
        </ul>
        <br></br>
        <h2 className="font-semibold text-[#55e6a5]">Skills && Expertise</h2>
        <ul className="space-y-1 text-base">
          <li>Programming with Python</li>
          <li>JavaScript</li>
          <li>Node Js</li>
          <li>Web development</li>
          <li>Version control Git and Github</li>
          <li>Content Writing</li>
        </ul>
        <br/>
        <h2 className="font-semibold text-[#55e6a5]">Achievements and Awards</h2>
        <ul className="space-y-1 text-base">
          <li>First in Quiz</li>
          <li>Topper at college</li>
        </ul>
        <br/>
        <hr/>
      </div>
    </>
  );
};

export default About;
