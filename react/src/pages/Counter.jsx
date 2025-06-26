import React,{useState} from 'react'


const Counter = () => {
     const [count,cnt] = useState(0);

  
  return (
  
    <div>counter

   <h1>{count}</h1>
   <button onClick={()=>(cnt(count+1))}>Increment</button><br/><br/>
      <button onClick={()=>(cnt(count-1))}>Decrement</button><br></br><br></br>
      <button onClick={()=>cnt(0)}>Resest</button>
      </div>
  
  )
}

export default Counter