import React, { useReducer } from 'react'
type reducerState={
    cake:number
    ice:number
}
type reducerActionType={
type:'BUY_CAKE' | 'BUY_ICE'
payload:number
}
function NewReducerHook() {
    const intialState={
        cake:50,
        ice:100
    }

    const reducer=(state:reducerState=intialState,action:reducerActionType)=>{
        switch(action.type){
            case 'BUY_CAKE':
                return {
                    ...state,
                    cake:state.cake-action.payload
                }
            case 'BUY_ICE':
                return {
                    ...state,
                    ice:state.ice-action.payload
                }
            default:
                return state
        }
    }
    const [state,dispatch]=useReducer(reducer,intialState);
  return (
    <>
    <div>NewReducerHook Cake:{state.cake} ICe:- {state.ice}</div>
    <button onClick={()=>dispatch({type:'BUY_CAKE',payload:5})}>Buy Cake</button>
    <button onClick={()=>dispatch({type:'BUY_ICE',payload:2})}>Buy Ice</button>
    <button id='test'>Test</button>
    </>
  )
}

export default NewReducerHook