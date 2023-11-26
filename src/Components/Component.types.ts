//Course summary
/* 
Basic and Advanced props 
Events & styles
UseState
usereduecer
use context API
use Ref
class Components
Component as props
Generics
Restricting props
Template litrals & Exclude
wrapping HTML & Omit
Extracting component prop types
polymorphic components
*/


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

//Template literal
type horizntal="top"|"bottom"|"center"
type vertical="start"|"end"|"middle"

export type positionProps={
  position:Exclude<`${horizntal}-${vertical}` | `${vertical}-${horizntal}`,'center-middle'>|'center'
}

/* 
Note: If you want to extract the types from component use the below method inside the target component
React.ComponentProps<typeof {componentName}>

*/