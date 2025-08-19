import React from 'react'

const Card = () => {

    const data =[{
        name : "Mahiya Ve", discription : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, facilis!"
    },
        {
        name : "Junoon", discription : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, facilis!"
    }

    ]
  return (
    <>
        <div className="w-full h-screen bg-zinc-200 flex justify-center flex-col items-center gap-10">
            
            {data.map((item,index)=>(
                <div key={index} className=" w-90 song px-3 py-2 bg-zinc-300 rounded">
                    <h3 className='font-semibold text-xl'>{item.name}</h3>
                <p className='text-xs mt-2'>{item.discription}</p>
                <button onClick ={()=>{alert("hey")}} className='px-4 py-2 bg-blue-500 text-xs font-semibold text-white rounded-md mt-3'>Download Now</button>
                    </div>
            ))}
                
            
          

        </div>
    </>
  )
}

export default Card