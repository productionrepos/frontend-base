import React from 'react'
import GreenAlert from '../GreenAlert'

import {Container} from 'react-bootstrap'
import BlackAlert from '../BlackAlert'

export default function AlertView() {

    return (
        <Container fluid style={{marginTop:'9.5%'}}>
            <GreenAlert/>
            <BlackAlert/>
        </Container>
    )
}
