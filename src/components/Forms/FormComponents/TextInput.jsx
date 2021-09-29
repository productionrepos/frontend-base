import React from 'react'
import {Form,Col, Row} from 'react-bootstrap'
import './FormTest.css'

export default function TextInput({input_type,label,placeholder,defaultValue,validMsg,required_input,invalidMsg}) {
    return (
        <Row className="mb-3">
            <Form.Group className='form-label' as={Col} md="4" controlId="validationCustom02">
                <Form.Label>{ label || 'label' }</Form.Label>
                <Form.Control
                className='form-input'
                style = {{ background:'#D4D7DA'}}
                required = { required_input || false }
                type={ input_type || 'text'}
                placeholder={ placeholder || 'placeholder'}
                />
                <Form.Control.Feedback>{validMsg || ' Correcto '}</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid"> {invalidMsg || 'Incorrecto'}</Form.Control.Feedback>
            </Form.Group>
        </Row>
    )
}
