import React from 'react'

import '../TestButton.css'

export default function RedEmptyButton() {
    return (
        <div className='container-fluid'>
            <button type="button" className="btn button-text" style={{boxShadow:'none',border: '3px solid rgba(234, 67, 53, 0.8)',color:'#EA4335',background:'#FFFFFF'}}>Danger</button>           
        </div>
    )
}
