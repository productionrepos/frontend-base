import React from 'react'
import propTypes from 'prop-types'
import { Button } from 'react-bootstrap'

import './TestButton.css'

function LinkButton({ onClickProp, text, variant, styles }) {
  return (
    <Button bsPrefix={variant} style={styles} onClick={onClickProp}>
      {' '}
      {text || 'Black Button'}
    </Button>
  )
}

LinkButton.propTypes = {
  onClickProp: propTypes.func,
  text: propTypes.string,
  variant: propTypes.string,
  styles: propTypes.object
}

export default LinkButton
