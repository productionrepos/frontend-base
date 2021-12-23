import React from 'react'

import BlackNavbar from '../NavBarComponents/BlackNavbar'
import GreenNavbar from '../NavBarComponents/GreenNavbar'

import {Container} from 'react-bootstrap'


export default function NavBarView() {
    // let lista = [
    //     {
    //         href:'#casa',
    //         ref_text:'Casa'
    //     },
    //     {
    //         href:'#zelda',
    //         ref_text:'zelda'
    //     },
    //     {
    //         href:'#about',
    //         ref_text:'About'
    //     }
    // ]
    return (
        <Container fluid style={{marginTop:'8.5%'}}>
            <BlackNavbar></BlackNavbar>
            <br />
            <GreenNavbar></GreenNavbar>
        </Container>
    )
}
