import React from 'react'
import { stateprops } from './ParentComp'
function IceView({ice}:stateprops) {
    console.log("ice view")
  return (
    <div>IceViewprops {ice}</div>
  )
}

export default IceView