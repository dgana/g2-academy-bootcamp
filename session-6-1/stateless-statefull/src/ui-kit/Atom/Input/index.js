import React from 'react'
import PropTypes from 'prop-types'

function Input({ label, type, value, placeholder, name, onChange }) {
  return (
    <>
      <label className="dib w3">{label}</label>
      <span className="mr2">:</span>
      <input
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(['text', 'number']),
  value: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func
}

export default Input
