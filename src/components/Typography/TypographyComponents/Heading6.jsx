import React from 'react'
import propTypes from 'prop-types'
import './Heading.css'

function Heading6({ color, text }) {
  return (
    <h6
      style={{ fontSize: '0.9vw', color: color, lineHeight: '27px' }}
      className="test">
      {text || 'Heading6'}
    </h6>
  )
}

Heading6.propTypes = {
  text: propTypes.string,
  color: propTypes.string
}

export default Heading6
