import React from 'react'
import Home from './components/Home'
import User from './components/User'
import About from "./components/About.jsx"
import UserDetails from "./components/UserDetails.jsx"
import { Route,Link,Routes } from 'react-router-dom'
const App = () => {
  return (
    <div className='p-1 container m-auto'>

      <nav className='flex justify-center items-center text-3xl mb-10 font-semibold gap-5 mt-10'>
        <Link to="/">Home</Link>
        <Link to="/user">User</Link>
        <Link to="/about">About</Link>

      </nav>

      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/user" element= {<User />} />
          <Route path="/user/:id" element= {<UserDetails/>} />
        <Route path="/about" element= {<About/>} />
      </Routes>
     
    </div>
  )
}

export default App