import React, { useState } from 'react'
import Render_ChildOne from './Render_ChildOne';
interface childOneProps{
    children:React.ReactNode
}
function Render_parentOne({children}:childOneProps) {
    const [num,setNum]=useState(0);
    console.log("parent comp renders")
  return (
    <>
    <div>Render_parentOne</div>
    <button onClick={()=>setNum(c=>c+1)}>Click {num}</button>
   {children}
    </>
  )
}
// React comp cannot mutate the props so when passing the element as children it falls under props so the props won't re-render
export default Render_parentOne