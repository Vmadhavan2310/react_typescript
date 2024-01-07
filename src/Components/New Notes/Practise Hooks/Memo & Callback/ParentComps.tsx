import React, { useState } from 'react'
import MemoChild from './MemoChild';

function ParentComps() {
    const [status,setStatus]=useState(false);
    const [value,setValue]=useState(5);
    console.log('parent Comp');
  return (
    <>
    <div>{status ? 'Welcome' : 'hello'}ParentComps</div>
    <button onClick={()=>setStatus(p=>!p)}>Change Status</button>
    <button onClick={()=>setValue(p=>p+5)}>Change value</button>
    <MemoChild value={value}/>
    </>
  )
}

export default ParentComps