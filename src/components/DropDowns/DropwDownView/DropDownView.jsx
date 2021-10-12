import React from 'react'
import BlackDropdown from '../DropDownComponents/BlackDropdown'

import GreenDropdown from '../DropDownComponents/GreenDropdown'
import RedDropdown from '../DropDownComponents/RedDropdown'
import YellowDropdown from '../DropDownComponents/YellowDropdown'

import { Container,Row,Col } from 'react-bootstrap'




export default function DropDownView() {
    return (
        <Container fluid style={{marginTop:'9.5%'}}>
            <Row>
                <Col>
                    <GreenDropdown/>
                </Col>
                <Col>
                    <YellowDropdown/>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col>
                    <BlackDropdown/>
                </Col>
                <Col>
                    <RedDropdown/>
                </Col>
            </Row>
            
     
        </Container>
    )
}
