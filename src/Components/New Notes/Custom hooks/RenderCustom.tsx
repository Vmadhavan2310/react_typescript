import React, { useState } from 'react'
import UseCustomCount from './UseCustomCount'

function RenderCustom() {
  
    const {customCount,IncreasecustomCount}=UseCustomCount()
  return (
    <>
    <div>RenderCustom count:- {customCount.count}</div>
    <button onClick={IncreasecustomCount}>Increment</button>
    </>
  )
}

export default RenderCustom