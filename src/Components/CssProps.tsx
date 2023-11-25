import { cssProps } from "./Component.types"
export function Cssprops(props:cssProps){
    return(
        <>
        <div style={props.styles}>Applying css through props with typescript</div>
        </>
    )
}