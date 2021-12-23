import React from 'react'
import propTypes from 'prop-types'
import { Form, Container } from 'react-bootstrap'
import './inputs.css'

function RangeSlider({ minValue, maxValue, stepValue, returnValue }) {
  function handleChange(event) {
    returnValue(event.target.value)
  }

  return (
    <Container style={{ marginTop: '5%' }}>
      <Form.Group>
        <Form.Label>Range</Form.Label>
        <Form.Range
          min={minValue || '10'}
          max={maxValue || '50'}
          step={stepValue || '5'}
          onChange={handleChange}
        />
      </Form.Group>
    </Container>
  )
}

RangeSlider.propTypes = {
  minValue: propTypes.string,
  maxValue: propTypes.string,
  stepValue: propTypes.string,
  returnValue: propTypes.func.isRequired
}

export default RangeSlider
