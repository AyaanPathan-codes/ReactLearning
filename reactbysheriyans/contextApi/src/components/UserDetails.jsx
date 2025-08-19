import React, { useContext } from 'react'
import { UserContext } from '../context/Context'
import { useNavigate, useParams } from 'react-router-dom'

const UserDetails = () => {
 const {id} = useParams()
 const navigate = useNavigate()
 const {user} =  useContext(UserContext)
  return (
    <div className='ml-10 mt-10  w-1/3 flex flex-col'>
      
      <h1 className='text-2xl bg-blue-100 font-semibold mb-3'>Username - {user[id].name}</h1>
      <h1 className='text-2xl bg-blue-100 font-semibold mt-3'>Email - {user[id].email}</h1>
      <button onClick={()=> navigate(-1) } className='p-2 rounded bg-red-300 mt-10'>Go Back</button>
      </div>
  )
}

export default UserDetails