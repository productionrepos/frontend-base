import React from 'react'
import '../ButtonComponents/TestButton.css'
// import GreenButton from '../ButtonComponents/FilledButtons/GreenButton'
// import WhiteButton from '../ButtonComponents/FilledButtons/WhiteButton'
// import YellowButton from '../ButtonComponents/FilledButtons/YellowButton'
import BlackButton from '../ButtonComponents/FilledButtons/BlackButton'
// import RedButton from '../ButtonComponents/FilledButtons/RedButton'

// import GreenEmptyButton from '../ButtonComponents/EmptyButtons/GreenEmptyButton'
// import GreyEmptyButton from '../ButtonComponents/EmptyButtons/GreyEmptyButton'
// import YellowEmptyButton from '../ButtonComponents/EmptyButtons/YellowEmptyButton'
import BlackEmptyButton from '../ButtonComponents/EmptyButtons/BlackEmptyButton'
// import RedEmptyButton from '../ButtonComponents/EmptyButtons/RedEmptyButton'

import GreenLinkButton from '../ButtonComponents/LinkButtons/GreenLinkButton'
// import GreyLinkButton from '../ButtonComponents/LinkButtons/GreyLinkButton'

// import GreenBlockButton from '../ButtonComponents/BlockButtons/GreenBlockButton'
// import YellowBlockButton from '../ButtonComponents/BlockButtons/YellowBlockButton'

// import CheckBox from '../ButtonComponents/CheckBoxes/CheckBox'

import GreenButton2 from '../ButtonComponents/Buttons/GreenButton2'
// import YellowButton2 from '../ButtonComponents/Buttons/YellowButton2'
// import BlackButton2 from '../ButtonComponents/Buttons/BlackButton2'

import {Container,Row,Col, Button, ButtonGroup} from 'react-bootstrap'


