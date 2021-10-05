import React from 'react'

import '../TestButton.css'

export default function GreyEmptyButton() {
    return (
        <div className='container-fluid'>
            <button type="button" className="btn button-text" style={{border: '3px solid #979797',color:'#979797',background:'#FFFFFF'}}>Secondary</button>
        </div>
    )
}
