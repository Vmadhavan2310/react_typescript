import React from 'react'
import { useAppDispatch, useAppSelector } from '../../App'
import { increment,decrement } from './Redux_reducer';

function Redux_view() {
    const states=useAppSelector(state=>state.counts.count);
    const dispatch=useAppDispatch()
    console.log(states)
  return (
    <>
    <div>Redux_view {states}</div>
    <button onClick={()=>dispatch(increment())}>Increment</button>
    <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </>
  )
}

export default Redux_view