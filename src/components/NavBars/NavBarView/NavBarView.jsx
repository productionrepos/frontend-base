import React from 'react'
import WhiteDropdown from '../NavBarComponents/WhiteDropdown'
import WhiteHamburguer from '../NavBarComponents/WhiteHamburguer'
import BlackDropdown from '../NavBarComponents/BlackDropdown'
import BlackHamburgeur from '../NavBarComponents/BlackHamburgeur'
export default function NavBarView() {
    let lista = [
        {
            href:'#casa',
            ref_text:'Casa'
        },
        {
            href:'#zelda',
            ref_text:'zelda'
        },
        {
            href:'#about',
            ref_text:'About'
        }
    ]
    return (
        <div>
            <WhiteDropdown></WhiteDropdown>
            <br />
            <WhiteHamburguer links = {lista}></WhiteHamburguer>
            <br />
            <BlackDropdown></BlackDropdown>
            <br />
            <BlackHamburgeur></BlackHamburgeur>
        </div>
    )
}
