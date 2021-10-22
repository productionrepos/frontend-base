import React,{ useState } from 'react'
import { Modal } from 'react-bootstrap'
import BlackButton from '../Buttons/ButtonComponents/FilledButtons/BlackButton'
import WhiteButton from '../Buttons/ButtonComponents/FilledButtons/WhiteButton'
import './modal.css'

export default function BlackAlert({header,body,label}) {
    const [open, setOpen] = useState(false)
    // console.log(open)

    //cambia el estado
    function handleModal(){
        setOpen(!open)
    }
    const styles = {
        color: '#FFF',
        border: '3px solid #FFFFFF',
        borderRadius: '2px'
    }
    return (
        
        <div>
            <BlackButton onClickProp={handleModal}  text='Clickeame'/>
            <Modal className="modalito" show={open} centered aria-labelledby="contained-modal-title-vcenter" >
                <div style={{background:'rgba(39, 39, 38, 0.46)', boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.25)', borderRadius: '5px 5px 0px 0px'}}>
                <Modal.Header bsPrefix='modal-header' style={{ backgroundColor:'#272726', color:'#FFF',borderRadius: '5px 5px 0px 0px'}} > { header || 'Correo no valido'} </Modal.Header>
                <Modal.Body bsPrefix='modal-body' style={{ color:'#FFF'}}> { body || 'Para hacer uso de la plataforma Debe ingresar con un correo de SPREAD'} </Modal.Body>
                <Modal.Footer bsPrefix='modal-footer' style={{paddingLeft:'25%'}} >
                    <WhiteButton myStyle= { styles } onClickProp={handleModal} text='Entiendo'/>
                </Modal.Footer>
                </div>
            </Modal>           
        </div>

    )
}
