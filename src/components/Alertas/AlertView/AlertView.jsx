import React,{useState} from 'react'
import GreenAlert from '../GreenAlert'

import { Container, Row, Col } from 'react-bootstrap'
import Button from '../../Buttons/ButtonComponents/FilledButtons/BlackButton'
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
        <Container fluid style={{marginTop:'9.5%',marginLeft:'17%'}}>
            <Row>
                <Col>
                    <Button variant='btn-filled' text='Clickeame' styles={{backgroundColor:'#009B78',color:'#FFFFFF'}} onClickProp={firstClick}/>
                    <GreenAlert mostrar={mostrar} getOpen={mostrarHandle}/>
                </Col>
            </Row>
        </Container>
    )
}
