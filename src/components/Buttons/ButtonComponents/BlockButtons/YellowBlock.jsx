import React from 'react'

import './BlockButton.css'
import { Button } from 'react-bootstrap'

export default function YellowBlock({text}) {
    return (
        <div>
            <Button style = {{background:'radial-gradient(50% 50% at 50% 50%, #FDD807 0%, #FBBC05 100%)'}}  variant='green'> { text || 'YELLOW BLOCK' } </Button>
        </div>
    )
}
