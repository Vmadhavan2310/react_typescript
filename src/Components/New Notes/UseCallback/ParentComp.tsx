import React, { useCallback, useEffect, useState } from 'react'
import IceView from './IceView'
import IceButton from './IceButton'
import IceSubComp from './IceSubComp'


export type stateprops={
    ice:number
}
function ParentComp() {
    console.log("parent props")
    const [iceQty,setIceQty]=useState<stateprops>({
        ice:50
    })
    const [names,setName]=useState("vinoth")
    const IncreaseQty=useCallback(()=>{
        setIceQty(prev=>({
            ice:prev.ice+1
        }))
    },[iceQty.ice])
    const changeName=()=>{
        setName("Rafiya")
    }
  return (
    <>
    <div>ParentComp {names}</div>
    <IceView ice={iceQty.ice}/>
    <IceButton icebtn={IncreaseQty}/>
    <IceSubComp names={names}/>
    <button onClick={changeName}>Name Change</button>
    </>
  )
}

export default ParentComp