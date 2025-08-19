import React, { useContext } from 'react'
import { Route,Link,Routes } from 'react-router-dom'
import { UserContext } from '../context/Context'

const User = () => {

  const {user,setUser} = useContext(UserContext)
  return (
    <div>

        <h1 className='text-4xl'>User List</h1>
        <div className=' ml-10 mt-10  w-1/3 flex flex-col'>
          {user.map(u => (
  <Link
    to={`/user/${u.id}`}
    key={u.id}
    className="p-3 mb-3 bg-blue-100"
  >
    {u.name}
  </Link>
))}

          
        </div>
    </div>
  )
}

export default User