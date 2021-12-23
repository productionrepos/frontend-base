import React from 'react'
import propTypes from 'prop-types'
import './TestButton.css'
import { Button } from 'react-bootstrap'

function Button2({ onClickProp, text, variant, styles }) {
  return (
    <Button bsPrefix={variant} style={styles} onClick={onClickProp}>
      {' '}
      {text || 'Button2'}
    </Button>
  )
}

Button2.propTypes = {
  onClickProp: propTypes.func,
  text: propTypes.string,
  variant: propTypes.string,
  styles: propTypes.object
}

export default Button2
