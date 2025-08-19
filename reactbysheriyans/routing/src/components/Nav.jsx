import React from 'react'
import { Link,NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <nav className='mt-6 flex justify-center items-center gap-10'>

        <NavLink style={(e)=>{
         return{ color : e.isActive ? "tomato" : "",
          fontWeight: e.isActive ? "bold" : ""
         };
          }} to="/">Home</NavLink>
        <NavLink style={(e)=>{
         return{ color : e.isActive ? "tomato" : "",
          fontWeight: e.isActive ? "bold" : ""
         };
          }} to="/user">User</NavLink>
        <NavLink style={(e)=>{
         return{ color : e.isActive ? "tomato" : "",
          fontWeight: e.isActive ? "bold" : ""
         };
          }} to="/about">About</NavLink>
      </nav></div>
  )
}

export default Nav