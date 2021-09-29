import React from 'react'
import './Heading.css'
export default function Heading4({color,text}) {
    return (
        <h4 style={{fontSize:'1.3vw',color:color ,lineHeight:'33px'}}  className='test'>{text || 'Heading4'}</h4>
    )
}
