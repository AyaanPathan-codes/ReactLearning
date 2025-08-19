import Home from "./components/Home.jsx"
import { Routes ,Link, Route} from 'react-router-dom'
import Show from "./components/Show.jsx"
import Services from "./components/Services.jsx"

const App = () => {


  return (
    <div className='pt-4 mt-3 gap-5'>
  
    <nav className="p-4 gap-4 flex justify-center items-center">
      <Link to="/">Home</Link>
      <Link to="/services">Services</Link>
      <Link to="/show">Show</Link>
    
    
    </nav>

    <hr />
    <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/services' element={<Services />}  />
        <Route path='/show' element={<Show />}  />

    </Routes>
    </div>
  )
}

export default App
