import React from 'react'
import GreenAlert from '../GreenAlert'

import YellowAlert from '../YellowAlert'

export default function AlertView() {
    return (
        <>
           <YellowAlert/> 
           <GreenAlert></GreenAlert>
        </>
    )
}
