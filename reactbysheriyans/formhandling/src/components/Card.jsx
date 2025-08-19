import React from 'react'

function card({user,handleRemove,id}) {
  return (
    <>

    <div className='w-52 h-full bg-zinc-100 rounded-lg flex flex-col items-center p-2 '>
      <div className="image w-24 h-24 rounded-full bg-zinc-300 overflow-hidden">
        <img className='w-full h-full object-cover    ' src={user.image  } alt="" />
        
      </div>
      <h1 className='mt-1text-xl font-semibold text-center leading-none'>{user.name}</h1>
      <h4 className='opacity-60 text-xs font-semibold'>{user.email}</h4>
        <p className='mt-2 text-center text-xs font-semibold leading-4 tracking-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, blanditiis ducimus. Laboriosam?</p>
        <button  onClick = {()=>{handleRemove(id)}} className=' mt-2 px-3 py-1 bg-red-600 text-xs rounded-md font-semibold text-white '>Remove It</button>
    </div>
   
   </>
  );
}

export default card