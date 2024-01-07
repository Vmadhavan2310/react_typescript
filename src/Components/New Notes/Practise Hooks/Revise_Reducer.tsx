import React, { useReducer } from 'react'
type personState={
    count:number
    num:number
}
type actionType={
    type:string
    payload:number
}
function Revise_Reducer() {
    const persons={
        count:0,
        num:6,
    }
    const reducer=(state:personState,action:actionType)=>{
        switch(action.type){
            case 'Increase_count':
                return{
                    ...state,
                    count: state.count + action.payload
                }
            case 'Increase_num':
                    return{
                        ...state,
                        num: state.num + action.payload
                    }
            default:
                return state
        }
    }
    const [value,dispatch]=useReducer(reducer,persons)
  return (
    <>
    <div>Revise_Reducer</div>
    <div>person name {value.count} {value.num}</div>
    {/* <div>person age {value.age}</div> */}
    <button onClick={()=>dispatch({type:'Increase_count',payload:10})}>Change Name</button>
    <button onClick={()=>dispatch({type:'Increase_num',payload:42})}>Change Age</button>
    </>
  )
}

export default Revise_Reducer