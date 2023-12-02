import React from 'react'
type genericProps<T>={
    name:string
    age:number
}
const GenericTypeProps=<T extends number>({name,age}:genericProps<T>)=>{
  return (
    <div>GenericTypeProps {name}{age}</div>
  )
}

export default GenericTypeProps