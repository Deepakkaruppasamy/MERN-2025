import React, { useContext } from 'react';
import {Context } from '../hooks/Context';


const Contact = () => {
  const user=useContext(Context);
  return (
    <div>
    <h1>{user.username}</h1>
    <h1>{user.phn}</h1>
    </div>
  )
}

export default Contact