import React, {useState} from 'react'
import {Form,Col,Row} from 'react-bootstrap'
import './FormTest.css'

export default function EmailInput({type,label,placeholder,defaultValue,correctMsg,required_input,incorrectMSg}) {
    return (
        <Row className="mb-3">
            <Form.Group className='form-label' as={Col} md="4" controlId="validationCustom01">
                <Form.Label>{label || 'email'}</Form.Label>
                <Form.Control
                style = {{ background:'#D4D7DA'}}
                className='form-input'
                required
                type="email"
                placeholder="email@examlpe.com"
                />
                <Form.Control.Feedback type="invalid">Debe Igresar un correo valido</Form.Control.Feedback>
                <Form.Control.Feedback>Email    Correcto</Form.Control.Feedback>
            </Form.Group>
        </Row>
    )
}
