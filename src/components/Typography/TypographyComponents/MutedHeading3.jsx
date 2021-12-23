import React from 'react'
import propTypes from 'prop-types'

import './Heading.css'

function MutedHeading3({ color, text, mutedText }) {
  return (
    <div>
      <h3
        style={{ fontSize: '1.5vw', color: color, lineHeight: '35px' }}
        className="test">
        {text || 'Heading3'}
        <small className="text-muted">{mutedText || 'with muted text'}</small>
      </h3>
    </div>
  )
}

MutedHeading3.propTypes = {
  text: propTypes.string,
  color: propTypes.string,
  mutedText: propTypes.string
}

export default MutedHeading3
