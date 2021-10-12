import React from 'react'

import '../TestButton.css'

export default function WhiteButton({onClickProp,text}) {
    return (
        <div className='container-fluid'>
            <button onClick={onClickProp} type="button" className="btn button-text" style={{color:'#009B78',boxShadow:'none'}}>{ text || 'Secondary'}</button>
        </div>
    )
}
