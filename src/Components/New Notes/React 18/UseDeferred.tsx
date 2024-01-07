import React, { useState,useMemo } from 'react'

function UseDeferred() {
    const [value,setValue]=useState(0);
    let [num,setNum]=useState(0);

    const valueIncrease=()=>{
        setValue(p=>p+1)
    }
    const numIncrease=()=>{
        setNum(p=>p+1)
    }
    let expensiveFn=useMemo(()=>{
        for(let i=0;i<=200000000;i++){
            num+=i;
        }
        return num
    },[num])
    
  return (
    <>
    <div>UseDeferred value-{value} num: {num}</div>
    <button onClick={valueIncrease}>Incease Value</button>
    <button onClick={numIncrease}>Increase num</button>
    {expensiveFn}
    </>
  )
}

export default UseDeferred