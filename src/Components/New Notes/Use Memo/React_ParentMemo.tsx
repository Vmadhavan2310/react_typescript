import React, { useCallback, useState } from 'react'
import React_childMemo from './React_childMemo'

function React_ParentMemo() {
    const [status,setStatus]=useState(false);
    const [count,setCount]=useState(0)
    console.log('parent Memo');
    const increaseCount=()=>{
        setCount(c=>c+1)
    }
    const callbackMemo = useCallback(increaseCount,[count])
  return (
    <>
    <div>User Status</div>
    {status ? <div>User logged In</div>:<div>User Not logged</div>}
    <button onClick={()=>setStatus(c=>!c)}>Log {status?'in':'out'}</button>
    <React_childMemo count={count} increaseCount={callbackMemo}/>
    </>
  )
}

export default React_ParentMemo