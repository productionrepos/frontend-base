import React from 'react'
import GreenAlert from '../GreenAlert'

import { Container, Row, Col } from 'react-bootstrap'
import BlackAlert from '../BlackAlert'

export default function AlertView() {


    
    return (
        <Container fluid style={{marginTop:'9.5%'}}>
            <Row>
                <Col>
                    <GreenAlert/>
                </Col>
                <Col>
                    <BlackAlert header='titulo' body='mensaje de prueba' label='prueba'/>
                </Col>
            </Row>
        </Container>
    )
}
