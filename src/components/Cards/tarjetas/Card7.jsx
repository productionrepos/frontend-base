import React from 'react'

import './tarjeta.css'

export default function Card7({header,title,body}) {
    return (
        <div className='container-fluid'>
                <div className="card white-text card-container2  mb-3" style={{background:'#fff',maxWidth:'20rem',border: '3px solid #FDD807'}}>
                    <div className="card-header header-text" style={{background:'rgba(253, 216, 7, 0.8)', color:'#272726'}}>{ header || 'Card7' }</div>
                    <div className="card-body">
                        <h4 className="card-title title-text" style={{color:'#272726'}} >{ title || 'Primary card title'}</h4>
                        <p className="card-text body-text" style={{color:'#272726'}} > { body || "Some quick example text to build on the card title and make up the bulk of the card's content."}</p>
                    </div>
                </div>
        </div>
    )
}
