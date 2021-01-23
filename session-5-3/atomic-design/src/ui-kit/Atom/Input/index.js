import React from 'react'

function Input({ value, setValue, placeholder }) {
  return (
    <input
      type="text"
      onChange={setValue}
      value={value}
      placeholder={placeholder}
    />
  )
}

export default Input
