import React ,{useContext}from 'react'
import {Context } from '../hooks/Context'
const Skills = () => {
    const user=useContext(Context);
  return (
     <div>
    <h1>{user.username}</h1>
 
    </div>
  )
}

export default Skills