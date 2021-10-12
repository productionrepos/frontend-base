import React from 'react'

import '../TestButton.css'

export default function GreenLinkButton({onClickProp,text}) {
    return (
        <div className='container-fluid'>
            <button onClick={onClickProp} type="button" className="btn btn-link disabled button-link-text" style={{color:'#009B78'}}>{ text || 'Link 2'}</button>
        </div>
    )
}
