import React from 'react'
import './Home.css'
import { Header } from '../../shared/header/header'
import { useHistory } from 'react-router'
export default function Home() {
    let history = useHistory()
    return (

        <div>
            <Header></Header>
            <nav style={{marginTop:'14%',display:'flex',justifyContent:'space-around',alignItems:'center',color:'white',background: '#2C2C2C'}}>
                <ul style={{width:'60%',display:'flex',justifyContent:'space-between',alignItems:'center',listStyle:'none'}}>
                    <li onClick = {()=>{
                        history.push({
                            pathname:'/Cards'
                        })
                    }}>Cards</li>
                    <li onClick = {()=>{
                        history.push({
                            pathname:'/Forms'
                        })
                    }}>Forms</li>
                    <li onClick = {()=>{
                        history.push({
                            pathname:'/Dropdowns'
                        })
                    }} >Dropdowns</li>
                    <li onClick = {()=>{
                        history.push({
                            pathname:'/Typography'
                        })
                    }}>Typography</li>
                    <li onClick = {()=>{
                        history.push({
                            pathname:'/Buttons'
                        })
                    }}>Buttons</li>
                    <li onClick = {()=>{
                        history.push({
                            pathname:'Navbars'
                        })
                    }} >NavBars</li>
                </ul>
            </nav>
        </div>
    )

}
