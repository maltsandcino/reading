import { useEffect, useRef, useState } from 'react'

import './smart.css'

// items: [{ letter, term, text }]
// The rows fade in one after another the first time the list scrolls into view
export default function SmartGoals({items, title = 'SMART Goals'}) {
    const ref = useRef(null)
    // without IntersectionObserver there is nothing to wait for, so show everything straight away
    const [visible, setVisible] = useState(() => !('IntersectionObserver' in window))

    useEffect(() => {
        if (visible) return

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setVisible(true)
                observer.disconnect()
            }
        }, {threshold: 0.2})

        observer.observe(ref.current)
        return () => observer.disconnect()
    }, [visible])

    return (
        <section className={`smart framed${visible ? ' is-visible' : ''}`} ref={ref}>
            <header className="smart-head">
                <span className="smart-rule" aria-hidden="true"></span>
                <h3 className="smart-title">{title}</h3>
                <span className="smart-rule" aria-hidden="true"></span>
            </header>
            {/* role is restated because Safari drops list semantics once list-style is none */}
            <ol className="smart-list" role="list">
                {items.map(({letter, term, text}, i) => (
                    <li className="smart-item" key={letter + i} style={{'--i': i}}>
                        <span className="smart-letter" aria-hidden="true">{letter}</span>
                        <div className="smart-body">
                            <h4 className="smart-term">{term}</h4>
                            <p className="smart-text">{text}</p>
                        </div>
                    </li>
                ))}
            </ol>
        </section>
    )
}
