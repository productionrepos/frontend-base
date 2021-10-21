import React from 'react'

import '../TestButton.css'

export default function GreenEmptyButton({onClickProp,text}) {
    return (
        <div className='container-fluid'>
            <button onClick={onClickProp} type="button" className="btn button-text" style={{boxShadow:'none',border: '3px solid rgba(0, 155, 120, 0.8)',color:'#009B78',background:'#FFFFFF'}}>{ text || 'Primary'}</button>
        </div>
    )
}
