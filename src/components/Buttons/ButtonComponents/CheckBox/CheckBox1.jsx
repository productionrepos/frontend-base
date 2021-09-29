import React from 'react'
import './CheckBox.css'
import { Button } from 'react-bootstrap'

export default function CheckBox1({texto}) {
    return (
        <div>
            <style type="text/css">
                {`    
                    .btn-box{
                        font-family: Nunito;
                        font-style: normal;
                        font-weight: 600;
                        font-size: 18px;
                        line-height: 25px;
                        letter-spacing: 3px;
                        padding: 2.5%;
                        box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.25);
                        color: #FFFFFF; 
                        pointer-events:none;
                    }
                    
                `}
            </style>
            <Button style={{background:'#009B78'}}  variant='box'>{texto || 'CHECKBOX 1'}</Button>
        </div>
    )
}
