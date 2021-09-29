import React from 'react'
import { Button } from 'react-bootstrap'
export default function RedEmpty({text}) {
    return (
        <div>
            <Button style={{border: '3px solid rgba(234, 67, 53, 0.8)',color: '#EA4335'}} variant='empty'>{text ||'Red'} </Button>
        </div>
    )
}
