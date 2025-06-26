import React, {useEffect,useState} from 'react'

const Effect = () => {
    const [Count,setCount]=useState(0);
    useEffect(()=>{
      
      setTimeout(()=>{
      setCount(Count+1)
    },2000)
    },[Count])
    
    const handleIncrement=()=>{
        setCount(Count+1);
    }
    const handleDecrement=()=>
    {
        setCount(Count-1);
    }
    const handleReset=()=>
    {
        setCount(0);
    }
    
  return (
    <div>

        <h>{Count}</h><br></br><br></br>
        <button onClick={handleIncrement}>Increment</button><br></br><br></br>
        <button onClick={handleReset}>Reset</button><br></br><br></br>
        <button onClick={handleDecrement}>Decrement</button>

    </div>
  )
}

export default Effect