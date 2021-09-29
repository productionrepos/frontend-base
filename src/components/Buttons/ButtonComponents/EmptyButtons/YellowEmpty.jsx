import React from 'react'
import { Button } from 'react-bootstrap'
export default function YellowEmpty({text}) {
    return (
        <div>
            <Button style={{border: '3px solid rgba(253, 216, 7, 0.8)',color: '#DBC54A'}} variant='empty'>{text ||'Yellow'} </Button>            
        </div>
    )
}
