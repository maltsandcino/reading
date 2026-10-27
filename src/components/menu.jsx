import './menu.css'

export default function Menu({entries}) {
    return (
        <nav className="menu" aria-label="Entries">
            {entries.map((entry, i) => (
                <a key={entry.id} href={`#${entry.id}`} title={entry.title}>
                    {entry.id == 'entry-11' ? "Refs" : i + 1}
                </a>
            ))}
        </nav>
    )
}
