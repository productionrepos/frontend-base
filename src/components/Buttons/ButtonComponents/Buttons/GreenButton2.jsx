import React from 'react'

import '../TestButton.css'

export default function GreenButton2({onClickProp,text}) {
    return (
        <div className='container-fluid'>
            <button onClick={onClickProp} type="button" className="btn only-button" style={{color:'#FFFFFF',background:'#009B78'}}>{ text || 'Button'}</button>
        </div>
    )
}
