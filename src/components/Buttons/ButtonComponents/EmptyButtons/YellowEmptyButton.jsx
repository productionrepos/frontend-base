import React from 'react'

import '../TestButton.css'

export default function YellowEmptyButton() {
    return (
        <div className='container-fluid'>
            <button type="button" className="btn button-text" style={{border: '3px solid rgba(253, 216, 7, 0.8)',color:'#DBC54A',background:'#FFFFFF'}}>Success</button>            
        </div>
    )
}
