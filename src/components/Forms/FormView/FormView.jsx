import React from 'react'
import FormTest from '../FormComponents/FormTest'
import EmailInput from '../FormComponents/EmailInput'
import TextInput from '../FormComponents/TextInput'
import LargeInput from '../FormComponents/LargeInput'
export default function FormView() {
    return (
        <div>
            <p>Form de prueba</p>
            <FormTest></FormTest>
            <br />
            <br />
            <p>Email Input</p>
            <EmailInput></EmailInput>
            <br />
            <br />
            <TextInput ></TextInput>
            <br />
            <br />
            <LargeInput></LargeInput>
        </div>
    )
}
