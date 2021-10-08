import React from 'react'
import './CardView.css'

//import {Header} from '../../../shared/header/header'

import Card1 from '../tarjetas/Card1'
import Card2 from '../tarjetas/Card2'
import Card3 from '../tarjetas/Card3'
import Card4 from '../tarjetas/Card4'
import Card5 from '../tarjetas/Card5'
import Card6 from '../tarjetas/Card6'
import Card7 from '../tarjetas/Card7'
import Card8 from '../tarjetas/Card8'
import Card9 from '../tarjetas/Card9'
import Card10 from '../tarjetas/Card10'

import { Row,Col,Container } from 'react-bootstrap'

export default function Cards() {
    return (
        // <div  className='grid-container'>
        //     <div className='item1'><Card1/></div>
        //     <div className='item2'><Card2/></div>
        //     <div className='item3'><Card3/></div>
        //     <div className='item4'><Card4/></div>
        //     <div className='item5'><Card5/></div>
        //     <div className='item6'><Card6/></div>
        //     <div className='item7'><Card7/></div>
        //     <div className='item8'><Card8/></div>
        //     <div className='item9'><Card9/></div>
        //     <div className='item10'><Card10/></div>
        // </div>
        <Container style={{marginTop:'9.65%'}}>
            <Row>
                <Col><Card1/></Col>
                <Col><Card2/></Col>
                <Col><Card3/></Col>
            </Row>
            <Row>
                <Col><Card4/></Col>
                <Col><Card5/></Col>
                <Col><Card6/></Col>
            </Row>
            <Row>
                <Col><Card7/></Col>
                <Col><Card8/></Col>
                <Col><Card9/></Col>
            </Row>
            <Row>
                <Col><Card10/></Col>

            </Row>
        </Container>
    )
}
