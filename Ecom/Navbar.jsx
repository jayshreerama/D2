import React from 'react'
import '../Ecom/Navbar.css'
import { FaOpencart } from 'react-icons/fa';// react icon
import { FaCartArrowDown } from 'react-icons/fa';

const Navbar = ({setShow,setSearch,size}) => {
  return (
    <div className='Navbar'>
    <div className='Logo'>
    <h3><FaOpencart/> EShop.in</h3>
    </div>
      <nav>
      <div onClick={()=>setShow(true)}>Home</div>
      <div>About</div>
      <div>Contact</div>
      <div style={{display:'flex'}}>
      <label>Search: &nbsp; </label>
      <div><input type='text' onChange={(e)=>setSearch(e.target.value)} placeholder='Enter Product Name'></input></div>
      </div>
      <div onClick={()=>setShow(false)}><FaCartArrowDown/>Cart {size}</div>
      </nav>
    </div>
  )
}

export default Navbar
