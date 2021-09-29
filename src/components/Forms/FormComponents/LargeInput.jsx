import React from 'react'
import {Form,Col,Row} from 'react-bootstrap'
import './FormTest.css'

export default function LargeInput({input_type,label,placeholder,defaultValue,validMsg,required_input,invalidMsg}) {
    return (
        <Row className="mb-3">
            <Form.Group className='form-label' controlId="exampleForm.ControlTextarea1">
                <Form.Label>{ label || 'Large Input'}</Form.Label>
                <Form.Control 
                className='form-input'
                style = {{ background:'#D4D7DA', width:'100%'}}
                required = {required_input || false} 
                as="textarea" 
                placeholder={placeholder || 'Large Input Place Holder'} 
                />
            </Form.Group>
            <Form.Control.Feedback>{validMsg || ' Correcto '}</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid"> {invalidMsg || 'Incorrecto'}</Form.Control.Feedback>
        </Row>
    )
}
