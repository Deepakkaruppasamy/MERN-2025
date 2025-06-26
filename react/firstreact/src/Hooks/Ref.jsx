import React, { useEffect,useState,useRef} from 'react'

const Ref = () => {
    const [count,setCount]=useState(0);
    const value = useRef(0);
    useEffect(()=>{
        setTimeout(()=>{
            value.current=value.current+1
        },2000)
    })
    const handleIncrement =()=>{
        setCount(count+1)
    }
     
console.log(value.current);
  return (
    <div>
<h1>{count}</h1>
<button onClick={handleIncrement}>Increment</button>
<h1>{value.current}</h1>

    </div>



  )
}

export default Ref