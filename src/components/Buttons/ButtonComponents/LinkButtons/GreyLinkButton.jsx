import React from 'react'

import '../TestButton.css'

export default function GreyLinkButton() {
    return (
        <div className='container-fluid'>
            <button type="button" className="btn btn-link disabled button-link-text" style={{color:'#8B8B8B'}}>Link 1</button>
        </div>
    )
}
