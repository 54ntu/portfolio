import React, { useState } from 'react'
import axios from 'axios'


const AdminHomepage = () => {
  const [introduction,setIntroduction] = useState('')
  const [degree, setDegree] = useState("");
  const [completedDate, setCompletedDate] = useState("");
  const [institution, setInstitution] = useState("");
  const [skills, setSkills] = useState("");
  const [awardsTitle, setAwardsTitle] = useState("");
  const [address, setAddress] = useState("");
  const [awardReceivedOn, setAwardReceivedOn] = useState("");


  const submitAboutData=async(e)=>{
    e.preventDefault();
   try {
     const response = await axios.post(
       "http://localhost:8000/api/v1/admin/addAbout",
       {
         introduction: introduction,
         degree_name: degree,
         completed_date: completedDate,
         institution_name: institution,
         address: address,
         skill_name: skills,
         awards_title: awardsTitle,
         awards_received_on:awardReceivedOn
       },
       {
        withCredentials:true
       }
     
     );
     console.log(response)
   } catch (error) {
    console.log('error while adding the datas',error);
    
   }


  }

  return (
    <>
      <h2 className="flex items-center justify-center mt-4 bg-orange-200 p-3 text-xl ">
        About page data
      </h2>
      <div className="bg-slate-300 p-10 h-[700px] w-[500px] mx-auto my-20 ">
        <form onSubmit={submitAboutData} className="flex flex-col gap-2">
          <label htmlFor="introduction">Introduction</label>
          <input
            type="text"
            id="introduction"
            name="introduction"
            className="p-1 rounded-sm outline-none"
            onChange={(e) => setIntroduction(e.target.value)}
          />
          <label htmlFor="degree_name">Degree title</label>
          <input
            type="text"
            id="degree_name"
            name="degree_name"
            className="p-1 rounded-sm outline-none"
            onChange={(e) => setDegree(e.target.value)}
          />
          <label htmlFor="completed_date">completion date</label>
          <input
            type="text"
            id="completed_date"
            name="completed_date"
            className="p-1 rounded-sm outline-none"
            onChange={(e) => setCompletedDate(e.target.value)}
          />
          <label htmlFor="institution_name">Institution name</label>
          <input
            type="text"
            id="institution_name"
            name="institution_name"
            className="p-1 rounded-sm outline-none"
            onChange={(e) => setInstitution(e.target.value)}
          />
          <label htmlFor="address">Adress</label>
          <input
            type="text"
            id="address"
            name="address"
            className="p-1 rounded-sm outline-none"
            onChange={(e) => setAddress(e.target.value)}
          />
          <label htmlFor="skille_name">Skills</label>
          <input
            type="text"
            id="skille_name"
            name="skille_name"
            className="p-1 rounded-sm outline-none"
            onChange={(e) => setSkills(e.target.value)}
          />
          <label htmlFor="awards_title">Awards</label>
          <input
            type="text"
            id="awards_title"
            name="awards_title"
            className="p-1 rounded-sm outline-none"
            onChange={(e) => setAwardsTitle(e.target.value)}
          />
          <label htmlFor="awards_received_on">Awarded date</label>
          <input
            type="text"
            id="awards_received_on"
            name="awards_received_on"
            className="p-1 rounded-sm outline-none"
            onChange={(e) => setAwardReceivedOn(e.target.value)}
          />
          <button className="bg-green-700 mt-6 p-2 text-white rounded-md text-xl">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default AdminHomepage