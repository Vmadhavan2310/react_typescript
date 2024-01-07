import React, { useState } from 'react'
import List from './List';

function React_deferred() {
  const [input,setInput]=useState('');
  const changeEvent=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setInput(e.target.value)
  }
  console.log(input)
  return (
    <>
    <div>React_deferred</div>
    <input type="text" value={input} onChange={(e)=>changeEvent(e)}/>
    <List input={input}/>
    </>
  )
}

export default React_deferred