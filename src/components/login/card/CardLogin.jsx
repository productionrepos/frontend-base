import React, { useState } from 'react';
import './cardlogin.css'
import '../../../App.css'
import title from '../../../assets/title.svg'
import logo from '../../../assets/title.svg'
import botonGoogle from '../../../assets/boton-google.svg'
import {firebase, googleAuthProvider} from '../../../firebase/firebase-config'
import Alerta from '../../Alertas/GreenAlert'
import '../../Alertas/modal.css'

export const CardLogin = () => {
    

    const name_app = 'Aplicación Genérica';
    // const dispatch = useDispatch();asdasd
    const google = (e) => {

        firebase.auth().signInWithPopup( googleAuthProvider )
            .then( ({ user }) => {
                // dispatch(login())

                if(user.email.includes('@spread.cl')){
                    console.log('valido')
                }
                else{
                    console.log('invalido')
                    setOpen(true)
                }
            })
    }


    //modal
    const [open,setOpen] = useState(false)
    
    function handleModal(valor){
        setOpen(valor)
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
            <Alerta mostrar={open} getOpen={handleModal}/>
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
        'justifyContent': 'space-between',
        paddingRight: '10px',
        height: '100%',
    }
    //const dispatch = useDispatch();
    // function cerrarSesion() {
    //     dispatch( startLogout() );
    // }
    return (
        <div  style={style}>
            <div style={layerOne}>
                <div style={layerTwo}>
                      <div style={contentTitleSpread}>
                        <h2> </h2>
                        <img alt="img-title" style={{ height: '40px'}} src={title}></img>
                        {/* <Button style={{backgroundColor: 'red', width: '10%'}} type='button' onClick={ cerrarSesion }>Cerrar Sesión</Button> */}
                        <p></p>
                      </div>
                </div>
            </div>
        </div>
    )

}