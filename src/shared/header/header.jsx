import React from 'react'
import title from '../../assets/title.svg'
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux'
import { startLogout } from "../../actions/auth";

export const Header = () => {

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
        justifyContent: 'space-between',
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
                          <h2> </h2>
                        <img alt="img-title" style={{ height: '40px'}} src={title}></img>
                        <Button style={{color:'white',fontFamily:'Nunito' ,width: '10%'}} type='button' onClick={ cerrarSesion }>Cerrar Sesión</Button>
                      </div>
                </div>
            </div>
        </div>
    )

}

