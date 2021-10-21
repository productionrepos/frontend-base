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
                    <label className="form-label mt-4 label-text">E-mail</label>
                    <input onChange={handleChange} required={required} type="" 
                    className={ 
                        requerido ?  
                            (email.length === 0) ? 'form-control input-field' : (emailValidation(email)) ? 'form-control input-field is-valid' : 'form-control input-field is-invalid'
                            : (email.length === 0) ? 'form-control input-field' : (emailValidation(email)) ? 'form-control input-field is-valid' : 'form-control input-field is-invalid'   // este es para el caso de que no sea requerido pero si se escribe algun email debe ser valido
                    }
                    id="inputValid"/>
                    <div className="valid-feedback">Correo Valido.</div>
                    <div className="invalid-feedback">Correo Invalido.</div>
                </div>
        </div>
    )
}
