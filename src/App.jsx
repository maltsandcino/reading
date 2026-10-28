import { useState } from 'react'
import Scrollbar from './components/scroller.jsx'
import Entry from './components/entry.jsx'
import Divider from './components/divider.jsx'
import Menu from './components/menu.jsx'
import entries from './assets/entries.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Scrollbar></Scrollbar>
      <Menu entries={entries}></Menu>
      <section className="hero">
        <h1>The Great Gatsby</h1>
        <h2>A Reading Journal by Thomas Harrison</h2>
      </section>
      <section>
        <Divider />
        <p className="intro">Scroll down the page to read each entry in my journal. You can scroll directly to entries, or click on the numbers to jump directly to the entry of your choice.</p>
        <Divider />
      </section>
      {entries.map((entry) => (
        <Entry key={entry.id} id={entry.id} title={entry.title}>
          {entry.content}
        </Entry>
      ))}
     
    </>
  )
}

export default App
