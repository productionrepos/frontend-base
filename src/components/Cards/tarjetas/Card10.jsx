import React from 'react'

export default function Card10({text,title,header,url,url_name}) {
    return (
        <div className="card-container-ex">
                <div style = {{background: '#009B78'}} className="card-header-container-ex">
                    <p style = {{color: '#FFFFFF'}} className="card-header-text">{header || 'Header'}</p>
                </div>
                <div style = {{background: '#FFFFFF'}} className="card-body-container">
                    <p style = {{color: '#272726'}} className="card-title-ex">{title || 'Card10'}</p>
                    <p style = {{color: '#272726'}}  className="card-text-ex">{text || 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod quia maxime amet qui molestias, veniam vitae incidunt beatae impedit suscipit delectus placeat aspernatur cumque laboriosam earum numquam ut et! Repudiandae.'}</p>
                    <a style = {{color:'#009B78'}} className = 'card-link' href={url || ''}>{url_name || 'Card Link'}</a>
                </div>
        </div>
    )
}
