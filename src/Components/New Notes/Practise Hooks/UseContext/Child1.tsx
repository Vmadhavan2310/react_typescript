import React, { useContext } from 'react'
import { Context } from './Context_Provider';
export function Child1() {
    // const value=useContext(Context);
    // console.log(value)
  return (
    <>
    <Context.Consumer>
    {value=>{
        return <div>Child receiver {value}</div>
    }}
    </Context.Consumer>
    </>
  )
}

