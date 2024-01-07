import React, { useDeferredValue, useEffect, useMemo } from 'react'
import List from './List';
type inputsProps={
    name:string
}
function Input_referred(props:inputsProps) {
    const deferValue=useDeferredValue(props.name)
    console.log('deferValue',deferValue);
    const list =useMemo(()=>{
        let loop=2000000;
        let l=[]
        for(let i=0;i<loop;i++){
           l.push(<div key={i}>{props.name}</div>)
        }
        return l;
        },[props.name])
  return (
    <>
    <div>INput Defered</div>
   
    </>
  )
}

export default Input_referred