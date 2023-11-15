import { ChildrenProps } from "./ChildrenProps"

type statusProps={
    status:"loading" | "success" | "failed"
    children:React.ReactNode
}
export function AdvancedProps(props:statusProps){

    return(
        <>
        <div>
        {props.status==="loading"?`Fetching data`:props.status==="success"?`Data fetched succesfully`:`Data fethcing failed`}
        </div>
        <h2>{props.children}</h2>
        {/* <ChildrenProps>
            {props.status}
        </ChildrenProps> */}
        </>
    )

}