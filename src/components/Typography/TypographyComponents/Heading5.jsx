import React from 'react'
import './Heading.css'
export default function Heading5({color,text}) {
    return (
        <h5 style={{fontSize:'1.1vw',color:color ,lineHeight:'30px'}}  className='test'>{ text || 'Heading5'}</h5>
    )
}
