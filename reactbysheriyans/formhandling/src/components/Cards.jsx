import React from 'react'
import Card from './card'


function Cards ({users,handleRemove})  {
  return (
    <div className='p-4 w-full  max-h-96 overflow-auto flex justify-center gap-4 flex-wrap '>
        {users.map((item,index)=>{
         return  <Card handleRemove={handleRemove} id={index} key={index} user = {item}/>
        })}
        

    </div>
  )
}

export default Cards