import React from 'react'

import BlackDropdown from '../DropDownComponents/BlackDropdown'
import GreenDropdown from '../DropDownComponents/GreenDropdown'
import RedDropdown from '../DropDownComponents/RedDropdown'
import YellowDropdown from '../DropDownComponents/YellowDropdown'
// import DropDown from '../DropDownComponents/DropDown'

import { Container,Row,Col } from 'react-bootstrap'




export default function DropDownView() {
    return (
        <Container fluid style={{marginTop:'9.5%'}}>
            <Row>
                <Col>
                    <Container fluid>
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
                {/* <Col>
                    <DropDown label='navlink dropdown'/>
                </Col> */}
            </Row>
            
     
        </Container>
    )
}
