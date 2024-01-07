import React, { useCallback, useState } from 'react'
import MemoChild from './MemoChild';

function ParentComps() {
    const [status,setStatus]=useState(false);
    const [value,setValue]=useState(5);
    console.log('parent Comp');
    const Inreasevalue=useCallback(()=>{
        setValue(p=>p+5)
    },[value])
  return (
    <>
    <div>{status ? 'Welcome' : 'hello'}ParentComps</div>
    <button onClick={()=>setStatus(p=>!p)}>Change Status</button>
    <MemoChild value={value} Inreasevalue={Inreasevalue}/>
    </>
  )
}

export default ParentComps