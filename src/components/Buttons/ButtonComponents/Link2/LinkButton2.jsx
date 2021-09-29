import React from 'react'

export default function LinkButton2({texto, url}) {
    return (
        <div>
            <a style={{color:'#009B78', fontSize:'28px',lineHeight:'38px',letterSpacing:'3px',textDecorationLine:'underline'}} href={url || ''}>{texto || 'Link2'}</a>
        </div>
    )
}
