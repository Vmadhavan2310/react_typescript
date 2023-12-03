import React from 'react'
import { rendersCount,increaseRender } from '../../../App'
type accumulate={
    renderCount:rendersCount
    increaseRender:increaseRender
}
function Render1(props:accumulate) {
    const {renderCount,increaseRender}=props
  return (
    <>
    <div>Render1 countValue={renderCount.count}</div>
    <button onClick={increaseRender}>Increase render</button>
    </>
  )
}

export default Render1