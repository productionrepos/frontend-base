import React from 'react'

import '../TestButton.css'

export default function WhiteButton() {
    return (
        <div className='container-fluid'>
            <button type="button" className="btn button-text" style={{color:'#009B78',background:'#E5E5E5'}}>Secondary</button>
        </div>
    )
}
