import React from 'react'

import './tarjeta.css'

export default function Card1() {
    return (
        <div className='container-fluid'>            
                <div className="card white-text card-container2  mb-3" style={{background:'#009B78',maxWidth:'20rem'}}>
                    <div className="card-header header-text" style={{background:'#008063', color:'#FFFFFF'}}>Card1</div>
                    <div className="card-body">
                        <h4 className="card-title title-text" style={{color:'#FFFFFF'}} >Primary card title</h4>
                        <p className="card-text body-text" style={{color:'#FFFFFF'}} >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
    )
}
