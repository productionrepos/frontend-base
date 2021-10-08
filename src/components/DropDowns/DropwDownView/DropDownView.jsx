import React from 'react'
import BlackDropdown from '../DropDownComponents/BlackDropdown'

import GreenDropdown from '../DropDownComponents/GreenDropdown'
import RedDropdown from '../DropDownComponents/RedDropdown'
import YellowDropdown from '../DropDownComponents/YellowDropdown'

import { Container } from 'react-bootstrap'
 
export default function DropDownView() {
    return (
        <Container fluid style={{marginTop:'8.5%'}}>
            <GreenDropdown/>
            <YellowDropdown/>
            <BlackDropdown/>
            <RedDropdown/>          
        </Container>
    )
}
