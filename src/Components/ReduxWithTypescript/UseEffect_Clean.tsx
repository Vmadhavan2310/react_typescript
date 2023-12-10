import React,{useState} from 'react'
import Redux_view from './Redux_view'
import { useAppDispatch } from '../../App'
import { increment } from './Redux_reducer'

function UseEffect_Clean() {
    const [removeCount,setRemoveCount]=useState<boolean>(true)
    const dispatch=useAppDispatch()
  return (
    <>
    <div>UseEffect_Clean</div>
    <button onClick={()=>setRemoveCount(c=>!c)}>Remove Count app</button>
    <button onClick={()=>dispatch(increment())}>Increment View count</button>
    {removeCount && <Redux_view/>}
    </>
  )
}

export default UseEffect_Clean