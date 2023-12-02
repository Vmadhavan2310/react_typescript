import React from 'react'

function TestComp(props:{child:string}) {
  return (
    <div>TestComp{props.child}</div>
  )
}
TestComp.defaultProps ={child:"not working"}

export default TestComp