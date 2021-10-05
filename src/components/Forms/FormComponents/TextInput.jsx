import React, {useState} from 'react'

import './inputs.css'

export default function TextInput({label, required, input_type}) {
    
    const [text, setText] = useState('')
    const requerido = false || required
    function inputValidation(a){
        if(!a || a===''){
            return false;
        }
        return true;
    }

    function handleChange(event){
        // console.log(event.target.value)
        setText(event.target.value)
        console.log(event.target.value.length)
    }
    console.log(requerido,inputValidation(text))

    return (
        <div className='container-fluid'>
            <div className="form-group has-success">
                <label className="form-label mt-4 label-text">{ label || 'label'}</label>
                <input  onChange={handleChange} required={requerido} type={input_type ||  'text'} className={ requerido ?   (inputValidation(text) ? 'form-control is-valid' : 'form-control is-invalid') : 'form-control is-valid' } />
                <div className="valid-feedback">Valido.</div>
                <div className="invalid-feedback">Invalido.</div>
            </div>
        </div>
    )
}
