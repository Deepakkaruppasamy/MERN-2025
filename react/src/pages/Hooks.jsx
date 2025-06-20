import React from 'react'
import {Link} from 'react-router-dom'
const Hooks = () => {
  return (
    <div style={{display:"flex",flexDirection:"column"}}>
        <Link to='/state'>Usestate</Link>
        <Link to='/effects'>UseEffect</Link>
    </div>
  )
}

export default Hooks