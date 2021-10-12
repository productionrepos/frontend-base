import React from 'react'

import '../TestButton.css'

export default function BlackEmptyButton({onClickProp,text}) {
    return (
        <div className='container-fluid'>
            <button onClick={onClickProp} type="button" className="btn button-text" style={{border: '3px solid rgba(39, 39, 38, 0.8)',color:'#272726',background:'#FFFFFF'}}>{ text || 'Warning'}</button>
        </div>
    )
}
