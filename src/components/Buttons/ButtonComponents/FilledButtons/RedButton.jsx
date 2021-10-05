import React from 'react'

import '../TestButton.css'

export default function RedButton() {
    return (
        <div className='container-fluid'>
            <button type="button" className="btn button-text" style={{color:'#FFFFFF',background:'#EA4335'}}>Danger</button>
        </div>
    )
}
