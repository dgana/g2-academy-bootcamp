import React from 'react'

function Img({ src, alt, ...restProps }) {
  return <img src={src} alt={alt} {...restProps} />
}

export default Img
