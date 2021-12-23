import React from 'react'
import propTypes from 'prop-types'

import './Heading.css'

function MutedHeading2({ color, text, mutedText }) {
  return (
    <div>
      <h2
        style={{ fontSize: '1.6vw', lineHeight: '38px', color: color }}
        className="test">
        {text || 'Heading2'}
        <small className="text-muted">{mutedText || ' with muted text'}</small>
      </h2>
    </div>
  )
}

MutedHeading2.propTypes = {
  text: propTypes.string,
  color: propTypes.string,
  mutedText: propTypes.string
}

export default MutedHeading2
