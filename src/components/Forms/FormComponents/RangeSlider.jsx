import React from 'react'
import { Form, Container } from 'react-bootstrap'
import './inputs.css'

export default function RangeSlider({minValue,maxValue,stepValue,returnValue}) {
   
    
    function handleChange(event){

        returnValue(event.target.value)
    }

    return (

        <Container style={{marginTop:'5%'}}>     
            <Form.Group>
                <Form.Label>Range</Form.Label>
                <Form.Range 
                min={ minValue || '10' }
                max={ maxValue || '50' }
                step={ stepValue ||  '5' }
                onChange={ handleChange }/>
            </Form.Group>
        </Container>

    )
}
