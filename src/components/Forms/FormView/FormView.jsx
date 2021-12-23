import React,{useState} from 'react'

import EmailInput from '../FormComponents/EmailInput'
import TextareaInput from '../FormComponents/TextareaInput'
import TextInput from '../FormComponents/TextInput'
import FileInput from '../FormComponents/FileInput'
import RadioButtons from '../FormComponents/RadioButtons'
import RangeSlider from '../FormComponents/RangeSlider'


import {Container, Form} from 'react-bootstrap'

import '../../Buttons/ButtonComponents/TestButton.css'
import Button from '../../Buttons/ButtonComponents/FilledButton'
export default function FormView() {

    function handleMostrar(){
        setMostrar(!mostrar)
    }
    const [mostrar, setMostrar] = useState(false)
    const [correo, setCorreo] = useState('')
    const [textArea, setTextArea] = useState('')
    const [text, setText] = useState('')
    const [radio, setRadio] = useState('')
    const [range, setRange] = useState(0)


    return (
        <Container fluid style={{marginTop:'2%', width:'50%', border: '3px solid #ececec', padding:'5%'}}>
            <Form onSubmit={ (event) => { event.preventDefault(); handleMostrar()}} action='/'>
            <EmailInput required={false } returnValue={setCorreo}/>
            <TextInput required={false} input_type='password' returnValue={setText}/>
            <TextareaInput required={false} valid_msg='Correcto' invalid_msg='Incorrecto' returnValue={setTextArea}/>
            <FileInput returnValue={setRadio}/>
            <RadioButtons/>
            <RangeSlider minValue='10' maxValue='20' stepValue='5' returnValue={setRange}/>
            
            <Container style={{marginTop:'5%'}}>
                <Form.Check 
                    type="switch"
                    id="custom-switch"
                    label="Check this switch"
                />
            </Container >
            
            <Container style={{marginTop:'5%'}}>
                <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
            </Container>

            <Container fluid style={{marginTop:'5%'}}>
                <Button  type='submit' variant='btn-filled' styles={{backgroundColor:'#009B78',color:'#FFFFFF'}} text='Submit'/>
            </Container>
            </Form>

            { mostrar &&  <Container style={{marginTop:'5%'}}> <br/> <p>Email: {correo}</p> <br /> <p> Text: {text}</p> <br /> <p>TextArea: {textArea}</p> <br /> <p>Radio: {radio}</p>
            <br /> <p>Range: {range}</p>
            </Container>}
        </Container>
    )
}
