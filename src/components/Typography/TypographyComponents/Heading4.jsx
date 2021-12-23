import React from 'react'
import propTypes from 'prop-types'
import './Heading.css'

function Heading4({ color, text }) {
  return (
    <h4
      style={{ fontSize: '1.3vw', color: color, lineHeight: '33px' }}
      className="test">
      {text || 'Heading4'}
    </h4>
  )
}

Heading4.propTypes = {
  text: propTypes.string,
  color: propTypes.string
}

export default Heading4
