import React from 'react'

export default function Card3({text,title,header}) {
    return (
        <div className="card-container-ex">
                <div style = {{background: '#F1CD00'}} className="card-header-container-ex">
                    <p style = {{color: '#243143'}} className="card-header-text">{header || 'Header'}</p>
                </div>
                <div style = {{background: '#FDD807'}} className="card-body-container">
                    <p style = {{color: '#243143'}} className="card-title-ex">{title || 'Card3'}</p>
                    <p style = {{color: '#243143'}}  className="card-text-ex">{text || 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod quia maxime amet qui molestias, veniam vitae incidunt beatae impedit suscipit delectus placeat aspernatur cumque laboriosam earum numquam ut et! Repudiandae.'}</p>
                </div>
        </div>
    )
}
