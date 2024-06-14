import React from "react";

const ContactText = ({icon:Icon, number,myheading,address,email}) => {
  return (
    <div className="flex flex-col md:ml-[200px] md:flex-row items-center  ">
      <div className="order-2 md:order-1 md:w-[400px] text-center md:text-right">
        <h1 className="text-base">{myheading}</h1>
        <h2 className="text-[15px]">{address }</h2>
        <h3>{number}</h3>
        <h2 className="text-xs hover:cursor-pointer hover:text-slate-400">{email}</h2>
    
      </div>
      <div className="  order-1 md:order-2 mt-4 md:mt-0 border-t md:border-t-0 md:border-l border-gray-500 h-[45px] w-full mx-4 md:mx-4 flex items-center justify-center md:justify-start  ">
        <Icon className="md:ml-4  " />
      </div>
    </div>
  );
};

export default ContactText;
