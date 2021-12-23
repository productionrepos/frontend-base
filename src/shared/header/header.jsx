import React from 'react'
import title from '../../assets/title.svg'
import { useDispatch } from 'react-redux'
import { startLogout } from "../../actions/auth";
import { NavLink } from 'react-router-dom';
import '../../components/NavBars/NavBarComponents/Navbar.css'

import LogOutButton from '../../components/Buttons/ButtonComponents/FilledButton'
import '../../components/Buttons/ButtonComponents/TestButton.css'

import Dropdown1 from '../../components/DropDowns/DropDownComponents/DropDown'
import '../../components/DropDowns/DropDownComponents/Dropdown.css'

export const Header = () => {

    const dispatch = useDispatch();
    const cerrarSesion = () => {
        dispatch( startLogout() );
    }

    const items = [
    ]
    const dpItems = [
        {
            href:'/Cards',
            href_label:'Cards'
        },
        {
            href:'/Alerts',
            href_label:'Alerts \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'
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
        },
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
                <img src={title} alt="img-title" style={{ height: '40px',paddingLeft:'40%' }} />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor02" style={{marginRight:'2%'}}>
                <ul className="navbar-nav justify-content-end" style={{width:'100%'}}>
                    {
                        items.map((elemento) => {
                            return (

                                <NavLink key={elemento.href_label} className="nav-link links" exact to={elemento.href} activeClassName="activeClicked">
                                    {elemento.href_label}
                                </NavLink>
                            )
                        })
                    }    
                    <Dropdown1 label='Components' ToggleStyle={{backgroundColor:'transparent', borderStyle:'none'}} MenuStyle={{background: 'linear-gradient(180deg, #009B78 0%, #357B6B 100%)'}} actions={dpItems}/>
                </ul>
            </div>
            <LogOutButton onClickProp={cerrarSesion} variant='btn-filled' text='Cerrar Sesión' styles={{backgroundColor:'transparent',borderStyle:'none',boxShadow:'none',color:'white'}}/>

            </div>
        </nav>
    )

}

