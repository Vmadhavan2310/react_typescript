import { inputProps } from "./Component.types"
export function EventProps(props:inputProps){
    return(
        <>
        <input type="text" onChange={props.input}/>
        <button onClick={(e)=>props.clickmsg(e,4)}>Click</button>
        </>
    )
}