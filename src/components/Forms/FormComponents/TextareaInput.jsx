import React,{ useState } from 'react'

import './inputs.css'

export default function TextareaInput({label, required, input_type}) {
    
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

    return (
        <div className='container-fluid'>
            <label htmlFor="exampleTextarea" className="form-label mt-4 label-text">Example textarea</label>
            <textarea  onChange={handleChange} required={requerido} id="exampleTextarea" rows="3" className={ requerido ?   (inputValidation(text) ? 'form-control is-valid' : 'form-control is-invalid') : 'form-control is-valid' }></textarea>
        </div>
    )
}
