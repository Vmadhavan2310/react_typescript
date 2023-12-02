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
    console.log(props)
    return(
        <>
        <h2 style={props.styling}>React Component typescript values {props.person.name} and age is {props.person.age}</h2>
        {props.children}
        </>
        )
}