import React from 'react'

export default function Link({ className, href, children }) {
    const onClick = (e) => {
        e.preventDefault()
        window.history.pushState({}, '', href)
    }
    return (
        <a onClick={onClick} className={className} href={href}>
            {children}
        </a>
    )
}
