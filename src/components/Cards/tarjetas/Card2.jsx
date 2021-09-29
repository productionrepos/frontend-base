import React from 'react'

export default function Card2({text,title,header}) {
    return (
        <div className="card-container-ex">
                <div style = {{background: '#161613'}} className="card-header-container-ex">
                    <p style = {{color: '#FFFFFF'}} className="card-header-text">{header || 'Header'}</p>
                </div>
                <div style = {{background: '#272726'}} className="card-body-container">
                    <p style = {{color: '#FFFFFF'}} className="card-title-ex">{title || 'Card2'}</p>
                    <p style = {{color: '#FFFFFF'}}  className="card-text-ex">{text || 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod quia maxime amet qui molestias, veniam vitae incidunt beatae impedit suscipit delectus placeat aspernatur cumque laboriosam earum numquam ut et! Repudiandae.'}</p>
                </div>
        </div>
    )
}
