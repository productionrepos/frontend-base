import React from 'react'
import propTypes from 'prop-types'

import './Heading.css'

function Heading1({ text, color }) {
  return (
    <h1
      style={{ fontSize: '1.8vw', color: color, lineHeight: '44px' }}
      className="test">
      {text || 'Heading1'}
    </h1>
  )
}

Heading1.propTypes = {
  text: propTypes.string,
  color: propTypes.string
}

export default Heading1
