import React from 'react'
import propTypes from 'prop-types'

import './Heading.css'

function MutedHeading1({ color, text, mutedText }) {
  return (
    <div>
      <h1
        style={{ fontSize: '1.8vw', lineHeight: '44px', color: color }}
        className="test">
        {text || 'Heading1'}{' '}
        <small className="text-muted">{mutedText || 'with muted text'}</small>
      </h1>
    </div>
  )
}

MutedHeading1.propTypes = {
  text: propTypes.string,
  color: propTypes.string,
  mutedText: propTypes.string
}

export default MutedHeading1
