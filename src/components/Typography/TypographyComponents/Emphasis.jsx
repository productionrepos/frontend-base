import React from 'react'

// import { Container } from 'react-bootstrap'

export default function Emphasis({color,text}) {
    return (
        <div>
            <p className={ color || "text-primary"}>{ text || "Nullam id dolor id nibh ultricies vehicula ut id elit."}</p>
        </div>
    )
}
