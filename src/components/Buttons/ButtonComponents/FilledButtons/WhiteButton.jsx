import React from 'react'

import '../TestButton.css'

export default function WhiteButton() {
    return (
        <div className='container-fluid'>
            <button type="button" className="btn button-text" style={{color:'#009B78',boxShadow:'none'}}>Secondary</button>
        </div>
    )
}
