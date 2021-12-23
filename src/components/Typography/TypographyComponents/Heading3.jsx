import React from 'react'
import propTypes from 'prop-types'
import './Heading.css'

function Heading3({ color, text }) {
  return (
    <h3
      style={{ fontSize: '1.5vw', color: color, lineHeight: '35px' }}
      className="test">
      {text || 'Heading3'}
    </h3>
  )
}

Heading3.propTypes = {
  text: propTypes.string,
  color: propTypes.string
}

export default Heading3
