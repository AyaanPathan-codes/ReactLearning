import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const Show = () => {
    
      const [products, setProducts] = useState([])

  const getProducts = () => {
    const api = "https://fakestoreapi.com/products" // ✅ fixed: use correct API

    axios
      .get(api)
      .then((response) => {
          // console.log(response.data)
        setProducts(response.data) // ✅ correctly accessing response.data
      })
      .catch((err) => console.log('GET error:', err))


     
  }

   useEffect(()=>{
        getProducts()
      },[]) 
  return (
    <div>   
      <button onClick={getProducts}>Call API</button>
        
         <ul className='mt-7'>
        {products.length > 0 ? (
          products.map((p) => <li key={p.id}>{p.title}</li>)
        ) : (
          <h1>Loading</h1>
        )}
      </ul></div>
  )
}

export default Show