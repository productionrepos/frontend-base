import React,{ useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import BlackButton from '../Buttons/ButtonComponents/FilledButtons/BlackButton'
import './modal.css'

export default function BlackAlert({header,body,label}) {
    const [open, setOpen] = useState(false)
    // console.log(open)

    //cambia el estado
    function handleModal(){
        setOpen(!open)
    }
    return (
        
        <div>
            <BlackButton onClickProp={handleModal} text='Clickeame'/>
            <Modal show={open} onHide={()=>handleModal}>
                <div style={{background:'radial-gradient(70% 70% at 50% 50%, #2C2C2C 0%, #2D403B 100%)'}}>
                <Modal.Header bsPrefix='modal-header' style={{color:'#FFF'}} > { header || 'Correo no valido'} </Modal.Header>
                <Modal.Body bsPrefix='modal-body' style={{color:'#FFF'}}> { body ||  'Debe ingresar con una cuenta de Spread'} </Modal.Body>
                <Modal.Footer bsPrefix='modal-footer' >
                    <Button variant='modal' style={{borderStyle:'none'}} onClick={handleModal}>{ label || 'Entiendo'}</Button>
                </Modal.Footer>
                </div>
            </Modal>           
        </div>

    )
}
