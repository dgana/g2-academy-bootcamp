import React from 'react'
import BtnStyle from './Button.module.css'
import PropTypes from 'prop-types'

function Button({ children, type, className, btnType }) {
  const cn = type === 'primary' ? BtnStyle.primary : BtnStyle.secondary
  return (
    <button type={btnType} className={`${BtnStyle.btn} ${cn} ${className}`}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(['primary', 'secondary']),
  className: PropTypes.string,
  btnType: PropTypes.string
}

Button.defaultProps = {
  type: 'primary'
}

export default Button
