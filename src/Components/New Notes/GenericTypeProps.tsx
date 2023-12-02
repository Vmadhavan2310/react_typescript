import React from 'react'
type genericProps<T>={
    person:T[]
}
const GenericTypeProps=<T extends {id:number,name:string,age:number}>(props:genericProps<T>)=>{
  return (
    <>
    {props.person.map(item=><div key={item.id}>{item.name} {item.age}</div>)}
    <div>GenericTypeProps</div>
    </>
  )
}

export default GenericTypeProps