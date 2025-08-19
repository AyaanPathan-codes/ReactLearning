import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const UserDetail = () => {
    const {name} = useParams()
   const navigate = useNavigate()

   const goBackHandler = ( )=>{
    navigate("/user");
   }
  return (

      <div>
        <div className=" mt-10 m-auto w-1/2">
          <h1 className="text-2xl font-semibold mb-3 text-red-600">UserDetail</h1>
          <h1 className="text-3xl ">HI {name.toUpperCase()}</h1>
          <button onClick={goBackHandler} className="bg-red-500 text-white rounded-md flex justify-center items-center px-3 py-2  mb-10 mt-10">
            Go Back
          </button>
        </div>
      </div>
    
  );
};

export default UserDetail;
