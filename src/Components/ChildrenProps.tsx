type childrenProp={
    children:React.ReactNode;
}

export function ChildrenProps(props:childrenProp){
    return(
        <>
        <div>Children Props value is {props.children}</div>
        </>
    )
}