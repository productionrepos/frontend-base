import React from 'react'

import './tarjeta.css'

export default function Card3({header,title,body}) {
    return (
        <div className='container-fluid'>
                <div className="card white-text card-container2  mb-3" style={{background:'#FDD807',maxWidth:'20rem'}}>
                    <div className="card-header header-text" style={{background:'#F1CD00', color:'#243143'}}>{ header || 'Card3'}</div>
                    <div className="card-body">
                        <h4 className="card-title title-text" style={{color:'#243143'}} >{ title || 'Primary card title'}</h4>
                        <p className="card-text body-text" style={{color:'#243143'}} >{ body || "Some quick example text to build on the card title and make up the bulk of the card's content."}</p>
                    </div>
                </div>
        </div>
    )
}
