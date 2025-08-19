import React, { useEffect, useState } from 'react'

const Services = () => {
   
        const[first,useFirst] = useState("this is normal data");
        const [second,useSecond] = useState("this is very large data")
      useEffect(()=>{
        console.log("Service comp is created");

        return()=>{
            console.log("Service comp is deleted");
            
        }
    },[])
  return (
    <div>
        <h1>{first}</h1>
        <button  className='px-3 py-2 bg-yellow-500'onClick={()=>useFirst("Large data")}>Change normal data</button>


        <h1>{second}</h1>
        <button className='px-3 py-2 bg-yellow-500'onClick={()=>useSecond("Normal data")}>Change large data</button>

    </div>
  )
}

export default Services