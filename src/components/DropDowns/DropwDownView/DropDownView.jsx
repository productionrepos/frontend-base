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
                    <Container fluid style={{backgroundColor:'red',height:'auto'}}>
                    <GreenDropdown/>
                    </Container>
                </Col>
                <Col>
                    <YellowDropdown/>
                </Col>
            </Row>
            <Row style={{marginTop:'20%'}}>
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
