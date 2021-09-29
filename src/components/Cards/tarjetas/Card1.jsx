import React from 'react'
import './Card.css'
export default function Card1({text,header,title}) {
    return (
            <div className="card-container-ex">
                <div style = {{background: '#008063'}} className="card-header-container-ex">
                    <p style = {{color: '#FFFFFF'}} className="card-header-text">{header || 'Header'}</p>
                </div>
                <div style = {{background: '#009B78'}} className="card-body-container">
                    <p style = {{color: '#FFFFFF'}} className="card-title-ex">{title || 'Card1'}</p>
                    <p style = {{color: '#FFFFFF'}}  className="card-text-ex">{text || ' et! Repudiandae.'}</p>
                </div>
            </div>         
    )
    
}
