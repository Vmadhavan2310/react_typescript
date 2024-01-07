import React, { useState } from 'react'
type obj={
    value:number
    name:string
}
function MemoChild({value,Inreasevalue}:{value:number; Inreasevalue:()=>void}) {
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
    <button onClick={Inreasevalue}>Increase value</button>
    </>
  )
}

export default React.memo(MemoChild)