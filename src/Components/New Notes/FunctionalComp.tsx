type functionalProps={
   person:{
    name:string
    age:number
   }
}

export const FunctionalComp:React.FunctionComponent<functionalProps>=(props)=>{
    return(
        
        <h2>React Component typescript values {props.person.name} and age is {props.person.age}</h2>
        )
}