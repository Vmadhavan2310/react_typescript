import React from "react";

export type inputProps={
    input:React.ChangeEventHandler<HTMLInputElement>
    clickmsg:(e:React.MouseEvent<HTMLButtonElement>,id:number)=>void
}

//Css Props
export type cssProps={
    styles:React.CSSProperties
}

//Use State hook
export type stateHookProps={
    fullName:string
    email:string
}
//Use Reducer Hook
export type EmpType={
    name:string
    Manager:string
    ProjectName:string
    id:number
    status:string
}

export type EmpAction={
    type:'Vinoth'|'Rafiya'
    payload?:{
    name:string
    Manager:string
    ProjectName:string
    id:number
    status:string
    }
}