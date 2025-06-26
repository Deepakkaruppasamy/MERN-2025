import React from 'react'

const About = ({items,users}) => {
  return (
    <>
    <div>About</div>
     <ol type="i">
        {items.map((fruit)=>(<li>{fruit}</li>))}
      </ol>
      <h3>{users.name} {users.password}</h3>
      </>

  )
}

export default About