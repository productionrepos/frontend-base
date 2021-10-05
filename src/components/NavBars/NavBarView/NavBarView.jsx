import React from 'react'

import BlackNavbar from '../NavBarComponents/BlackNavbar'
import GreenNavbar from '../NavBarComponents/GreenNavbar'

export default function NavBarView() {
    // let lista = [
    //     {
    //         href:'#casa',
    //         ref_text:'Casa'
    //     },
    //     {
    //         href:'#zelda',
    //         ref_text:'zelda'
    //     },
    //     {
    //         href:'#about',
    //         ref_text:'About'
    //     }
    // ]
    return (
        <div>
            <BlackNavbar></BlackNavbar>
            <br />
            <GreenNavbar></GreenNavbar>
        </div>
    )
}
