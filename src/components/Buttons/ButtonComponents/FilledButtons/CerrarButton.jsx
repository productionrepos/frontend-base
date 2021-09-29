import React from 'react'
import './FilledButtons.css'
import { Button } from 'react-bootstrap'
export default function CerrarButton({text}) {
    return (
        <div>
            <Button style={{paddingLeft:'2%', paddingRight:'2%',background:'#272726', color:'#FFFFFF', boxShadow:'4px 4px 8px rgba(0, 0, 0, 0.25)', borderRadius:'2px'}} variant='filled'>{text ||'Cerrar'} </Button>
        </div>
    )
}