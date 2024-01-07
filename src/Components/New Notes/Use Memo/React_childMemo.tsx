import React from 'react';

type ChildMemoProps={
    count:number
    increaseCount:()=>void
}

function React_childMemo(props:ChildMemoProps) {
    console.log('child memo')
  return (
    <>  
    <div>React_childMemo {props.count}</div>
    <button onClick={props.increaseCount}>Count Increase</button>
    </>
  )
}

export default React.memo(React_childMemo)