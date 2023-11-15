type typingArrProps={
    personArr:{
        name:string
        age:number
    }[]
}

export default function TypingArr(props:typingArrProps){
    return(
        <>
        <div>
            {
                props.personArr.map(item=>{
                    return <h3 key={item.name}>{item.name} & {item.age}</h3>
                })
            }
        </div>
        </>
    )
}