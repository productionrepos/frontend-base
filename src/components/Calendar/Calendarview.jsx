import React, { useState } from 'react'
 
import Calendar from 'react-calendar'
import './calendario.css'
import {Container, Col, Row} from 'react-bootstrap'
import MutedHeading1 from '../Typography/TypographyComponents/MutedHeading1'
export default function Calendarview() {
    const [rango, setRango] = useState(new Date())
    console.log('rango')    
    for(let i = 0; i < rango.length; i++){
        console.log(rango[i].toDateString())
    }

    return (
        <Container fluid style={{marginTop:'9.65%'}}>
            <Row>
                <Col>
                    <Calendar selectRange onChange={ (e)=>{
                        setRango(e)
                    } }></Calendar>                
                </Col>
                { 
                rango.length > 0 && 
                <Row>
                    <Container>
                        <MutedHeading1 text = 'Inicio: ' mutedText={rango[0].toDateString()} />
                        <MutedHeading1 text = 'Termino: ' mutedText={rango[1].toDateString()} />
   
                    </Container>
                </Row>}

            </Row>
        </Container>
    )
}
