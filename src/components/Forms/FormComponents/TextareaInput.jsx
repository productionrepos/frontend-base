import React,{ useState } from 'react'

import './inputs.css'

export default function TextareaInput({label, required, valid_msg, invalid_msg,returnValue}) {
    
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
        if( inputValidation(event.target.value) ){
            console.log('desde textArea: ',event.target.value  )   
            returnValue(event.target.value)
        }
        //console.log(event.target.value.length)
    }

    return (
        <div className='container-fluid'>
            <label htmlFor="exampleTextarea" className="form-label mt-4 label-text">{ label || 'Example textarea'}</label>
            <textarea  onChange={handleChange} required={requerido} id="exampleTextarea" rows="3" 
            className = 
            { 
                requerido ?   
                    ( !inputValidation(text) ? 'form-control input-field ' : inputValidation(text) ? 'form-control input-field is-valid' : 'form-control input-field is-invalid')
                    : !inputValidation(text) ? 'form-control input-field' : 'form-control input-field is-valid'
            } 
            >
            </textarea>
            { requerido && <div className="valid-feedback">{ valid_msg || 'Valido'}</div> }
            { requerido && <div className="invalid-feedback">{ invalid_msg ||  'Invalido'}</div> }
        </div>
    )
}
