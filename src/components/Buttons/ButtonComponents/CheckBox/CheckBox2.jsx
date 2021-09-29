import React from 'react'
import './CheckBox.css'
import { Button } from 'react-bootstrap'

export default function CheckBox2({texto}) {
    return (
        <div>
            <Button  style={{background:'rgba(0, 155, 120, 0.93)'}} variant='box'>{texto|| 'CHECKBOX 2'}</Button>
        </div>
    )
}
