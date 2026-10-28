import { useEffect, useState } from 'react'

import './menu.css'

export default function Menu({entries}) {
    const [activeId, setActiveId] = useState(null)

    useEffect(() => {
        let frame = 0
        const update = () => {
            frame = 0
            // the current entry is the last one whose top has passed a line a third of the way down the screen
            const line = window.innerHeight / 3
            let current = null
            for (const entry of entries) {
                const el = document.getElementById(entry.id)
                if (el && el.getBoundingClientRect().top <= line) current = entry.id
            }
            // the last entry can be too short for its top to ever reach the line
            const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
            if (atBottom) current = entries[entries.length - 1].id
            setActiveId(current)
        }
        const onScroll = () => {
            if (!frame) frame = requestAnimationFrame(update)
        }

        update()
        window.addEventListener('scroll', onScroll, {passive: true})
        window.addEventListener('resize', onScroll)
        return () => {
            cancelAnimationFrame(frame)
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('resize', onScroll)
        }
    }, [entries])

    return (
        <nav className="menu" aria-label="Entries">
            {entries.map((entry, i) => (
                <a key={entry.id} href={`#${entry.id}`} title={entry.title}
                   aria-current={entry.id === activeId ? 'location' : undefined}>
                    {entry.id == 'entry-11' ? "Refs" : i + 1}
                </a>
            ))}
        </nav>
    )
}
