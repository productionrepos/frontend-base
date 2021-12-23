import React from 'react'
import { Form, Container } from 'react-bootstrap'


import './inputs.css'


export default function FileInput() {
    return (
        <Container style={{marginTop:'5%'}}>
            <Form.Group controlId="formFileMultiple" className="mb-3">
                <Form.Label>Multiple files input example</Form.Label>
                <Form.Control type="file" multiple />
            </Form.Group>
        </Container>
    )
}
