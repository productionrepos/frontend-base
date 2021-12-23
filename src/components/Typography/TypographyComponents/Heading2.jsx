import React from 'react'
import propTypes from 'prop-types'
import './Heading.css'

function Heading2({ text, color }) {
  return (
    <h2
      style={{ fontSize: '1.6vw', color: color, lineHeight: '38px' }}
      className="test">
      {text || 'Heading2'}
    </h2>
  )
}

Heading2.propTypes = {
  text: propTypes.string,
  color: propTypes.string
}

export default Heading2
