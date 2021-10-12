import React from 'react'
import './Heading.css'
export default function MutedHeading6({color,text,mutedText}) {
    return (
        <div>
            <h6 style={{fontSize:'0.9vw',color:color, lineHeight:'27px'}}  className='test' >{ text || 'Heading6'}
               <small class="text-muted">{ mutedText || ' with muted text'}</small>
            </h6>
        </div>
    )
}
