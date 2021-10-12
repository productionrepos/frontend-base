import React from 'react'

import '../TestButton.css'

export default function GreyLinkButton({onClickProp,text}) {
    return (
        <div className='container-fluid'>
            <button onClick={onClickProp} type="button" className="btn btn-link disabled button-link-text" style={{color:'#8B8B8B'}}>{text ||'Link 1'}</button>
        </div>
    )
}
