import React from 'react'

export default function Card4({text,title,header}) {
    return (
        <div className="card-container-ex">
                <div style = {{background: '#D62819'}} className="card-header-container-ex">
                    <p style = {{color: '#FFFFFF'}} className="card-header-text">{header || 'Header'}</p>
                </div>
                <div style = {{background: '#EA4335'}} className="card-body-container">
                    <p style = {{color: '#FFFFFF'}} className="card-title-ex">{title || 'Card4'}</p>
                    <p style = {{color: '#FFFFFF'}}  className="card-text-ex">{text || 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod quia maxime amet qui molestias, veniam vitae incidunt beatae impedit suscipit delectus placeat aspernatur cumque laboriosam earum numquam ut et! Repudiandae.'}</p>
                </div>
        </div>
    )
}
