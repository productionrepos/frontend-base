import React from 'react'
import './Button.css'
import {Button} from 'react-bootstrap'
export default function Button3({text}) {
    return (
        <div>
            <Button style = {{ background:'#272726' , color:'#FFFFFF'}} variant = 'button' >{text || 'BUTTON 3'}</Button>
        </div>
    )
}