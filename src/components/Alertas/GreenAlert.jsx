import React,{ useState } from 'react'
import {  Modal } from 'react-bootstrap'
import GreenButton from '../Buttons/ButtonComponents/FilledButtons/GreenButton'
import './modal.css'
import WhiteButton from '../Buttons/ButtonComponents/FilledButtons/WhiteButton'
export default function GreenAlert({header,body,label}) {
    const [open, setOpen] = useState(false)
    //console.log(open)

    //cambia el estado
    function handleModal(){
        setOpen(!open)
    }
    return (
        
        <div>
            <GreenButton onClickProp={handleModal}  text='Clickeame'/>
            <Modal className="modalito" show={open} centered aria-labelledby="contained-modal-title-vcenter" >
                <div style={{background:'#FFF', boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.25)', bordeRadius: '5px'}}>
                <Modal.Header bsPrefix='modal-header' style={{ backgroundColor:'#009B78', color:'#FFF'}} > { header || 'Correo no valido'} </Modal.Header>
                <Modal.Body bsPrefix='modal-body' style={{ color:'#000000'}}> { body || 'Para hacer uso de la plataforma Debe ingresar con un correo de SPREAD'} </Modal.Body>
                <Modal.Footer bsPrefix='modal-footer' style={{paddingLeft:'60%'}} >
                    <WhiteButton  onClickProp={handleModal} text='Entiendo'/>
                </Modal.Footer>
                </div>
            </Modal>           
        </div>

    )
}
