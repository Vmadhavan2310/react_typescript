import React, { useReducer } from 'react'
type reducerStates=number
type reducerActions='Increment' | 'Increment five'
function Render_useReducer() {
    const intialState=0
    const reducer=(state=intialState,action:reducerActions)=>{
        switch(action){
            case 'Increment':
                return state+1
            case 'Increment five':
                return intialState
            default:
                return state
        }
    }
    const [stateNum,dispatch]=useReducer(reducer,intialState);
    console.log("use reducer renders")
  return (
    <>
    <div>Render_useReducer value {stateNum}</div>
    <button onClick={()=>dispatch('Increment')}>Increment</button>
    <button onClick={()=>dispatch('Increment five')}>Increment 5 times</button>
    </>
  )
}
//Note:- Use reducer will re-render due to upgrade version of react
export default Render_useReducer