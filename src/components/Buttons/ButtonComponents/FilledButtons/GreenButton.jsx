import React from 'react'

import '../TestButton.css'

export default function GreenButton({onClickProp,text}) {
    return (
        <div className='container-fluid'>
            <button onClick={onClickProp} type="button" className="btn button-text" style={{color:'#FFFFFF',background:'#009B78'}}>{text || 'Primary'}</button>
        </div>
    )
}
