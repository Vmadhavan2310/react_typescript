type propObj={
    person:{
        firstName:string
        lastName:string
    }
    nickName:string
}
export default function TypingObject(props:propObj){
    return(
        <>
        <div>{props.person.firstName} and {props.person.lastName} also he is a {props.nickName}</div>
        </>
    )
}