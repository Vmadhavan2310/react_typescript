import React, { useEffect, useState } from 'react'
type userList={
  [key: string]: string
}
function Revise_Effect() {
    const [users,setUsers]=useState([])
    const API = 'https://jsonplaceholder.typicode.com/users';
    useEffect(()=>{
        fetch(API)
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])
    console.log(users)
  return (
    <>
    <div>Revise_Effect</div>
    {users &&  users.map((user:userList)=>{
        return <div key={user.id}>{user.email} {user.username}</div>
    })}
    </>
  )
}

export default Revise_Effect