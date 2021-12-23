import React from 'react'
import propTypes from 'prop-types'

import './Heading.css'

function MutedHeading4({ color, text, mutedText }) {
  return (
    <div>
      <h4
        style={{ fontSize: '1.3vw', color: color, lineHeight: '33px' }}
        className="test">
        {text || 'Heading4'}
        <small className="text-muted">{mutedText || ' with muted text'}</small>
      </h4>
    </div>
  )
}

MutedHeading4.propTypes = {
  text: propTypes.string,
  color: propTypes.string,
  mutedText: propTypes.string
}

export default MutedHeading4
