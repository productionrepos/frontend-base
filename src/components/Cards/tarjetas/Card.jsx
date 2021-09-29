import React from 'react'
import './Card.css'
export default function Card({text,title,header}) {
    return (
        <>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="card-container-ex">

            <div className="card-header-container-ex">
                <p className="card-header-text">{header || 'Header'}</p>
            </div>
            <div className="card-body-container">
                <p className="card-title-ex">{title || 'Title'}</p>
                <p className="card-text-ex">{text || 'Text'}</p>
            </div>
        </div>
        </>
    )
}
