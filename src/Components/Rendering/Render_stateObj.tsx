import { type } from 'os'
import React, { useState } from 'react'
type personState={
    name:string
    age:number
}
function Render_stateObj() {
    const [person,setPerson]=useState<personState>({
        name:'vinoth',
        age:28
    })
    const changeName=()=>{
        const newPerson={...person}
        newPerson.name="madhavan";
        newPerson.age=29
        setPerson(newPerson)
    }
    console.log("state obj renders")
  return (
    <>
    <div>Render_stateObj</div>
    <div>Person name is {person.name} and age is {person.age}</div>
    <button onClick={changeName}>Update name</button>
    </>
  )
}

export default Render_stateObj