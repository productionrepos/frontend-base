import React from 'react'
import title from '../../assets/title.svg'
import { useDispatch } from 'react-redux'
import { startLogout } from "../../actions/auth";
import { NavLink } from 'react-router-dom';
import '../../components/NavBars/NavBarComponents/Navbar.css'
export const Header = () => {

    // const style = {
    //     with: '100%',
    //     height: '100px',
    //     backgroundColor: '#ADFFEC',
    //     position: 'fixed',
    //     width: '100%',
    //     top: '0',
    //     zIndex:"2"
        
    // }

    // const layerOne = {
    //     with: '100%',
    //     height: '90px',
    //     backgroundColor: '#00CC9C'
    // }
    // const layerTwo = {
    //     with: '100%',
    //     height: '80px',
    //     backgroundColor: '#009B78',
    //     color: 'white'
    // }

    // const contentTitleSpread = {
    //     display: 'flex',
    //     alignItems: 'center',
    //     color: 'white',
    //     justifyContent: 'space-between',
    //     paddingRight: '10px',
    //     height: '100%',
    // }
    const dispatch = useDispatch();
    const cerrarSesion = () => {
        dispatch( startLogout() );
    }

    const items = [
        {
            href:'/Cards',
            href_label:'Cards'
        },
        {
            href:'/Alerts',
            href_label:'Alerts'
        },
        {
            href:'/Forms',
            href_label:'Forms'
        },
        {
            href:'/Dropdowns',
            href_label:'Dropdowns'
        },
        {
            href:'/Typography',
            href_label:'Typography'
        },
        {
            href:'/ButtonView',
            href_label:'Buttons'
        }
    ]
    const dpItems = [
        {
            href:'/Navbars',
            href_label:'Navbars'
        },
        {
            href:'/Tables',
            href_label:'Table'
        },
        {
            href:'/Calendar',
            href_label:'Calendar'
        }
    ]
    return (

        <nav style={{ background: 'linear-gradient(180deg, #009B78 0%, #357B6B 100%)'}} className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
            <a className="navbar-brand name" href='/Home'>
                <img src={title} alt="img-title" style={{ height: '40px' }} />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor02">
                <ul className="navbar-nav justify-content-end" style={{width:'100%'}}>
                    {
                        items.map((elemento) => {
                            return (
                                // <li key={elemento.href_label} className="nav-item">
                                //     <a className="nav-link links" href={elemento.href}>{elemento.href_label}<span className="visually-hidden">(current)</span>
                                //     </a>
                                // </li>
                                <NavLink key={elemento.href_label} className="nav-link links" exact to={elemento.href} activeClassName="activeClicked">
                                    {elemento.href_label}
                                </NavLink>
                            )
                        })
                    }    
                    <li className="nav-item dropdown ">
                        <a className="nav-link dropdown-toggle links" data-bs-toggle="dropdown" href="/" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                        <div className="dropdown-menu green-dropdown-menu">
                            {
                                dpItems.map( (elemento) => {
                                    return(
                                        <NavLink key={elemento.href_label} className="dropdown-item green-dropdown-item" exact to={elemento.href} activeClassName="activeClicked">
                                            {elemento.href_label}
                                        </NavLink>
                                    )
                                } )
                            }
                            <div className="dropdown-divider"></div>
                            <a onClick={cerrarSesion} className="dropdown-item green-dropdown-item" href="/">Cerrar Sesion</a>
                        </div>
                    </li>

                </ul>
            </div>
            </div>
        </nav>
    )

}

