import { useEffect, useRef } from 'react'
import Indicator from './indicator.jsx'
import Divider from './divider.jsx'

import './entry.css'

export default function Entry({title, children, id}) {
    const ref = useRef(null)

    useEffect(() => {
        const el = ref.current
        const onScroll = () => {
            // 0 when the entry's top reaches the top of the screen,
            // 1 when its bottom reaches the bottom of the screen
            const { top, height } = el.getBoundingClientRect()
            const span = Math.max(height - window.innerHeight, 1)
            const progress = Math.min(Math.max(-top / span, 0), 1)
            el.style.setProperty('--progress', progress)
        }

        onScroll()
        window.addEventListener('scroll', onScroll, {passive: true})
        window.addEventListener('resize', onScroll)
        return () => {
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('resize', onScroll)
        }
    }, [])

    return (
        <>
        <div className="entry" id={id} ref={ref}>
            <div className="entry-title">
                <h2>{title}</h2>
                <Indicator></Indicator>
            </div>
            <div className="entry-text">
                {children}
            </div>
        </div>
        <Divider />
        </>
    )
}
