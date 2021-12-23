import React from 'react'

import { Button, ButtonGroup } from 'react-bootstrap'
import propTypes from 'prop-types'
import './TestButton.css'

function CheckboxButton({ text, variant }) {
  return (
    <ButtonGroup aria-label="Basic example">
      <Button
        variant={variant}
        style={{
          color: 'white',
          backgroundColor: '#009B78',
          boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.25)',
          padding: '10% 20%'
        }}>
        {text || 'Left'}
      </Button>
      <Button
        variant={variant}
        style={{
          color: 'white',
          backgroundColor: 'rgba(0, 155, 120, 0.93)',
          boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.25)',
          padding: '10% 20%'
        }}>
        Middle
      </Button>
      <Button
        variant={variant}
        style={{
          color: 'white',
          backgroundColor: 'rgba(0, 155, 120, 0.86)',
          boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.25)',
          padding: '10% 20%'
        }}>
        Right
      </Button>
    </ButtonGroup>
  )
}

CheckboxButton.propTypes = {
  text: propTypes.string,
  variant: propTypes.string
}

export default CheckboxButton
