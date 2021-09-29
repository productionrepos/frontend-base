import React from 'react'
import { Button } from 'react-bootstrap'
export default function GreenEmpty({text}) {
    return (
        <div>
            <style type="text/css">
                {`    
                    .btn-empty {
                        background: #FFFFFF;
                        font-style: normal;
                        font-size: 24px;
                        padding-left: 2%;
                        padding-right: 2%;
                        pointer-events: none;
                    }
                `}
            </style>
            <Button style={{border: '3px solid rgba(0, 155, 120, 0.8)',color: '#009B78'}} variant='empty'>{text ||'Prueba'} </Button>
        
        </div>

    )
}
