import React, { useState } from 'react'
import ProfileComp from './ProfileComp'
import { privateCompstateType } from '../Component.types'
function LoginComp() {
    function PrivateComp(){
        const [name,setName]=useState<null|privateCompstateType>(null);
        const changePersonName=()=>{
            setName({
                names:"rafiya"
            })
        }
        return(
            <>
               <div>{name?name.names:"person"} is logged in </div>
               <button onClick={changePersonName}>Change person Name</button>
            </>
        )
    }
  return (
    <div>
        <ProfileComp isloggedIn={true} comp={PrivateComp}/>
    </div>
  )
}

export default LoginComp