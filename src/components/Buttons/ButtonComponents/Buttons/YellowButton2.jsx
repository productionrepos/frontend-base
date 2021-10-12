import React from 'react'

import '../TestButton.css'

export default function YellowButton2({onClickProp,text}) {
    return (
        <div className='container-fluid'>
            <button onClick={onClickProp} type="button" className="btn only-button" style={{color:'#272726',background:'#FDD807'}}>{ text || 'Button' }</button>
        </div>
    )
}
