import React, { useState } from 'react'
import { nameList } from './Names';
import Revise_Effect from './Revise_Effect';
function Revise_useState() {
    const [status,setStatus]=useState<boolean | null >(null);
    const [person,setPerson]=useState({
        name:'vinoth',
        age:28
    })
    const [names,setNames]=useState<string[]>(['vinoth']);
    const [newName,setNewName]=useState('');
    const [searchName,setSearchNames]=useState('');
    const [showArr,setShowArr]=useState(nameList)
   const changePerson=()=>{
    setPerson({
        name:'john',
        age:30
    })
   }
   const AddPersonList=()=>{
    let newPerson:string[]=[...names,newName]
    setNames(newPerson);
    setNewName('')
   }
   let newArr:string[]=[]
   const showNames=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setSearchNames(e.target.value)
     newArr=nameList.filter((names,index,arr)=>{
        return names.toLowerCase().includes(searchName.toLowerCase())
    })
    setShowArr(newArr)
   }
   console.log(searchName)
  return (
    <>
    <div>Revise_useState</div>
    <div>person name {person.name}</div>
    <div>person age {person.age}</div>
    <button onClick={()=>setStatus(c=>!c)}>Change Status</button>
    <button onClick={changePerson}>Update Info</button>
    <input type="text" value={newName} onChange={(e)=>setNewName(e.target.value)}/>
    <button onClick={AddPersonList}>Add Person</button>
    {names.map(name=><div key={name}>{name}</div>)}
    <div>search Names</div>
    <input type="text" value={searchName} onChange={(e)=>showNames(e)}/>
    {showArr.map((names,index)=>{
        return <li key={index}>{names}</li>
    })}
    <Revise_Effect/>
    </>

  )
}

export default Revise_useState