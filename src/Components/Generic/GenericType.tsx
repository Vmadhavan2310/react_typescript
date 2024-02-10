import React from 'react'

type personProps<T>={
    personArr:T
}
type numberArrProps<T> = {
    numberArr:T;
}

function GenericType<T extends {age:number}[]>(props:personProps<T>) {
    // console.log(props)
    // const {firstName,lastName} = person
  return (
    <>
    <div>GenericType</div>
    {/* <div>First Name :{firstName} and lastName :{lastName}</div> */}
    {props.personArr.map((item,index)=>{ 
        return <div key={index}>{item.age}</div>
    })}
    </>
  )
}

export default GenericType