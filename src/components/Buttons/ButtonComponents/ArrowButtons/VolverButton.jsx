import React from 'react'
import './ArrowButtons.css'
export default function VolverButton({text}) {
    return (
        <div style={{background:'#FFF'}}  className='arrow-button-container'>
            <p  style={{color: '#009B78'}} className='arrow-text'>{text || 'VOLVER'}</p>
            <div style={{padding:'2%'}}>
                <p><i  style={{color: '#009B78'}} className="arrow left"></i></p>
            </div>
        </div>
    )
}
