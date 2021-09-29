import React from 'react'
// import './FilledButtons.css'
import { Button } from 'react-bootstrap'
export default function FilledButtons({text}) {
    return (
        // por alguna razon no siempre me toma el padding del variant desde el css file
        // y no se porque me toma este style para todos los botones
        <div>
            <style type="text/css">
                {`    
                    .btn-filled {
                        background-color: purple;
                        color: white;
                        padding-right: 2%;
                        padding-left: 2%;
                        font-family: Nunito;
                        font-style: normal;
                        font-weight: 600;
                        font-size: 24px;
                        line-height: 33px;
                        letter-spacing: 0.05em;
                        color: #FFFFFF;
                    }
                `}
            </style>

            <Button style={{backgroundColor:'#009B78', color:'#FFFFFF'}} variant='filled'>{text ||'Prueba'} </Button>
        </div>
    )
}
