import React from 'react'
import './Heading.css'
export default function Heading1({text,color}) {
    return (
        <h1 style={{fontSize:'1.8vw', color:color ,lineHeight:'44px'}} className='test'>{ text || 'Heading1'}</h1>
    )
}

