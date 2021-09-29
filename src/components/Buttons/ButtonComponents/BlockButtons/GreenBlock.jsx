import React from 'react'
import './BlockButton.css'
import { Button } from 'react-bootstrap'
export default function GreenBlock({text}) {
    return (
        <div>
            <style type="text/css">
                {`    
                    .btn-green{
                        padding: 4.5%;
                        color: #FFFFFF;
                        font-family: Nunito;
                        font-style: normal;
                        font-weight: 600;
                        font-size: 28px;
                        line-height: 38px;
                        letter-spacing: 5px;
                        border-radius: 5px;
                        pointer-events: none;
                    }
                `}
            </style>
            <Button style = {{     background: 'radial-gradient(50% 50% at 50% 50%, #009B78 0%, #357B6B 100%)' }}variant='green'> { text || 'GREEN BLOCK' } </Button>
        </div>
    )
}
