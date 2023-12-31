import React, { useState } from 'react'
import Render_ChildOne from './Render_ChildOne';

function Render_parentOne() {
    const [num,setNum]=useState(0);
    const [name,setName]=useState('vinoth')
    console.log("parent comp renders")
  return (
    <>
    <div>Render_parentOne</div>
    <button onClick={()=>setNum(c=>c+1)}>Click {num}</button>
    <button onClick={()=>setName(c=>`${c} ${'madhavan'}`)}>Change name</button>
    <Render_ChildOne name={name}/>
    </>
  )
}
// React comp cannot mutate the props so when passing the element as children it falls under props so the props won't re-render. Incase of parent comp props changes then child also will re-render.
//Note:- If the child comp has sub child comp use memo has no effect better to avoid it.
//Note2: if the comp has object or functions if we are passing as props, use memo won't work due to no reference has been created for every time.
export default Render_parentOne