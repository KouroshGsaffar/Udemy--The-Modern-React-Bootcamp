import React from 'react'

export default function Link({ className, href, children }) {
    const onClick = (e) => {
        e.preventDefault()
        window.history.pushState({}, '', href)

        const navEvent = new PopStateEvent('popstate')
        window.dispatchEvent(navEvent)
    }
    return (
        <a onClick={onClick} className={className} href={href}>
            {children}
        </a>
    )
}
