import React from 'react'

import {Container, Row, Col, Form} from 'react-bootstrap'

import './inputs.css'

export default function RadioButtons({returnValue}) {
    

    
    function handleChange(event){
        console.log(event.target.value)
        returnValue(event.target.value)
        // returnValue(event.target.value)
    }
    return (
        <Container style={{marginTop:'5%'}}>
            <fieldset >
                <Form.Group as={Row} className="mb-3"  onChange={handleChange}>
                <Form.Label as="legend"  sm={1} style={{marginRight:'10%'}}>
                    Radios
                </Form.Label>
                <Col sm={10}>
                    <Form.Check
                    type="radio"
                    label="first radio"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                    value='prueba1'
                    />
                    <Form.Check
                    type="radio"
                    label="second radio"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                    value='prueba2'
                    />
                    <Form.Check
                    type="radio"
                    label="third radio"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios3"
                    value='prueba3'
                    />
                </Col>
                </Form.Group>
            </fieldset>
        </Container>
    )
}
