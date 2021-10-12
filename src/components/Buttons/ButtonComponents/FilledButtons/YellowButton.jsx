import React from 'react'

import '../TestButton.css'

export default function YellowButton({onClickProp,text}) {
    return (
        <div className='container-fluid'>
            <button onClick={onClickProp} type="button" className="btn button-text" style={{color:'#2C2C2C',background:'#FDD807'}}>{ text || 'Success'}</button>
        </div>
    )
}
