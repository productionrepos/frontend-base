import React from 'react'
import './Button.css'
import {Button} from 'react-bootstrap'
export default function Button1({text}) {
    return (
        <div>
            <style type="text/css">
                {`    
                    .btn-button{
                        font-family: Nunito;
                        font-style: normal;
                        font-weight: 600;
                        font-size: 18px;
                        line-height: 25px;
                        letter-spacing: 3px;
                        padding: 2%;
                        box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
                        border-radius: 3px;
                        pointer-events: none;
                    }
                    
                    
                `}
            </style>
            <Button style = {{ color:'#FFFFFF', background:'#009B78' }}  variant = 'button'>  {text || 'BUTTON 1'} </Button>
        </div>
    )
}
