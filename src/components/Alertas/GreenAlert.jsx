import React,{ useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import GreenButton from '../Buttons/ButtonComponents/FilledButtons/GreenButton'
import './modal.css'

export default function GreenAlert({header,body,label}) {
    const [open, setOpen] = useState(false)
    //console.log(open)

    //cambia el estado
    function handleModal(){
        setOpen(!open)
    }
    return (
        
        <div>
            <GreenButton onClickProp={handleModal} text='Clickeame'/>
            <Modal  show={open} >
                <div style={{background:'radial-gradient(70% 70% at 50% 50%, #009B78 0%, #357B6B 100%)'}}>
                <Modal.Header bsPrefix='modal-header' style={{color:'#FFF'}} > { header || 'Correo no valido'} </Modal.Header>
                <Modal.Body bsPrefix='modal-body' style={{color:'#FFF'}}> { body || 'Debe ingresar con una cuenta de Spread'} </Modal.Body>
                <Modal.Footer bsPrefix='modal-footer' >
                    <Button variant='modal' onClick={handleModal}>{ label || 'Entiendo'}</Button>
                </Modal.Footer>
                </div>
            </Modal>           
        </div>

    )
}
