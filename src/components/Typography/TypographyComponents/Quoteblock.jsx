import React from 'react'

export default function Quoteblock({text,author}) {
    return (
        <div>
            <figure>
                <blockquote className="blockquote">
                    <p className="mb-0">{ text ||  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."}</p>                        
                </blockquote>
                <figcaption className="blockquote-footer">
                    <cite title="Source Title">{ author || 'Source Title'}</cite>
                </figcaption>
            </figure>
        </div>
    )
}
