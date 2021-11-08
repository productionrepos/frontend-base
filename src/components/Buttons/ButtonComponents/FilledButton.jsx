import React from 'react'

import { Button } from 'react-bootstrap'

// import './TestButton.css'

export default function FilledButton({onClickProp,text,variant,styles, type}) {
    
    return (
        <Button type={type || ''} bsPrefix={variant} style={styles} onClick={onClickProp}> {text || 'Filled Button'} </Button>
    )
}
