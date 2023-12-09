import React from 'react'
interface childOnenameProps{
    name:string
}
function Render_ChildOne({name}:childOnenameProps) {
    console.log("child one comp renders")
  return (
    <div>Render_ChildOne {name}</div>
  )
}

export default React.memo(Render_ChildOne)