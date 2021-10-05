import React from 'react'

import '../TestButton.css'

export default function BlackButton() {
    return (
        <div className='container-fluid'>
            <button type="button" className="btn button-text" style={{color:'#FFFFFF',background:'#272726'}}>Warning</button>
        </div>
    )
}
