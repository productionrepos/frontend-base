import React from 'react'
import propTypes from 'prop-types'
import './TestButton.css'

import { Button } from 'react-bootstrap'

function EmptyButton({ onClickProp, text, variant, styles }) {
  return (
    <Button bsPrefix={variant} style={styles} onClick={onClickProp}>
      {' '}
      {text || 'Empty Button'}
    </Button>
  )
}

EmptyButton.propTypes = {
  onClickProp: propTypes.func,
  text: propTypes.string,
  variant: propTypes.string,
  styles: propTypes.object
}

export default EmptyButton
