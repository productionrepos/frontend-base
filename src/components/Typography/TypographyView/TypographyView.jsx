import React from 'react'
import Heading1 from '../TypographyComponents/Heading1'
import Heading2 from '../TypographyComponents/Heading2'
import Heading3 from '../TypographyComponents/Heading3'
import Heading4 from '../TypographyComponents/Heading4'
import Heading5 from '../TypographyComponents/Heading5'
import Heading6 from '../TypographyComponents/Heading6'
export default function TypographyView() {
    return (
        <div>
            <p>Typography View</p>
            <Heading1></Heading1>
            <Heading2></Heading2>
            <Heading3 color='#EA4335'></Heading3>
            <Heading4 color='#979797'></Heading4>
            <Heading5 color='#FDD807'></Heading5>
            <Heading6 color='#009B78' text='asdñkajsd'></Heading6>
        </div>
    )
}
