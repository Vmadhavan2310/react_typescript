import React, { useEffect, useRef, useState } from 'react'

function Revise_Ref() {
    const [bool,setbool]=useState()
    const buttonRef=React.createRef<HTMLButtonElement>();
    useEffect(()=>{
        console.log(buttonRef.current)
    })
  return (
    <>
    <div>Revise_Ref</div>
    <button ref={buttonRef}>Change Value</button>
    </>
  )
}

export default Revise_Ref