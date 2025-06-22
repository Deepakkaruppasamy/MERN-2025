import React from 'react';


const About = ({items,users}) => {
  return (
    <div>
      <ol>
        {items.map((fruits)=>(<li>{fruits}</li>))}
      </ol>
      <h1>{users.username}</h1>
      <h1>{users.password}</h1>
    </div>
  )
}

export default About