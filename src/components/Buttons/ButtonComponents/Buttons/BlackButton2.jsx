import React from 'react'

import '../TestButton.css'

export default function BlackButton2({onClickProp,text}) {
    return (
        <div className='container-fluid'>
            <button onClick={onClickProp} type="button" className="btn only-button" style={{color:'#FFFFFF',background:'#272726'}}>{ text || 'Button'}</button>
        </div>
    )
}
