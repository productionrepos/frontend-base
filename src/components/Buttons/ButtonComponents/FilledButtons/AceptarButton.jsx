import React from 'react'
import './FilledButtons.css'
import { Button } from 'react-bootstrap'
export default function AceptarButton({text}) {
    return (
        <div>
            <Button style={{paddingLeft:'2%', paddingRight:'2%',background  :'#FDD807', color:'#2C2C2C', boxShadow:'4px 4px 8px rgba(0, 0, 0, 0.25)', borderRadius:'2px'}} variant='filled'>{text ||'Aceptar'} </Button>
        </div>
    )
}