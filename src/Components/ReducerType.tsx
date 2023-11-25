import React, { useEffect, useReducer, useState } from 'react'
import { EmpAction, EmpType } from './Component.types'
function ReducerType() {
    const [loading,setLoading]=useState(true)
    const empDetails={
        name:'',
        Manager:"",
        ProjectName:"",
        id:0,
        status:""
    }

    const reducer=(state:EmpType,action:EmpAction)=>{
        switch(action.type){
            case 'Vinoth':
                return{
                    ...state,
                    name:action.type,
                    Manager:"Puneeth",
                    ProjectName:"Levis",
                    id:5104,
                    status:"Active"
                }
            case 'Rafiya':
                return{
                    ...state,
                    name:action.type,
                    Manager:"Jaya",
                    ProjectName:"Urban Monkey",
                    id:5204,
                    status:"In-Active"
                }
            default:
                return state
            }
        }

        const [Emp,dispatch]=useReducer(reducer,empDetails);

        useEffect(()=>{
           setTimeout(()=>{
            dispatch({type:"Vinoth",payload:MarmetoEmp[1]})
            setLoading(false)
           },3000)
        },[])

        //Emp Details
        const MarmetoEmp=[
            {
            name:"Rafiya",
            Manager:"Jaya",
            ProjectName:"Urban Monkey",
            id:5204,
            status:"In-Active"
            },{
                name:"Vinoth", 
                Manager:"Puneeth",
                ProjectName:"Levis",
                id:5104,
                status:"Active"
            }
        ]
        
  return (
    <>
    {loading?<div>Loading Data</div>:
    <>
    <h2>Employee Details</h2>
    <div> Name:- {Emp.name}</div>
    <div> Manager:- {Emp.Manager}</div>
    <div> ProjectName:- {Emp.ProjectName}</div>
    <div> ID:- {Emp.id}</div>
    <div> Status:- {Emp.status}</div>
    <button onClick={()=>dispatch({type:Emp.name=='Vinoth'?'Rafiya':'Vinoth',payload:MarmetoEmp[0]})}>Next Employee</button>
    </>
  }
    </>
  )
}

export default ReducerType