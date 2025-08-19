import React from 'react'

const Card = ({data,handleClick,index}) => {

    const {image,artist,name,added} = data;
  return (
    <div className='w-60 rounded-md bg-zinc-100 p-4 flex gap-4 pb-10 relative mt-10'>
        <div className='w-20 h-20 rounded-md bg-orange-600 overflow-hidden'>
            <img className='w-full h-full object-cover' src={image} alt="" /> 
        </div>
         <div className=''>
                <h3 className='text-xl leading-none font-semibold'>{name}</h3>
                <h6 className='text-sm '> by {artist}</h6>
           
        </div>
        <button onClick={()=>handleClick(index)} className={`px-4 py-3 ${added === false ? "bg-orange-600" : "bg-teal-600"} absolute bottom-0  whitespace-nowrap left-1/2 -translate-x-[50%] translate-y-[50%] text-white text-xs rounded-full`}>{added === false ? "Add to favourites" :  "Added"}</button>
    </div>
  )
}

export default Card