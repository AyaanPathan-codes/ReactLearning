import React from 'react'
import { SiNamecheap } from 'react-icons/si'

const Card = ({values,handleClick,index}) => {
  const{name,profession,img,friends} = values;
  return (
    <div className='w-60 bg-white rounded-md overflow-hidden  '>
      <div className="w-full h-60 bg-sky-400">
        <img className="w-full h-full object-cover object-[center_top]"src={img} alt="" />
      </div>
      <div className="w-full p-3">
        
      
      <h3 className='text-3xl font-semibold'>{name}</h3>
        <h3 className='text-xs font-semibold'>{profession}</h3>
        <button onClick={()=>handleClick(index)} className={`px-3 py-2 rounded-md text-white text-xs ${friends ? "bg-green-400" : "bg-blue-500"} mt-4 font-semibold`}>{friends === true ? "Friends" : "Add friend" }</button>
      </div></div>
  )
}

export default Card 