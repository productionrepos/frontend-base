import React from 'react'
import { Button } from 'react-bootstrap'

export default function GreyEmpty({text}) {
    return (
        <div>
            <Button style={{border: '3px solid #979797',color: '#979797'}} variant='empty'>{text ||'Grey'} </Button>
        </div>
    )
}
