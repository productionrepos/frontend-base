import React from 'react'

import './tarjeta.css'

export default function Card10() {
    return (
        <div className='container-fluid'>
                <div className="card white-text card-container2  mb-3" style={{background:'#E5E5E5',maxWidth:'20rem'}}>
                    <div className="card-header header-text" style={{background:'rgba(0, 155, 120, 0.8)', color:'#FFFFFF'}}>Card10</div>
                    <div className="card-body">
                        <h4 className="card-title title-text" style={{color:'#272726'}} >Primary card title</h4>
                        <p className="card-text body-text" style={{color:'#272726'}} >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <div style={{marginLeft:'4.5%',marginBottom:'4%'}}>
                        <a className='card-link-text' style={{color:'#009B78'}} href="/linkb">Link B</a>
                    </div>
                </div>
        </div>
    )
}
