import React from 'react'
import About from './About'


const Home = ({items,users}) => {
  return (
 
    <div>
    
      <About items={items} users={users}/>
      
     
    
    </div>
  
  )
}

export default Home



  /*
      <ol type="i">
        {items.map((fruit)=>(<li>{fruit}</li>))}
      </ol>
      <h3>{users.name} {users.password}</h3>
      */