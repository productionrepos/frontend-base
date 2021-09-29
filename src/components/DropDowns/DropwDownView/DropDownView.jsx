import React from 'react'
import DropDown from '../DropDownComponents/DropDown'
import GreenDropdown from '../DropDownComponents/GreenDropdown'
import YellowDropdown from '../DropDownComponents/YellowDropdown'
import BlackDropdown from '../DropDownComponents/BlackDropdown'
import RedDropdown from '../DropDownComponents/RedDropdown'
export default function DropDownView() {
    return (
        <div>
            <br />
            <DropDown text='preuba' actions = {[]}></DropDown>
            <br />
            <GreenDropdown></GreenDropdown>
            <br />
            <YellowDropdown></YellowDropdown>
            <br />
            <BlackDropdown></BlackDropdown>
            <br />
            <RedDropdown></RedDropdown>
        </div>
    )
}
