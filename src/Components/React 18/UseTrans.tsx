import React, { useState, useTransition } from 'react'

function UseTrans() {
    const [input,setInput] = useState('');
    const [list,setList] = useState<string[]>([]);
    const [isPending,setTransition] = useTransition();
    const changeEvent=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setInput(e.target.value);
        setTransition(()=>{
            let l = [];
        for(let i=0; i<=20000; i++){
            l.push(e.target.value)
        }
        setList(l)
        })
    }
  return (
    <div>
        <input type="text" value={input} onChange={(e)=>changeEvent(e)}/>
        {list && isPending?<div>Loading</div>:list.map((item,index)=>{
            return <div key={index}>{item}</div>
        })}
    </div>
  )
}

export default UseTrans