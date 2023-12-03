import React from 'react'
import { countProps } from './CountOrigComp'
import CounterComps from './CounterComps'

function TestCount(props:countProps) {
    const {countVal,countIncrease}=props
  return (
    <>
    <div>TestCount {countVal.count}</div>
    <button onClick={()=>countIncrease(10)}>Increment</button>
    </>
  )
}

export default CounterComps(TestCount)