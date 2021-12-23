import React from 'react'
import './Heading.css'
export default function Heading6({color,text}) {
    return (
        <h6 style={{fontSize:'0.9vw',color:color, lineHeight:'27px'}}  className='test' >{ text || 'Heading6'}</h6>
    )
}
