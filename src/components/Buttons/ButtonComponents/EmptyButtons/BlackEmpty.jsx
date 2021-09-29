import React from 'react'
import { Button } from 'react-bootstrap'
export default function BlackEmpty({text}) {
    return (
        <div>
            <Button style={{border: '3px solid rgba(39, 39, 38, 0.8)',color: '#272726'}} variant='empty'>{text ||'Black'} </Button>
        </div>
    )
}
