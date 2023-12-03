import React, { useState } from 'react'

function RenderCountComp(props:any) {
    const [renderCount,setRenderCount]=useState({
        count:0
    })
    const increaseRender=()=>{
        setRenderCount(prev=>({
            count:prev.count+1
        }))
    }
  return (
    <>
    {props.render(renderCount,increaseRender)}
    </>
  )
}

export default RenderCountComp