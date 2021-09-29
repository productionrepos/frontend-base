import React, {useState} from 'react'
import {Form, Row, Col, Button, InputGroup} from 'react-bootstrap'
import EmailInput from './EmailInput';
import TextInput from './TextInput'
import LargeInput from './LargeInput';
import './FormTest.css'
export default function FormTest() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
  
    return (
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
            <EmailInput/>
            <TextInput required_input={true} input_type='email' label='email' placeholder='email@ejemplo.com' validMsg='Email Valido' invalidMsg='Email Invalido'/>
            <LargeInput required_input={false}></LargeInput>
        </Row>
        <Button type="submit">Submit form</Button>
      </Form>
    );
  }