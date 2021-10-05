import React from 'react'

import '../TestButton.css'

export default function GreenBlockButton() {
    return (
        <div className='container-fluid'>
            <button className="btn btn-lg block-button" type="button" style={{background: 'radial-gradient(50% 50% at 50% 50%, #009B78 0%, #357B6B 100%)',color:'#FFF'}}>Block button</button>
        </div>
    )
}
