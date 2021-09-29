import React from 'react'
import './FilledButtons.css'
import { Button } from 'react-bootstrap'
export default function SecondaryButton({text}) {
    return (
        <div>
            <Button style={{paddingLeft:'2%', paddingRight:'2%',background:'#FFF', color:'#009B78'}} variant='filled'>{text ||'Secondary'} </Button>
        </div>
    )
}
