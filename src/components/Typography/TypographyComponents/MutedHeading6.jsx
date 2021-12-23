import React from 'react'
import propTypes from 'prop-types'

import './Heading.css'

function MutedHeading6({ color, text, mutedText }) {
  return (
    <div>
      <h6
        style={{ fontSize: '0.9vw', color: color, lineHeight: '27px' }}
        className="test">
        {text || 'Heading6'}
        <small className="text-muted">{mutedText || ' with muted text'}</small>
      </h6>
    </div>
  )
}

MutedHeading6.propTypes = {
  text: propTypes.string,
  color: propTypes.string,
  mutedText: propTypes.string
}

export default MutedHeading6
