import React from 'react'
import CounterComps from './CounterComps'
export type countProps={
    countVal:{
        count:number
    }
    countIncrease:(num:number)=>void
}
function CountOrigComp(props:countProps) {
    const {countVal,countIncrease}=props
  return (
    <>
    <div>CountOrigComp {countVal.count}</div>
    <button onClick={()=>countIncrease(5)}>Increase</button>
    </>
  )
}

export default CounterComps(CountOrigComp)