import React from 'react'

import './Heading.css'

export default function MutedHeading3({color,text,mutedText}) {
    return (
        <div>
            <h3 style={{fontSize:'1.5vw',color:color ,lineHeight:'35px'}} className='test'>{ text || 'Heading3'}
                <small class="text-muted">{ mutedText || 'with muted text'}</small>    
            </h3>
        </div>
    )
}
