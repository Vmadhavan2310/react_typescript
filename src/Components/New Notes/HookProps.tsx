import React, { useEffect, useState } from 'react'
type hookProp={
    name?:string
}
function HookProps() {
    const [value,setValue]=useState<hookProp>({})
    useEffect(()=>{
       setTimeout(()=>{
        setValue({name:"vinoth"})
       },2000)
    },[])
  return (
    <>
    <div>HookProps {value.name}</div>
    </>
  )
}

export default HookProps