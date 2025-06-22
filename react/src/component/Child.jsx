import React from 'react';


const child = ({name,ph,dept}) => {
  return (
    <div>
      <h1>Name:{name}</h1>
      <h1>Phone:{ph}</h1>
      <h1>Dept:{dept}</h1>
    </div>
  )
}

export default child