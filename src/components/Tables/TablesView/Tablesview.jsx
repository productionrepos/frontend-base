import React from 'react'

import GreenTable from '../Tablas/GreenTable'
// import BlackTable from '../Tablas/BlackTable'

import { Container } from 'react-bootstrap'

export default function Tablesview() {
    return (
        <Container fluid style={{marginTop:'8.5%'}}>
            <GreenTable/>
        </Container>
    )
}
