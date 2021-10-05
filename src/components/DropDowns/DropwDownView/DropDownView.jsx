import React from 'react'
import BlackDropdown from '../DropDownComponents/BlackDropdown'

import GreenDropdown from '../DropDownComponents/GreenDropdown'
import RedDropdown from '../DropDownComponents/RedDropdown'
import YellowDropdown from '../DropDownComponents/YellowDropdown'

export default function DropDownView() {
    return (
        <div>
            <GreenDropdown/>
            <YellowDropdown/>
            <BlackDropdown/>
            <RedDropdown/>          
        </div>
    )
}
