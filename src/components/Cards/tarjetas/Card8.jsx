import React from 'react'

export default function Card8({text,title,header}) {
    return (
        <div style = {{ border: '3px solid #EA4335' ,filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))'}} className="card-container-ex">
                <div style = {{background: 'rgba(234, 67, 53, 0.8)'}} className="card-header-container-ex">
                    <p style = {{color: '#FFFFFF'}} className="card-header-text">{header || 'Header'}</p>
                </div>
                <div style = {{background: '#FFFFFF'}} className="card-body-container">
                    <p style = {{color: '#272726'}} className="card-title-ex">{title || 'Card8'}</p>
                    <p style = {{color: '#272726'}}  className="card-text-ex">{text || 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod quia maxime amet qui molestias, veniam vitae incidunt beatae impedit suscipit delectus placeat aspernatur cumque laboriosam earum numquam ut et! Repudiandae.'}</p>
                </div>
        </div>
    )
}
