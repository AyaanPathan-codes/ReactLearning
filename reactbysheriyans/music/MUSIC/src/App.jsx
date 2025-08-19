import React, { useState } from 'react'
import Card from './Components/Card'
import Navbar from './Components/Navbar'



const App = () => {

  const data =[
    {image:"https://images.unsplash.com/photo-1682695798522-6e208131916d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,name : "Calm Air" , artist : "Ayaan", added: false },
    {image:"https://images.unsplash.com/photo-1744018195752-276f4f77cc7a?q=80&w=699&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,name : "Religious" , artist : "Simran", added: false },
    {image:"https://images.unsplash.com/photo-1682687220640-9d3b11ca30e5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,name : "Exploring" , artist : "Abrar", added: false },
    {image:"https://images.unsplash.com/photo-1734683088770-1240dd2b7fde?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,name : "Mong Kok" , artist : "Zoya", added: false },
    {image:"https://images.unsplash.com/photo-1743456117605-e673068f0fa5?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,name : "One Love" , artist : "Sara", added: false },
    {image:"https://images.unsplash.com/photo-1750668251415-bd40b8154f45?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,name : "Together" , artist : "Maira", added: false },

    ];

    const [songData,setSongData] = useState(data)

    const handleClick=(index)=>{
      setSongData((prev)=>{
        return prev.map((item,itemIndex)=>{
          if(itemIndex === index) return {...item , added : !item.added}
          return item;
        })
      })
    }


  return (
    <div className='w-full h-screen gap-4 bg-zinc-300 '>
    
      <Navbar data={songData}/>
       <div className='px-20 flex  gap-10 mt-10 flex-wrap' >
        {songData.map((obj,index)=>{
         return <Card data={obj} handleClick ={handleClick} index={index} key={index}/>
        })}

      </div>
    </div>
  )
}

export default App