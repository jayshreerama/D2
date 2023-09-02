import React, { useState } from 'react'
//import './Cards.css'
// import "react-responsive-carousel/lib/styles/carousel.min.css"; 
// import { Carousel } from 'react-responsive-carousel';

const Card = ({item,handleClick}) => { 
    const{title,price,image,category,description,rating}=item
    const[open,setOpen]=useState(false)
  return (
    <div className='Cards'>

    <img src={image} alt='' width={'200px'} height={'200px'}></img>
    <h5>{title}</h5>
    <p>Category: {category}</p>
    <p>Rating :{rating.rate}</p>
    <p>Price: {price}</p>
    <button onClick={()=>setOpen(!open)}>Read More</button>  
    {open && (
        <div>
            <p>{description}</p>
            <button onClick={()=>setOpen(!open)}>Close</button>
        </div>
    )} 
    &nbsp;   
    <button onClick={()=>handleClick(item)}>Add Cart</button>   
    
    </div>
  )
}

export default Card
