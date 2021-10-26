import React,{useState} from 'react'

import EmailInput from '../FormComponents/EmailInput'
import TextareaInput from '../FormComponents/TextareaInput'
import TextInput from '../FormComponents/TextInput'
import FileInput from '../FormComponents/FileInput'
import {Container, Form} from 'react-bootstrap'

import '../../Buttons/ButtonComponents/TestButton.css'
import Button from '../../Buttons/ButtonComponents/FilledButtons/BlackButton'
export default function FormView() {

    function handleMostrar(){
        setMostrar(!mostrar)
    }
    const [mostrar, setMostrar] = useState(false)
    const [correo, setCorreo] = useState('')
    const [textArea, setTextArea] = useState('')
    const [text, setText] = useState('')




    return (
        <Container fluid style={{marginTop:'2%', width:'50%', border: '3px solid black', padding:'5%'}}>
            <Form onSubmit={ (event) => { event.preventDefault(); handleMostrar()}} action='/'>
            <EmailInput required={false } returnValue={setCorreo}/>
            <TextInput required={false} input_type='password' returnValue={setText}/>
            <TextareaInput required={false} valid_msg='Correcto' invalid_msg='Incorrecto' returnValue={setTextArea}/>
            <FileInput/>
            <Container fluid style={{marginTop:'2%'}}>
                <Button  type='submit' variant='btn-filled' styles={{backgroundColor:'#009B78',color:'#FFFFFF'}} text='Submit'/>
            </Container>
            </Form>

            { mostrar &&  <Container> <br/> <p>Email: {correo}</p> <br /> <p> Text: {text}</p> <br /> <p>TextArea: {textArea}</p></Container>}
        </Container>
    )
}
