import React from 'react'
import propTypes from 'prop-types'

function Quoteblock({ text, author }) {
  return (
    <div>
      <figure>
        <blockquote className="blockquote">
          <p className="mb-0">
            {text ||
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.'}
          </p>
        </blockquote>
        <figcaption className="blockquote-footer">
          <cite title="Source Title">{author || 'Source Title'}</cite>
        </figcaption>
      </figure>
    </div>
  )
}

Quoteblock.propTypes = {
  text: propTypes.string,
  author: propTypes.string
}

export default Quoteblock
