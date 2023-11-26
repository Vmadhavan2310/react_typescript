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

//Use context hook
export type childrenProp={
    children:React.ReactNode
}

//class component state and props
export type stateTypes={
    name:string
}

export type propTypes={
    age:number
}

//Component Props
export type ProfileProps={
    isloggedIn:boolean
    comp:React.ComponentType
}
export type privateCompstateType={
    names:string
}