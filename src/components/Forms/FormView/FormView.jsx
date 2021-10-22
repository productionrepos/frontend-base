import React from 'react'

import EmailInput from '../FormComponents/EmailInput'
import TextareaInput from '../FormComponents/TextareaInput'
import TextInput from '../FormComponents/TextInput'
import FileInput from '../FormComponents/FileInput'
import {Container} from 'react-bootstrap'

export default function FormView() {
    return (
        <Container fluid style={{marginTop:'8.5%', width:'50%', border: '3px solid black', padding:'5%'}}>
            <form>
            <EmailInput required={false}/>
            <TextInput required={false} input_type='password'/>
            <TextareaInput required={false} valid_msg='Correcto' invalid_msg='Incorrecto'/>
            <FileInput/>
            <Container fluid style={{marginTop:'2%'}}>
                <button type="submit" className="btn btn-primary">Submit</button>
            </Container>
            </form>
        </Container>
    )
}
