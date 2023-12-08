import React, {useState} from 'react'
import Render_stateObj from './Render_stateObj'

function Render_parentComp() {
    const [num,setNum]=useState<number>(0)
    console.log("use state renders")
  return (
    <>
    <div>Render_useState</div>
    <button onClick={()=>setNum(c=>c+1)}>Click{num}</button>
    <button onClick={()=>setNum(5)}>Click to 5 times {num}</button>
    <Render_stateObj/>
    </>
  )
}
//Note:- Its true. If parent comp has update same state it will render once after bails out, but child won't re-render.

export default Render_parentComp