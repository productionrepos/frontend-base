import React from 'react'
import './LinkButton1.css'
import { Button } from 'react-bootstrap'
export default function LinkButton1({texto,url}) {

    return (
        <a style={{color:'#8B8B8B', fontSize:'28px',lineHeight:'38px',letterSpacing:'3px',textDecorationLine:'underline'}} href={url || ''}>{texto || 'Link1'}</a>

    )
}
