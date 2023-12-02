import React from 'react'
type icebtnProps={
    icebtn:()=>void
}
function IceButton(props:icebtnProps) {
    console.log("ice button")
  return (
    <>
    <button onClick={props.icebtn}>Purchase Ice</button>
    </>
  )
}

export default React.memo(IceButton)