import React from 'react'
import { positionProps } from './Component.types'
function TemplateLiteral({position}:positionProps) {
  return (
    <div>TemplateLiteral-{position}</div>
  )
}

export default TemplateLiteral