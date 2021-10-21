import React from 'react'

import '../TestButton.css'

export default function GreyEmptyButton({onClickProp,text}) {
    return (
        <div className='container-fluid'>
            <button onClick={onClickProp} type="button" className="btn button-text" style={{boxShadow:'none',border: '3px solid #979797',color:'#979797',background:'#FFFFFF'}}>{ text || 'Secondary'}</button>
        </div>
    )
}
