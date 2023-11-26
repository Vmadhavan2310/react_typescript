import React from 'react'
import { ProfileProps } from '../Component.types'

function ProfileComp({isloggedIn,comp:Comp}:ProfileProps) {
  return (
    <div>
        {isloggedIn?
        <Comp/>:
        <h3>Person not logged in</h3>
        }
    </div>
  )
}

export default ProfileComp