import React, { useState } from 'react'

function CounterComps(OriginalComp:React.ElementType) {
    function NewComp(){
        const [countVal,setCountVal]=useState({
            count:0
        })
    
        const countIncrease=(num:number)=>{
            setCountVal(prev=>({
                count:prev.count+num
            }))
        }
        return <OriginalComp countVal={countVal} countIncrease={countIncrease}/>
    }
    
  return NewComp

}

export default CounterComps