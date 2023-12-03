import React, { useState } from 'react'

function UseCustomCount() {
    const [customCount,setCustomCount]=useState({
        count:0
    })
  const IncreasecustomCount=()=>{
    setCustomCount(prev=>({
        count:prev.count+1
    }))
  }
  return {customCount,IncreasecustomCount}
}

export default UseCustomCount