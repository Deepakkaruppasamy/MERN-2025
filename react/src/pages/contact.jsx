import React,{useContext} from 'react'
import Context  from '../Hooks/Context'
const Contact = ({users}) => {
  const user = useContext(Context)
  return (
    <>
    <div>{user.name}</div>
    <div>{user.phno}</div>
    </>
  )
}

export default Contact
