import React,{useState} from 'react'

import './inputs.css'

export default function EmailInput({required}) {
    const requerido = false || required
    const [email, setemail] = useState('')
    function emailValidation(a){
        const regex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if(!a || regex.test(a) === false){
            return false;
        }
        return true;
    }

    function handleChange(event){
        setemail(event.target.value)
        //console.log(emailValidation(event.target.value))
    }

    return (
        <div className='container-fluid'>
                <div className="form-group has-success">
                    <label className="form-label label-text mt-4">E-mail</label>
                    <input onChange={handleChange} required={required} type=""  className={ requerido ? (emailValidation(email) ? 'form-control input-field is-valid' : 'form-control input-field is-invalid') : 'form-control input-field is-valid'  }  id="inputValid"/>
                    <div className="valid-feedback">Correo Valido.</div>
                    <div className="invalid-feedback">Correo Invalido.</div>
                </div>
        </div>
    )
}
