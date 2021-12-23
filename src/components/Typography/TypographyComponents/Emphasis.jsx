import React from 'react'
import propTypes from 'prop-types'

// import { Container } from 'react-bootstrap'

function Emphasis({ color, text }) {
  return (
    <div>
      <p className={color || 'text-primary'}>
        {text || 'Nullam id dolor id nibh ultricies vehicula ut id elit.'}
      </p>
    </div>
  )
}

Emphasis.propTypes = {
  color: propTypes.string,
  text: propTypes.string
}

export default Emphasis
