import React, { useState, useEffect } from 'react'

const Effect2 = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
  }, [])

  return (
    <>
      <h2>Effect2 - User List</h2>
      <ol type="1">
        {users.map((data) => (
          <li>
            <p>id: {data.id}</p>
            <p>name: {data.name}</p>
            <p>username: {data.username}</p>
            <p>email: {data.email}</p>
            <p>street: {data.address.street}</p>
             <p>Suite:{data.address.suite}</p>
                <p>Zipcode:{data.address.zipcode}</p>
                 <p>lat:{data.address.geo.lat}</p>
                <p>Company name:{data.company.name}</p>
          
          </li>
        ))}
      </ol>
    </>
  )
}

export default Effect2
