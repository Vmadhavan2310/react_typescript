import { inputProps } from "./Component.types"
import { Cssprops } from "./CssProps"
export function EventProps(props:inputProps){
    return(
        <>
        <input type="text" onChange={props.input}/>
        <button onClick={(e)=>props.clickmsg(e,4)}>Click</button>
        <Cssprops styles={{"color":"yellow"}}/>
        </>
    )
}