import React from 'react'

import '../TestButton.css'

export default function YellowBlockButton() {
    return (
        <div className='container-fluid'>
            <button className="btn btn-lg block-button" type="button" style={{background: 'radial-gradient(50% 50% at 50% 50%, #FDD807 0%, #FBBC05 100%)',color:'#272726'}}>Block button</button>
        </div>
    )
}
