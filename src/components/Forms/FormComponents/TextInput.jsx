import React, {useState} from 'react'

import './inputs.css'

export default function TextInput({label, required, input_type,returnValue}) {
    
    const [text, setText] = useState('')
    
    const requerido = false || required

    function inputValidation(a){ // revisa que no este vacio
        if(!a || a===''){
            return false;
        }
        return true;
    }

    function handleChange(event){
        // console.log(event.target.value)
        setText(event.target.value)
        if( inputValidation(event.target.value) ){
            console.log('desde text: ',event.target.value  )   
            returnValue(event.target.value)
        }
    }
    //console.log(requerido,inputValidation(text))

    return (
        <div className='container-fluid'>
            <div className="form-group has-success">
                <label className="form-label mt-4 label-text ">{ label || 'label'}</label>
                <input onChange={handleChange} required={requerido} type={input_type ||  'text'}
                className = 
                { 
                    requerido ?   
                        ( !inputValidation(text) ? 'form-control input-field ' : inputValidation(text) ? 'form-control input-field is-valid' : 'form-control input-field is-invalid')
                        : !inputValidation(text) ? 'form-control input-field' : 'form-control input-field is-valid'
                } 
                />
                <div className="valid-feedback">Valido.</div>
                <div className="invalid-feedback">Invalido.</div>
            </div>
        </div>
    )
}
