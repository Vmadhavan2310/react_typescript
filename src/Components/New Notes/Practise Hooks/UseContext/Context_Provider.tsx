import React, { useState } from 'react'
import { Child1 } from './Child1';



export const Context=React.createContext('')
function Context_Provider() {
    const [name,setName]=useState('vinoth');
  return (
    <>
    <div>Context_Provider</div>
    <Context.Provider value={name}>
        <button onClick={()=>setName('Mike williams')}>Change Name</button>
    <Child1/>
    </Context.Provider>
    </>

  )
}

export default Context_Provider;