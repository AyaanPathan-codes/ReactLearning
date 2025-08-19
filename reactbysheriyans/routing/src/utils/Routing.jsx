
import {  Routes, Route } from 'react-router-dom'
import Home from "../components/Home.jsx"
import About from "../components/About.jsx"
import User from "../components/User.jsx"
import UserDetail from '../components/UserDetail.jsx'


const Routing = () => {
  return (
    <div> 
        <Routes>
            <Route path="/" element = {<Home />}/>
            <Route path="/user/" element = {<User />}/>
            <Route path="/user/:name" element = {<UserDetail />}/>
            <Route path="/about" element = {<About />}/>

           
        </Routes>
        </div>
  )
}

export default Routing