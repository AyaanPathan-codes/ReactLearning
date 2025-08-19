import React, { useState } from 'react'
import Cards from './components/Cards'
import Form from './components/Form'



const App = () => {
 const[users,setUsers]=  useState([])

 const handleRemove = (id) =>{
  setUsers(()=>users.filter((item,index)=>index !=id))
 }

 const handleFormSubmitData =(data)=>{
  setUsers([...users,data])
 }
  return (
    <div className=' p-4 w-full h-screen bg-zinc-200 flex items-center justify-center'>
      <div className=' container mx-auto'>
        <Cards handleRemove={handleRemove} users={users} />
        <Form  handleFormSubmitData={handleFormSubmitData}/>
      </div>
    </div>
  )
}

export default App