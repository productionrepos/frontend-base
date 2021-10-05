import React from 'react'

import '../TestButton.css'

export default function GreenLinkButton() {
    return (
        <div className='container-fluid'>
            <button type="button" className="btn btn-link disabled button-link-text" style={{color:'#009B78'}}>Link 2</button>
        </div>
    )
}
