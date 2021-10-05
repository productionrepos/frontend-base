import React from 'react'

export default function Card9() {
    return (
        <div className='container-fluid'>
                <div className="card white-text card-container2  mb-3" style={{background:'#009B78',maxWidth:'20rem'}}>
                    <div className="card-header header-text" style={{background:'#008063', color:'#FFFFFF'}}>Card9</div>
                    <div className="card-body">
                        <h4 className="card-title title-text" style={{color:'#FFFFFF'}} >Primary card title</h4>
                        <p className="card-text body-text" style={{color:'#FFFFFF'}} >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <div style={{marginLeft:'4.5%',marginBottom:'4%'}}>
                        <a className='card-link-text 'style={{color:'#FFF'}} href="/linka">Link A</a>
                    </div>
                </div>
        </div>
    )
}
