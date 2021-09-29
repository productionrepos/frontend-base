import React from 'react'
import './Button.css'
import {Button} from 'react-bootstrap'
export default function Button2({text}) {
    return (
        <div>
            <Button style = {{ background:'#FDD807', color:'#272726' }}  variant = 'button' > {text || 'BUTTON 2'} </Button>
        </div>
    )
}
