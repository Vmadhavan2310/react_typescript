type propsvalue={
    name:string
    age:number
    alive:boolean
}

function Typingprops(props:propsvalue){
    return(
        <>
        <div>
            {
                props.alive?`Yes the person ${props.name} with age ${props.age} is alive`:`He is no more with us`
            }
        </div>
        </>
    )

}

export default Typingprops;