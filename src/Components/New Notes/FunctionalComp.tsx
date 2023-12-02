type functionalProps={
   person:{
    name:string
    age:number
   }
   children:React.ReactElement
   /* It supports React.ReactNode | React.JSX.Element | React.ReactElement */
}

export const FunctionalComp:React.FunctionComponent<functionalProps>=(props)=>{
    return(
        <>
        <h2>React Component typescript values {props.person.name} and age is {props.person.age}</h2>
        {props.children}
        </>
        )
}