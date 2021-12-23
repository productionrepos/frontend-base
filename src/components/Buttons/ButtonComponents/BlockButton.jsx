import React from 'react'
import propTypes from 'prop-types'
import './TestButton.css'

import { Button } from 'react-bootstrap'

function BlockButton({ onClickProp, text, variant, styles }) {
  return (
    <Button bsPrefix={variant} style={styles} onClick={onClickProp}>
      {' '}
      {text || 'Block Button'}
    </Button>
  )
}

BlockButton.propTypes = {
  onClickProp: propTypes.func,
  text: propTypes.string,
  variant: propTypes.string,
  styles: propTypes.object
}

export default BlockButton
