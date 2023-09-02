import React, { useState } from 'react'
import Navbar from './Ecom/Navbar'
import Home from './Ecom/Home'
import Cart from './Ecom/Cart'
//import ContactUs from './Ecom/ContactUs'

const App = () => {
  const[show,setShow]=useState(true)
  const[search,setSearch]=useState('')
  const[cart,setCart]=useState([])

  function handleClick(item){
    setCart([...cart,item])
  }

  function handleChange(item,d){
    let arr =cart
    let index =cart.indexOf(item)
    arr[index].amount+=d
    setCart([...cart])
  }


  return (
    <div>
      <Navbar setShow={setShow} setSearch={setSearch} size={cart.length}/>
      {(show)?(<Home search={search} handleClick={handleClick} />):(<Cart cart={cart} setCart={setCart} handleChange={handleChange}/>)}
    </div>
  )
}

export default App
