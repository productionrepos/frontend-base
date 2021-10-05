import React from 'react'
import './Home.css'
import { Header } from '../../shared/header/header'
import { useHistory } from 'react-router'
import '../NavBars/NavBarComponents/Navbar.css'
export default function Home() {
    let history = useHistory()
    return (

        <div>
            <Header></Header>


            
            <nav style={{marginTop:'10%', background: 'linear-gradient(180deg, #009B78 0%, #357B6B 100%)'}} className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
            <a className="navbar-brand name" href="/">Componentes</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav justify-content-end" style={{width:'100%'}}>
                    <li className='navl-link links' onClick = {()=>{
                        history.push({
                            pathname:'/Cards'
                        })
                    }}>Cards</li>
                    <li className='navl-link links' onClick = {()=>{
                        history.push({
                            pathname:'/Forms'
                        })
                    }}>Forms</li>
                    <li className='navl-link links' onClick = {()=>{
                        history.push({
                            pathname:'/Dropdowns'
                        })
                    }} >Dropdowns</li>
                    <li className='navl-link links' onClick = {()=>{
                        history.push({
                            pathname:'/Typography'
                        })
                    }}>Typography</li>
                    <li className='navl-link links' onClick = {()=>{
                        history.push({
                            pathname:'/Buttons'
                        })
                    }}>Buttons</li>
                    <li className='navl-link links' onClick = {()=>{
                        history.push({
                            pathname:'Navbars'
                        })
                    }} >NavBars</li>
                    <li className='navl-link links' onClick = {()=>{
                        history.push({
                            pathname:'/Alerts'
                        })
                    }} >Alerts</li>
                    <li className='navl-link links' onClick = {()=>{
                        history.push({
                            pathname:'/Tables'
                        })
                    }} >Tables</li>
                    <li className='navl-link links' onClick = {()=>{
                        history.push({
                            pathname:'/Calendar'
                        })
                    }} >Calendar</li>
                </ul>
            </div>
            </div>
        </nav>

        </div>
    )

}
