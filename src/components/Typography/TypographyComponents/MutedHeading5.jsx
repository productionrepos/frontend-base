import React from 'react'
import propTypes from 'prop-types'

import './Heading.css'

function MutedHeading5({ color, text, mutedText }) {
  return (
    <div>
      <h5
        style={{ fontSize: '1.1vw', color: color, lineHeight: '30px' }}
        className="test">
        {text || 'Heading5'}
        <small className="text-muted">{mutedText || ' with muted text'}</small>
      </h5>
    </div>
  )
}

MutedHeading5.propTypes = {
  text: propTypes.string,
  color: propTypes.string,
  mutedText: propTypes.string
}

export default MutedHeading5
