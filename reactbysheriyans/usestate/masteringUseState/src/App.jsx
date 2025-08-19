import React, { useState } from 'react'
import Card from './Card'
import { ImGift } from 'react-icons/im'

const App = () => {

  const data = [
    {name : "Ayaan", profession : "Dev",img : "https://images.unsplash.com/photo-1610088441520-4352457e7095?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",friends:false},
    {name : "Simran", profession : "Cloud Dev", img : "https://images.unsplash.com/photo-1586351012965-861624544334?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",friends:false},
    {name : "Zoya", profession : "Devops", img : "https://images.unsplash.com/photo-1604004555489-723a93d6ce74?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",friends:false}

    
  ]
  const [realData,setRealData]= useState(data);
  const handleFriendsReq = (cardIndex)=>{
    setRealData((previous)=>{
    return  previous.map((item,index)=>{
        if(index === cardIndex){
          return{...item, friends: !item.friends}
        }
        return item;
      })
    })
  }

  return (
    <>
    <div className='w-full h-screen bg-zinc-300 flex items-center justify-center gap-4'>
    {realData.map((item , index)=>(
      <Card key={index} index={index} handleClick={handleFriendsReq} values = {item}/> 
    ))}
    </div>
    </>
  )
  
}

export default App