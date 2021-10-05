import React from 'react'

export default function YellowAlert() {
    return (
         <div className='container-fluid'>            
                <div className="card white-text card-container2  mb-3" style={{background:'linear-gradient(180deg, #FDD807 0%, #E4C20E 100%)',maxWidth:'20rem'}}>
                    <div className="card-body">
                        <p className="card-text body-text" style={{color:'#FFFFFF',padding:'10%'}} >Debe ingresar con una cuenta de Spread</p>
                    </div>
                </div>
            </div>
    )
}
