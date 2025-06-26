import React ,{useState} from 'react'

const Login = () => {
const[formData,setFormData]=useState({
  email:'',
  password:''
})
const handleSubmit = (e) =>{
  e.preventDefault();
  console.log(formData)
  setFormData({
    email:"",
password:""
  })
}

const handleChanges=(e)=>{
  setFormData((prev)=>({...prev,[e.target.name]:e.target.value}))
}
  return (
   <div className='container'>
    <form className='myform'onSubmit={handleSubmit} >
      <h2>Login Form</h2>
      <label>Email: </label>
      <input type="email" value={formData.email} name='email' onChange={handleChanges}/><br/>
      <label>password: </label>
      <input type="password" value={formData.password} name='password' onChange={handleChanges}/><br/>
      <button type="submit">Submit
        
      </button>
    </form>
    </div>

  )
}

export default Login