import React, { useState } from 'react'
type obj={
    value:number
    name:string
}
function MemoChild({value}:{value:number}) {
    const [count,setCount]=useState<obj>({
        value:10,
        name:'vinoth'
    })
    const changeCount=():void=>{
        console.log('first')
        setCount(p=>({
            ...p,
            name:'Mike Adams'
        }))
    }
    console.log('child Comp')
  return (
    <>
    <div>MemoChild {value}</div>
    <div>Count state {count.value} {count.name}</div>
    <button onClick={()=>setCount({...count,value:count.value + 50})}>change count</button>
    <button onClick={changeCount}>change Name</button>
    </>
  )
}

export default React.memo(MemoChild)