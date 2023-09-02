import React from 'react'
import Data from './Data'
import Card from './Card'
import './Home.css'

const Home = ({search,handleClick}) => {
  
  return (
    <div className='Home'>
    <section className='Sec'>
    {Data && Data.filter((item)=>item.category.toLowerCase().includes(search)).map((item)=>{
      return(
        <Card key={item.id} handleClick={handleClick} item={item}/>
      )
    })}
    </section>
    </div>
  )
}

export default Home