export default function ButtonView() {
    // const clickeado1 = () => {
    //     console.log('clikeado 1')
    // }
    // const clickeado2 = () =>{
    //     console.log('clikeado 2')
    // }
    // const clickeado3 = () =>{
    //     console.log('clikeado 3')
    // }
    // let lista = [
    //     {
    //         onClick:clickeado1,
    //         text:'CheckBoxA',
    //         id:1,
    //         background: '#009B78'
    //     },
    //     {
    //         onClick:clickeado2,
    //         text:'CheckBoxB',
    //         id:2,
    //         background:'rgba(0, 155, 120, 0.93)'
    //     },
    //     {
    //         onClick:clickeado3,
    //         text:'CheckBoxC',
    //         id:3,
    //         background:'rgba(0, 155, 120, 0.86)'
    //     }
    // ]

    return (
        <Container fluid style={{marginTop:'9.65%',marginBottom:'5%'}}>
            <Row style={{textAlign:'center'}}>
                <Col> 
                    <BlackButton variant='btn-filled' styles={{padding:'2% 10%',backgroundColor:'#009B78',color:'#FFFFFF'}} text='Primary'/>    
                </Col>
                <Col>
                    <BlackButton variant='btn-filled' styles={{padding:'2% 10%',backgroundColor:'#272726',color:'#FFFFFF'}} text='Warning'/>                
                </Col>        
                <Col>
                    <BlackButton variant='btn-filled' styles={{padding:'2% 10%',backgroundColor:'#FDD807',color:'#2C2C2C'}} text='Success'/>
                </Col>
            </Row>
            <Row style={{textAlign:'center'}}>
                <Col>
                    <BlackButton variant='btn-filled' styles={{padding:'2% 10%',backgroundColor:'#FDD807',color:'#2C2C2C'}} text='Aceptar'/>
                </Col>
                <Col>
                    <BlackButton variant='btn-filled' styles={{padding:'2% 10%',backgroundColor:'#EA4335',color:'#FFFFFF'}} text='Danger'/>
                </Col>
                <Col>
                    <BlackButton variant='btn-filled' styles={{padding:'2% 10%',backgroundColor:'white',color:'#009B78',borderStyle:'none',boxShadow:'none'}} text='Secondary'/>
                </Col>
            </Row>
            <br />
            <br />
            <Row style={{textAlign:'center'}}>
                <Col>
                    <BlackEmptyButton variant='btn-filled' styles={{padding:'2% 10%',border: '3px solid rgba(0, 155, 120, 0.8)',backgroundColor:'white',boxShadow:'none',color:'#009B78'}} text='Primary'/>
                </Col>
                <Col>
                    <BlackEmptyButton variant='btn-filled' styles={{padding:'2% 10%',border: '3px solid #979797',backgroundColor:'white',boxShadow:'none',color:'#979797'}} text='Secondary' />                
                </Col>        
                <Col>
                    <BlackEmptyButton variant='btn-filled' styles={{padding:'2% 10%',border: '3px solid rgba(253, 216, 7, 0.8)',backgroundColor:'white',boxShadow:'none',color:'#DBC54A'}} text='Success' />
                </Col>
                <Col>
                    <BlackEmptyButton variant='btn-filled' styles={{padding:'2% 10%', border: '3px solid rgba(39, 39, 38, 0.8)',backgroundColor:'white',boxShadow:'none',color:'#272726'}} text='Warning' />
                </Col>
                <Col>
                    <BlackEmptyButton variant='btn-filled' styles={{padding:'2% 10%', border: '3px solid rgba(234, 67, 53, 0.8)',backgroundColor:'white',boxShadow:'none',color:'#EA4335'}} text='Warning' />
                </Col>
            </Row>
            <br />
            <br />
            <Row style={{textAlign:'center'}}>
                <Col><GreenLinkButton variant='btn-link' styles={{borderStyle:'none',backgroundColor:'white',boxShadow:'none',color:'#009B78'}} text='Link'/></Col>
                <Col><GreenLinkButton variant='btn-link' styles={{borderStyle:'none',backgroundColor:'white',boxShadow:'none',color:'#8B8B8B'}} text='Link'/></Col>
            </Row>
            <br />
            <br />
            <Row style={{textAlign:'center'}}>
                <Col>
                    <ButtonGroup aria-label="Basic example">
                        <Button variant='checksito' style={{color:'white', backgroundColor:'#009B78',boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.25)',padding:'10% 20%'}} >Left</Button>
                        <Button variant='checksito' style={{color:'white', backgroundColor:'rgba(0, 155, 120, 0.93)',boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.25)',padding:'10% 20%'}}>Middle</Button>
                        <Button variant='checksito' style={{color:'white', backgroundColor:'rgba(0, 155, 120, 0.86)',boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.25)',padding:'10% 20%'}}>Right</Button>
                    </ButtonGroup>
                </Col>
            </Row>
            <br />
            <br />
            <Row style={{textAlign:'center'}}>
                <Col>
                    <Button bsPrefix='btn-block' style={{borderStyle:'none',background:'radial-gradient(50% 50% at 50% 50%, #009B78 0%, #357B6B 100%)',boxShadow:'none',color:'#FFFFFF'}}>BLOCK BUTTON</Button>
                </Col>
                <Col>    
                    <Button bsPrefix='btn-block' style={{borderStyle:'none',background:'radial-gradient(50% 50% at 50% 50%, #FDD807 0%, #FBBC05 100%)',boxShadow:'none',color:'#FFFFFF'}}>BLOCK BUTTON</Button>
                </Col>
            </Row>
            <br />
            <br />


            <Row style={{textAlign:'center'}}>
                <Col>
                    <GreenButton2 variant='checksito' styles={{color:'white', backgroundColor:'#009B78',boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.25)',padding:'5% 10%',borderStyle:'none'}} text='Button' />
                </Col>
                <Col>
                    <GreenButton2 variant='checksito' styles={{color:'#272726', backgroundColor:'#FDD807',boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.25)',padding:'5% 10%',borderStyle:'none'}} text='Button' />
                </Col>
                <Col>
                    <GreenButton2 variant='checksito' styles={{color:'#FFFFFF', backgroundColor:'#272726',boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.25)',padding:'5% 10%',borderStyle:'none'}} text='Button' />
                </Col>
            </Row>
        </Container>


    )
}