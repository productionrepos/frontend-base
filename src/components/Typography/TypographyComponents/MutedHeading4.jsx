import React from 'react'
import './Heading.css'

export default function MutedHeading4({color,text,mutedText}) {
    return (
        <div>
            <h4 style={{fontSize:'1.3vw',color:color ,lineHeight:'33px'}}  className='test'>{text || 'Heading4'}
                <small class="text-muted">{ mutedText || ' with muted text'}</small>
            </h4>
        </div>
    )
}
