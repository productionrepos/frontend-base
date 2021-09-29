import React from 'react'
import './CheckBox.css'
import { Button } from 'react-bootstrap'
export default function CheckBox3({text}) {
    return (
        <div>
            <Button style = {{background:'rgba(0, 155, 120, 0.86)'}} variant='box'>{text || 'CHECKBOX 3'}</Button>
        </div>
    )
}
