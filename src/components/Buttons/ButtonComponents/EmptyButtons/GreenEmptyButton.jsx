import React from 'react'

import '../TestButton.css'

export default function GreenEmptyButton() {
    return (
        <div className='container-fluid'>
            <button type="button" className="btn button-text" style={{border: '3px solid rgba(0, 155, 120, 0.8)',color:'#009B78',background:'#FFFFFF'}}>Primary</button>
        </div>
    )
}
