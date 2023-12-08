import React, { useState } from 'react'

function Render_useState() {
    const [num,setNum]=useState<number>(0)
    console.log("use state renders")
  return (
    <>
    <div>Render_useState</div>
    <button onClick={()=>setNum(c=>c+1)}>Click{num}</button>
    <button onClick={()=>setNum(5)}>Click to 5 times {num}</button>
    </>
  )
}

export default Render_useState