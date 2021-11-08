import React,{useState} from 'react'
import GreenAlert from '../GreenAlert'
import Button from '../../Buttons/ButtonComponents/FilledButton'
import Alerta2 from '../Alerta2'
import { Container, Row, Col } from 'react-bootstrap'

import '../../Buttons/ButtonComponents/TestButton.css'

export default function AlertView() {
    
    const [mostrar, setMostrar] = useState(false)

    function mostrarHandle(valor){ // funcion que recibe el valor de mostrar desde el componente modal -> que deberia ser un falso
        setMostrar(valor) // setea el falso
    }

    function firstClick(){ // cambia el mostrar a true para que el modal se active
        setMostrar(true)
    }
    return (
        <Container fluid style={{marginTop:'9.5%',paddingLeft:'17%'}}>
            <Row>
                <Col>
                    <Button variant='btn-filled' text='Clickeame' styles={{backgroundColor:'#009B78',color:'#FFFFFF'}} onClickProp={firstClick}/>
                    <GreenAlert mostrar={mostrar} getOpen={mostrarHandle}/>
                </Col>
                <Col>
                    <Alerta2 text='Debe ingresar con una cuenta de Spread' title='Correo Invalido'/>
                </Col>
            </Row>
        </Container>
    )
}
