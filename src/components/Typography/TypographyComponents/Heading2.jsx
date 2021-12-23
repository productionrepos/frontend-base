import React from 'react'
import './Heading.css'
export default function Heading2({text,color}) {
    return (
        <h2  style={{fontSize:'1.6vw', color:color ,lineHeight:'38px'}}  className='test'>{text || 'Heading2'}</h2>
    )
}
