import { useEffect, useState } from 'react'

import './scroller.css'

export default function Scrollbar() {

    const [progress, setProgress] = useState(0) // 0 at top, 1 at bottom

    useEffect(() => {
        const onScroll = () => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? window.scrollY / max : 0)
        }
    
    onScroll()
    window.addEventListener('scroll', onScroll, {passive: true})
    return () => window.removeEventListener('scroll', onScroll)
}, [])

    return (
        <div className="side-scroll">
            <div
                className="side-scroll-fill"
                style={{ '--scroll': progress }}
            />
        </div>
    )
}