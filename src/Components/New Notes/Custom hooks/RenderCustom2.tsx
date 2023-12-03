import React from 'react'
import UseCustomCount from './UseCustomCount'

function RenderCustom2() {
    const {customCount,IncreasecustomCount}=UseCustomCount()
  return (
    <>
    <div>RenderCustom2 {customCount.count}</div>
    <button onClick={IncreasecustomCount}>Custom2 Increment</button>
    </>
  )
}

export default RenderCustom2