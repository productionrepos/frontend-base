import React from 'react'

import GreenButton from '../ButtonComponents/FilledButtons/GreenButton'
import WhiteButton from '../ButtonComponents/FilledButtons/WhiteButton'
import YellowButton from '../ButtonComponents/FilledButtons/YellowButton'
import BlackButton from '../ButtonComponents/FilledButtons/BlackButton'
import RedButton from '../ButtonComponents/FilledButtons/RedButton'

import GreenEmptyButton from '../ButtonComponents/EmptyButtons/GreenEmptyButton'
import GreyEmptyButton from '../ButtonComponents/EmptyButtons/GreyEmptyButton'
import YellowEmptyButton from '../ButtonComponents/EmptyButtons/YellowEmptyButton'
import BlackEmptyButton from '../ButtonComponents/EmptyButtons/BlackEmptyButton'
import RedEmptyButton from '../ButtonComponents/EmptyButtons/RedEmptyButton'

import GreenLinkButton from '../ButtonComponents/LinkButtons/GreenLinkButton'
import GreyLinkButton from '../ButtonComponents/LinkButtons/GreyLinkButton'

import GreenBlockButton from '../ButtonComponents/BlockButtons/GreenBlockButton'
import YellowBlockButton from '../ButtonComponents/BlockButtons/YellowBlockButton'

import CheckBox from '../ButtonComponents/CheckBoxes/CheckBox'

import GreenButton2 from '../ButtonComponents/Buttons/GreenButton2'
import YellowButton2 from '../ButtonComponents/Buttons/YellowButton2'
import BlackButton2 from '../ButtonComponents/Buttons/BlackButton2'

import {Container,Row,Col} from 'react-bootstrap'

export default function ButtonView() {
    return (
        <Container fluid style={{marginTop:'9.65%'}}>
            <Row>
                <Col  >
                    <GreenButton/>
                </Col>
                <Col>
                    <WhiteButton/>
                </Col>
                <Col>
                    <YellowButton/>
                </Col>
                <Col>
                    <BlackButton/>
                </Col>

            </Row>
            <br />
            <Row >
                <Col>
                    <RedButton/>                
                </Col>
                <Col>
                    <GreenEmptyButton/>
                </Col>
                <Col>
                    <GreyEmptyButton/>
                </Col>
                <Col>
                    <YellowEmptyButton/>
                </Col>


            </Row>
            <br />
            <Row>
                <Col>
                    <BlackEmptyButton/>    
                </Col>
                <Col>
                    <RedEmptyButton/>
                </Col>
                <Col>
                    <GreenLinkButton/>
                </Col>
                <Col>
                    <GreyLinkButton/>
                </Col>

            </Row>
            <br />
            <Row>
                <Col>
                    <GreenButton2/>    
                </Col>
                <Col>
                    <YellowButton2/>
                </Col>
                <Col>
                    <BlackButton2/>
                </Col>
    
            </Row>
            <br />
            <Row>
                <Col>
                    <CheckBox/>                
                </Col>

            </Row>
            <br />
            <Row>
                <Col>
                    <GreenBlockButton/>    
                </Col>
            </Row>
            <br />
            <Row>
                <Col>
                    <YellowBlockButton/>    
                </Col>
            </Row>

        </Container>
    )
}