import React from 'react'

import './tarjeta.css'

export default function Card8() {
    return (
        <div className='container-fluid'>
                <div className="card white-text card-container2  mb-3" style={{background:'#FFF',maxWidth:'20rem',border: '3px solid #EA4335'}}>
                    <div className="card-header header-text" style={{background:'rgba(234, 67, 53, 0.8)', color:'#FFFFFF'}}>Card8</div>
                    <div className="card-body">
                        <h4 className="card-title title-text" style={{color:'#272726'}} >Primary card title</h4>
                        <p className="card-text body-text" style={{color:'#272726'}} >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
        </div>
    )
}
