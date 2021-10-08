import React from 'react'

import EmailInput from '../FormComponents/EmailInput'
import TextareaInput from '../FormComponents/TextareaInput'
import TextInput from '../FormComponents/TextInput'

import {Container} from 'react-bootstrap'

export default function FormView() {
    return (
        <Container fluid style={{marginTop:'8.5%'}}>
            <form>
            <EmailInput required={true}/>
            <TextInput required={true} input_type='password'/>
            <TextareaInput/>
            <div className='container-fluid'>
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
            </form>
        </Container>
    )
}
