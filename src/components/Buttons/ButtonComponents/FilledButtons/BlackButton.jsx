import React from 'react'

import '../TestButton.css'

export default function BlackButton({onClickProp,text}) {
    return (
        <div className='container-fluid'>
            <button onClick={onClickProp} type="button" className="btn button-text" style={{color:'#FFFFFF',background:'#272726'}}>{ text || 'Warning'}</button>
        </div>
    )
}
