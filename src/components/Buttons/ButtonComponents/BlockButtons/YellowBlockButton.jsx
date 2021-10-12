import React from 'react'

import '../TestButton.css'

export default function YellowBlockButton({onClickProp,text}) {
    return (
        <div className='container-fluid'>
            <button onClick={onClickProp} className="btn btn-lg block-button" type="button" style={{background: 'radial-gradient(50% 50% at 50% 50%, #FDD807 0%, #FBBC05 100%)',color:'#272726'}}>{text || 'Block button'}</button>
        </div>
    )
}
