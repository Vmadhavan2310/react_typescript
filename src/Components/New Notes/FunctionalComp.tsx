import React, { useState } from "react"

type functionalProps={
   person:{
    name:string
    age:number
   }
   styling:React.CSSProperties
   children:React.ReactElement
   /* It supports React.ReactNode | React.JSX.Element | React.ReactElement */
}

export const FunctionalComp:React.FunctionComponent<functionalProps>=(props)=>{
    const [personName,setpersonName]=useState('vinoth')
    console.log(props)
    const handleChange:React.MouseEventHandler<HTMLButtonElement>=()=>{
        console.log("change")
        setpersonName("rafiya")
    }

    const changeEvent=(e:React.KeyboardEvent<HTMLInputElement>)=>{
        console.log("key press event occurs",e.keyCode)
    }
    return(
        <>
        <h2 style={props.styling}>React Component typescript values {props.person.name} and age is {props.person.age}</h2>
        {props.children}
        <button onClick={handleChange}>Onclick {personName}</button>
        <input type="text" onKeyDown={(e)=>changeEvent(e)}/>
        </>
        )
}