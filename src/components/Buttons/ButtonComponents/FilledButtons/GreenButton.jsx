import React from 'react'

import '../TestButton.css'

export default function GreenButton() {
    return (
        <div className='container-fluid'>
            <button type="button" className="btn button-text" style={{color:'#FFFFFF',background:'#009B78'}}>Primary</button>
        </div>
    )
}
