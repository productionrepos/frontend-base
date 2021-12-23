import React from 'react'
import propTypes from 'prop-types'
import './Heading.css'

function Heading5({ color, text }) {
  return (
    <h5
      style={{ fontSize: '1.1vw', color: color, lineHeight: '30px' }}
      className="test">
      {text || 'Heading5'}
    </h5>
  )
}

Heading5.propTypes = {
  text: propTypes.string,
  color: propTypes.string
}

export default Heading5
