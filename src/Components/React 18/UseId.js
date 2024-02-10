import React, { useId, useState } from 'react'

function UseId() {
    const firstName = useId();
    const lastName = useId();
    const [input,setInput] = useState({
        fname:'',
        lname:''
    })
    const changeEve=(e)=>{
      const name = e.target.name;
      const value = e.target.value;
      setInput({...input,[name]:value})
    }
  return (
    <div>
        <label htmlFor={firstName}>First Name</label>
        <input type="text" id={firstName} value={input.fname} onChange={(e)=>changeEve(e)} name='fname'/>
        <br/>
        <label htmlFor={lastName}>Last Name</label>
        <input type="text" id={lastName} value={input.lname} onChange={(e)=>changeEve(e)} name='lname'/>
        <div>Name:{input.fname} {input.lname}</div>
    </div>
  )
}

export default UseId