import React from 'react'
import propTypes from 'prop-types'
import { Button } from 'react-bootstrap'

// import './TestButton.css'

function FilledButton({ onClickProp, text, variant, styles, type }) {
  return (
    <Button
      type={type || ''}
      bsPrefix={variant}
      style={styles}
      onClick={onClickProp}>
      {' '}
      {text || 'Filled Button'}{' '}
    </Button>
  )
}

FilledButton.propTypes = {
  onClickProp: propTypes.func,
  text: propTypes.string,
  variant: propTypes.string,
  styles: propTypes.object,
  type: propTypes.string
}

export default FilledButton
