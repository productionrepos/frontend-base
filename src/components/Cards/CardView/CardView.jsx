import React from 'react'
import './CardView.css'

//import {Header} from '../../../shared/header/header'

import Card1 from '../tarjetas/Card1'
// import Card2 from '../tarjetas/Card2'
// import Card3 from '../tarjetas/Card3'
// import Card4 from '../tarjetas/Card4'
// import Card5 from '../tarjetas/Card5'
// import Card6 from '../tarjetas/Card6'
// import Card7 from '../tarjetas/Card7'
// import Card8 from '../tarjetas/Card8'
import Card9 from '../tarjetas/Card9'
// import Card10 from '../tarjetas/Card10'

import { Row,Col,Container } from 'react-bootstrap'


export default function Cards() {

    const body_style = {
        backgroundColor: '#009B78',
        color: '#FFFFFF',
        fontSize:'300px'
    }
    const header_style = {
            backgroundColor: '#008063',
            color:'#FFFFFF'        
    }
    const card_container_style = {
        maxWidth:'20rem'
    }

    const body_style2 = {
        backgroundColor: '#272726',
        color: '#FFFFFF'
    }
    const header_style2 = {
            backgroundColor: '#161613',
            color:'#FFFFFF'        
    }
    const card_container_style2 = {
        maxWidth:'20rem'
    }

    const body_style3 = {
        backgroundColor: '#FDD807',
        color: '#243143'
    }
    const header_style3 = {
        backgroundColor: '#F1CD00',
        color:'#243143'        
    }
    const card_container_style3 = {
        maxWidth:'20rem'
    }

    const body_style4 = {
        backgroundColor: '#EA4335',
        color: '#FFFFFF'
    }
    const header_style4 = {
        backgroundColor: '#D62819',
        color:'#FFFFFF'        
    }
    const card_container_style4 = {
        maxWidth:'20rem'
    }

    const body_style5 = {
        backgroundColor: '#FFFFFF',
        color: '#272726'
    }
    const header_style5 = {
        backgroundColor: 'rgba(0, 155, 120, 0.8)',
        color:'#FFFFFF'        
    }
    const card_container_style5 = {
        border: '3px solid #009B78',
        maxWidth:'20rem'
    }

    const body_style6 = {
        backgroundColor: '#FFFFFF',
        color: '#272726'
    }
    const header_style6 = {
        backgroundColor: 'rgba(39, 39, 38, 0.8)',
        color:'#FFFFFF'        
    }
    const card_container_style6 = {
        border: '3px solid #272726',
        maxWidth: '20rem'
    }

    const body_style7 = {
        backgroundColor: '#FFFFFF',
        color: '#272726'
    }
    const header_style7 = {
        backgroundColor: 'rgba(253, 216, 7, 0.8)',
        color:'#272726'        
    }
    const card_container_style7 = {
        border: '3px solid #FDD807',
        maxWidth: '20rem',
        boxShadow: '4px 4px 24px rgba(0, 0, 0, 0.1)',
        borderRadius: '5px' 
    }

    const body_style8 = {
        backgroundColor: '#FFFFFF',
        color: '#272726'
    }
    const header_style8 = {
        backgroundColor: 'rgba(234, 67, 53, 0.8)',
        color:'#272726'        
    }
    const card_container_style8 = {
        border: '3px solid #EA4335',
        maxWidth: '20rem',
        boxShadow: '4px 4px 24px rgba(0, 0, 0, 0.1)',
        borderRadius: '5px' 
    }

    const body_style9 = {
        backgroundColor: '#009B78',
        color: '#FFFFFF'
    }
    const header_style9 = {
        backgroundColor: '#008063',
        color:'#FFFFFF'        
    }
    const card_container_style9 = {
        maxWidth: '20rem'
    }
    const card_link_style9 = {
        color:'#FFF'
    }

    const body_style10 = {
        backgroundColor: '#FFFFFF',
        color: '#272726'
    }
    const header_style10 = {
        backgroundColor: 'rgba(0, 155, 120, 0.8)',
        color:'#FFFFFF'        
    }
    const card_container_style10 = {
        maxWidth: '20rem'
    }
    const card_link_style10 = {
        color:'#009B78'
    }
    const body_text = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa a voluptas nesciunt eos optio, minus, similique magnam quia laudantium ipsa'

    return (
        <Container style={{marginTop:'9.65%'}}>
            <Row>
                <Col><Card1 headerText='Card1' titleText='Primary Card1 Title' CardContainerStyle={card_container_style} bodyText={body_text} bodyStyle={body_style} headerStyle={header_style}/></Col>
                <Col><Card1 headerText='Card2' titleText='Primary Card2 Title' CardContainerStyle={card_container_style2} bodyStyle={body_style2} headerStyle={header_style2}/></Col>
                <Col><Card1 headerText='Card3' titleText='Primary Card3 Title' CardContainerStyle={card_container_style3} bodyText={body_text} bodyStyle={body_style3} headerStyle={header_style3}/></Col>
                <Col><Card1 headerText='Card4' titleText='Primary Card4 Title' CardContainerStyle={card_container_style4} bodyStyle={body_style4} headerStyle={header_style4}/></Col>
            </Row>

            <Row>
                <Col><Card1 headerText='Card5' titleText='Primary Card5 Title' CardContainerStyle={card_container_style5} bodyText={body_text} bodyStyle={body_style5} headerStyle={header_style5}/></Col>
                <Col><Card1 headerText='Card6' titleText='Primary Card6 Title' CardContainerStyle={card_container_style6} bodyStyle={body_style6} headerStyle={header_style6}/></Col>
                <Col><Card1 headerText='Card7' titleText='Primary Card7 Title' CardContainerStyle={card_container_style7} bodyText={body_text} bodyStyle={body_style7} headerStyle={header_style7}/></Col>
                <Col><Card1 headerText='Card8' titleText='Primary Card8 Title' CardContainerStyle={card_container_style8} bodyStyle={body_style8} headerStyle={header_style8}/></Col>

            </Row>
            <Row>
                <Col><Card9 headerText='Card9' titleText='Primary Card9 Title' CardContainerStyle={card_container_style9} bodyStyle={body_style9} headerStyle={header_style9} linkStyle={card_link_style9}/></Col>
                <Col><Card9 headerText='Card10' titleText='Primary Card10 Title' href='/linkb' href_label='Link B' CardContainerStyle={card_container_style10} bodyStyle={body_style10} headerStyle={header_style10} linkStyle={card_link_style10}/></Col>

            </Row>
        </Container>
    )
}
