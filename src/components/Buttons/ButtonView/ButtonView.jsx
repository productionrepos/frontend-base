import React from 'react'
import '../ButtonComponents/TestButton.css'

import FilledButton from '../ButtonComponents/FilledButton'
import EmptyButton from '../ButtonComponents/EmptyButton'
import LinkButton from '../ButtonComponents/LinkButton'
import BlockButton from '../ButtonComponents/BlockButton'
import CheckboxButton from '../ButtonComponents/CheckboxButton'
import Button2 from '../ButtonComponents/Button2'

import {Container,Row,Col} from 'react-bootstrap'


export default function ButtonView() {

    return (
        <Container fluid style={{marginTop:'9.65%',marginBottom:'5%'}}>

            <Row style={{textAlign:'center'}}>
                <Col> 
                    <FilledButton variant='btn-filled' styles={{padding:'2% 10%',backgroundColor:'#009B78',color:'#FFFFFF'}} text='Primary'/>    
                </Col>
                <Col>
                    <FilledButton variant='btn-filled' styles={{padding:'2% 10%',backgroundColor:'#272726',color:'#FFFFFF'}} text='Warning'/>                
                </Col>        
                <Col>
                    <FilledButton variant='btn-filled' styles={{padding:'2% 10%',backgroundColor:'#FDD807',color:'#2C2C2C'}} text='Success'/>
                </Col>
            </Row>
            <Row style={{textAlign:'center'}}>
                <Col>
                    <FilledButton variant='btn-filled' styles={{padding:'2% 10%',backgroundColor:'#FDD807',color:'#2C2C2C'}} text='Aceptar'/>
                </Col>
                <Col>
                    <FilledButton variant='btn-filled' styles={{padding:'2% 10%',backgroundColor:'#EA4335',color:'#FFFFFF'}} text='Danger'/>
                </Col>
                <Col>
                    <FilledButton variant='btn-filled' styles={{padding:'2% 10%',backgroundColor:'white',color:'#009B78',borderStyle:'none',boxShadow:'none'}} text='Secondary'/>
                </Col>
            </Row>
            <br />
            <br />
            <Row style={{textAlign:'center'}}>
                <Col>
                    <EmptyButton variant='btn-filled' styles={{padding:'2% 10%',border: '3px solid rgba(0, 155, 120, 0.8)',backgroundColor:'white',boxShadow:'none',color:'#009B78'}} text='Primary'/>
                </Col>
                <Col>
                    <EmptyButton variant='btn-filled' styles={{padding:'2% 10%',border: '3px solid #979797',backgroundColor:'white',boxShadow:'none',color:'#979797'}} text='Secondary' />                
                </Col>        
                <Col>
                    <EmptyButton variant='btn-filled' styles={{padding:'2% 10%',border: '3px solid rgba(253, 216, 7, 0.8)',backgroundColor:'white',boxShadow:'none',color:'#DBC54A'}} text='Success' />
                </Col>
                <Col>
                    <EmptyButton variant='btn-filled' styles={{padding:'2% 10%', border: '3px solid rgba(39, 39, 38, 0.8)',backgroundColor:'white',boxShadow:'none',color:'#272726'}} text='Warning' />
                </Col>
                <Col>
                    <EmptyButton variant='btn-filled' styles={{padding:'2% 10%', border: '3px solid rgba(234, 67, 53, 0.8)',backgroundColor:'white',boxShadow:'none',color:'#EA4335'}} text='Warning' />
                </Col>
            </Row>
            <br />
            <br />
            <Row style={{textAlign:'center'}}>
                <Col><LinkButton variant='btn-link' styles={{borderStyle:'none',backgroundColor:'white',boxShadow:'none',color:'#009B78'}} text='Link'/></Col>
                <Col><LinkButton variant='btn-link' styles={{borderStyle:'none',backgroundColor:'white',boxShadow:'none',color:'#8B8B8B'}} text='Link'/></Col>
            </Row>
            <br />
            <br />
            <Row style={{textAlign:'center'}}>
                <Col>
                    <CheckboxButton variant='Primary'/>
                </Col>
            </Row> 
            <br />
            <br />
            <Row style={{textAlign:'center'}}>
                <Col>
                    <BlockButton variant='btn-block' styles={{borderStyle:'none',background:'radial-gradient(50% 50% at 50% 50%, #009B78 0%, #357B6B 100%)',boxShadow:'none',color:'#FFFFFF'}} text='Green Block Button'/>
                </Col>
                <Col>    
                    <BlockButton variant='btn-block' styles={{borderStyle:'none',background:'radial-gradient(50% 50% at 50% 50%, #FDD807 0%, #FBBC05 100%)',boxShadow:'none',color:'#FFFFFF'}} text='Yellow BLock Button'/>
                </Col>
            </Row>
            <br />
            <br />
            <Row style={{textAlign:'center'}}>
                <Col>
                    <Button2 variant='btn-button2' styles={{color:'white', backgroundColor:'#009B78',boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.25)',padding:'5% 10%',borderStyle:'none'}} text='Button' />
                </Col>
                <Col>
                    <Button2 variant='btn-button2' styles={{color:'#272726', backgroundColor:'#FDD807',boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.25)',padding:'5% 10%',borderStyle:'none'}} text='Button' />
                </Col>
                <Col>
                    <Button2 variant='btn-button2' styles={{color:'#FFFFFF', backgroundColor:'#272726',boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.25)',padding:'5% 10%',borderStyle:'none'}} text='Button' />
                </Col>
            </Row>
        </Container>


    )
}