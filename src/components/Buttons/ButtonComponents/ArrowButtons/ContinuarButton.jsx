import React from 'react'
import './ArrowButtons.css'
export default function ContinuarButton({text}) {
    return (
        <div style={{background:'#009B78'}}  className='arrow-button-container'>
            <p  style={{color: '#FFFFFF'}} className='arrow-text'>{text || 'CONTINUAR'}</p>
            <div style={{padding:'2%'}}>
                <p><i  style={{color: '#FFFFFF'}} className="arrow right"></i></p>
            </div>
        </div>
    )
}
