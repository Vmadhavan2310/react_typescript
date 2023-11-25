import React, { useContext } from 'react'
import { themeObj } from './ThemeProvider'

function Box() {
    const themeValue=useContext(themeObj)
  return (
    <div style={{color:themeValue.primary.color,background:themeValue.primary.backgroundColor}}>Box</div>
  )
}

export default Box