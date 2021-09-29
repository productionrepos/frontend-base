import React from 'react';
import './cardlogin.css'
import '../../../App.css'
import title from '../../../assets/title.svg'
import {Header} from '../../../shared/header/header'
import { startLogout } from "../../../actions/auth";
import logo from '../../../assets/title.svg'
import botonGoogle from '../../../assets/boton-google.svg'
import {firebase, googleAuthProvider} from '../../../firebase/firebase-config'
import { useDispatch } from 'react-redux';
import { login } from '../../../actions/auth';
export const CardLogin = () => {
    const name_app = 'Hojas de despacho';
    const dispatch = useDispatch();

    const google = (e) => {

        firebase.auth().signInWithPopup( googleAuthProvider )
            .then( ({ user }) => {
                console.log(user.displayName)

                dispatch(login())
            })
    }
    return (
         <div className="App">
             <Header2></Header2>
            <div className="content-login">
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
                                <img onClick={google} style={{width: '100%', cursor: 'pointer', marginTop: '50px'}} src={botonGoogle} alt="google" />
                            </div>
                        </div>
                    </div>
                    <div className="triangulo"></div>
                </div>               
            </div> 
        </div>

    )
}

 const Header2 = () => {

    const style = {
        with: '100%',
        height: '100px',
        backgroundColor: '#ADFFEC',
        position: 'fixed',
        width: '100%',
        top: '0',
        zIndex:"2"
        
    }

    const layerOne = {
        with: '100%',
        height: '90px',
        backgroundColor: '#00CC9C'
    }
    const layerTwo = {
        with: '100%',
        height: '80px',
        backgroundColor: '#009B78',
        color: 'white'
    }

    const contentTitleSpread = {
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        'justify-content': 'space-between',
        paddingRight: '10px',
        height: '100%',
    }
    const dispatch = useDispatch();
    const cerrarSesion = () => {
        dispatch( startLogout() );
    }
    return (
        <div  style={style}>
            <div style={layerOne}>
                <div style={layerTwo}>
                      <div style={contentTitleSpread}>
                          <h2></h2>
                        <img alt="img-title" style={{ height: '40px'}} src={title}></img>
                        {/* <Button style={{backgroundColor: 'red', width: '10%'}} type='button' onClick={ cerrarSesion }>Cerrar Sesión</Button> */}
                        <p></p>
                      </div>
                </div>
            </div>
        </div>
    )

}