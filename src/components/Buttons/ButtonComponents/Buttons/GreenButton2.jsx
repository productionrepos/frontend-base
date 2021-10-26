import React from 'react'

import '../TestButton.css'
import { Button } from 'react-bootstrap'
 
export default function GreenButton2({onClickProp,text,variant,styles}) {
    return (
        <Button bsPrefix={variant} style={styles} onClick={onClickProp}> {text || 'Black Button'}</Button>
    )
}
