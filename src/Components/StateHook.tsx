import { useState } from "react"
import { stateHookProps } from "./Component.types";
export function StateHook(){
    const [status,setStatus]=useState<null|stateHookProps>(null);

    const loggedIn=()=>{
        setStatus({
            fullName:"Vinoth Madhavan",
            email: "vinoth@gmail.com"
        })
    }

    const loggedOut=()=>{
     setStatus(null)   
    }
    return(
        <>
        <button onClick={loggedIn}>Logged In</button>
        <button onClick={loggedOut}>Logged Out</button>
        <h3>User status {status?'logged In':'logged out'}</h3>

        {status?<div><div>FullName:- {status.fullName}</div><div>Email:- {status.email}</div></div>:<div></div>}
        </>
    )
}