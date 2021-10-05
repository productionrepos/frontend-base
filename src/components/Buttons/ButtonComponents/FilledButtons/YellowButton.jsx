import React from 'react'

import '../TestButton.css'

export default function YellowButton() {
    return (
        <div className='container-fluid'>
            <button type="button" className="btn button-text" style={{color:'#2C2C2C',background:'#FDD807'}}>Success</button>
        </div>
    )
}
