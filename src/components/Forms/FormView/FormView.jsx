import React from 'react'

import EmailInput from '../FormComponents/EmailInput'
import TextareaInput from '../FormComponents/TextareaInput'
import TextInput from '../FormComponents/TextInput'

import {Container} from 'react-bootstrap'

export default function FormView() {
    return (
        <Container fluid style={{marginTop:'8.5%', width:'50%'}}>
            <form>
            <EmailInput required={true}/>
            <TextInput required={true} input_type='password'/>
            <TextareaInput required={false} valid_msg='Correcto' invalid_msg='Incorrecto'/>
            <Container fluid style={{marginTop:'2%'}}>
                <button type="submit" className="btn btn-primary">Submit</button>
            </Container>
            </form>
        </Container>
    )
}
