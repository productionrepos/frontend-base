import React, { useState } from 'react'
 
import Calendar from 'react-calendar'
import './calendario.css'
import {Container, Col, Row} from 'react-bootstrap'
import MutedHeading1 from '../Typography/TypographyComponents/MutedHeading1'
import Heading1 from '../Typography/TypographyComponents/Heading1'
export default function Calendarview() {
    const [rango, setRango] = useState(new Date())
    return (
        <Container fluid style={{marginTop:'9.65%',paddingLeft:'35%'}}>
            <Row>
                <Col>
                    <Heading1 text='Seleccione un Rango de Fechas'  />
                    <br />
                    <br />
                    <Calendar  selectRange onChange={ (e)=>{
                        setRango(e)
                    } }></Calendar>                
                </Col>
                { 
                rango.length > 0 && 
                <Row>
                    <Container style={{marginTop:'4%'}}>
                        <MutedHeading1 text = 'Inicio: ' mutedText={rango[0].toDateString()} />
                        <MutedHeading1 text = 'Termino: ' mutedText={rango[1].toDateString()} />
                    </Container>
                </Row>}

            </Row>
        </Container>
    )
}
