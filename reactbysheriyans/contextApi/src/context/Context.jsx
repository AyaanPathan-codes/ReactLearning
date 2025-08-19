import React, { useState } from 'react'
import  {createContext} from "react";

export const UserContext = createContext();

const Context = (props) => {
 const [user,setUser]= useState([
  {id:0,name:"Ayaan",email:"ayaan10@gmail.com"},
  {id:1,name:"Simran",email:"simran10@gmail.com"},
  {id:2,name:"Abrar",email:"abrar10@gmail.com"}

  ])
  console.log(props);
  
  return  <UserContext.Provider value={{user,setUser}}> {props.children}</UserContext.Provider>  
  }

export default Context