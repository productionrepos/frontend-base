import React,{ useState } from 'react'
import {  Modal } from 'react-bootstrap'
import './modal.css'
import Button from '../Buttons/ButtonComponents/FilledButtons/BlackButton'
export default function GreenAlert({header,body,mostrar,getOpen}) {
    const [open, setOpen] = useState(false)

    function handleModal(){ // funcion que setea el el open en falso para que el modal se cierre
        setOpen(false)   // se setea falso
        getOpen(open) // le pasa el valor actual del open(false) al componente padre
    }
    return (
        
        <div>
            <Modal className="modalito" show={mostrar} centered aria-labelledby="contained-modal-title-vcenter" >
                <div style={{background:'#FFF', boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.25)', bordeRadius: '5px'}}>
                <Modal.Header bsPrefix='modal-header' style={{ backgroundColor:'#009B78', color:'#FFF'}} > { header || 'Correo no valido'} </Modal.Header>
                <Modal.Body bsPrefix='modal-body' style={{ color:'#000000'}}> { body || 'Para hacer uso de la plataforma Debe ingresar con un correo de SPREAD'} </Modal.Body>
                <Modal.Footer bsPrefix='modal-footer' style={{paddingLeft:'60%'}} >
                    <Button onClickProp={handleModal} variant='btn-filled' styles={{backgroundColor:'white',color:'#009B78',borderStyle:'none',boxShadow:'none'}} text='Entiendo'/>

                </Modal.Footer>
                </div>
            </Modal>           
        </div>

    )
}
