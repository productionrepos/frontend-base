import React from 'react';
import './Card.css'
import logo from '../../../assets/title.svg'
import botonGoogle from '../../../assets/boton-google.svg'
export const CardLogin = () => {
    const name_app = 'Hojas de despacho';
    return (
        <div>
            <div className="card-container">
                <div className="container-login">
                    <div style={{padding: '20px'}}>
                        <div style={{display: 'flex'}}>
                            <img style={{height: '25px'}} src={logo} alt="logo spread" />
                        </div>
                        <div className="bienvenido-text">
                           <p className="text" >
                            Bienvenido a 
                            {' ' + name_app}
                           </p>
                        </div>
                        <p className="text">ingresa con tu cuenta google</p>
                        <div>
                            <img style={{width: '100%', cursor: 'pointer', marginTop: '50px'}} src={botonGoogle} alt="google" />
                        </div>
                    </div>
                </div>
                <div className="triangulo"></div>
            </div>
        </div>
    )
}