import React from 'react'

import '../TestButton.css'

export default function RedButton({onClickProp,text}) {
    return (
        <div className='container-fluid'>
            <button onClick={onClickProp} type="button" className="btn button-text" style={{color:'#FFFFFF',background:'#EA4335'}}>{ text || 'Danger'}</button>
        </div>
    )
}
