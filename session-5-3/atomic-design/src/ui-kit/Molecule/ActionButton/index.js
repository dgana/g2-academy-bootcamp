import React from 'react'
import Button from 'ui-kit/Atom/Button'

function ActionButton({ primary, secondary }) {
  return (
    <div>
      <Button className="mr2">{primary}</Button>
      <Button type="secondary">{secondary}</Button>
    </div>
  )
}

export default ActionButton
