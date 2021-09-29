import React from 'react'
import './Heading.css'
export default function Heading3({color,text}) {
    return (
        <h3 style={{fontSize:'1.5vw',color:color ,lineHeight:'35px'}} className='test'>{ text || 'Heading3'}</h3>
    )
}
