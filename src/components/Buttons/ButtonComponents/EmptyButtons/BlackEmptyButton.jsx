import React from 'react'

import '../TestButton.css'

export default function BlackEmptyButton() {
    return (
        <div className='container-fluid'>
            <button type="button" className="btn button-text" style={{border: '3px solid rgba(39, 39, 38, 0.8)',color:'#272726',background:'#FFFFFF'}}>Warning</button>
        </div>
    )
}
