import React from 'react'

import {Button} from 'react-bootstrap'

import './TestButton.css'



export default function LinkButton({onClickProp,text,variant,styles}) {
    return (
        <Button bsPrefix={variant} style={styles} onClick={onClickProp}> {text || 'Black Button'}</Button>
    )
}
