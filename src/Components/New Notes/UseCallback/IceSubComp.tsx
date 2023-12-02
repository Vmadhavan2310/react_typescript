import React from 'react'
type subProps={
    names:string
}
function IceSubComp(props:subProps) {
    console.log("sub comp")
  return (
    <div>IceSubComp {props.names}</div>
  )
}

export default React.memo(IceSubComp)