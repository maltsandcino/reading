// placeholder body, long enough to test the sticky title and progress indicator
const filler = Array.from({ length: 20 }, (_, i) => <h1 key={i}>entry text</h1>)

const entries = [
    { id: 'entry-1', title: 'title', content: <>{filler}</> },
    { id: 'entry-2', title: 'another title', content: <>{filler}</> },
    { id: 'entry-3', title: 'another title', content: <>{filler}</> },
    { id: 'entry-4', title: 'another title', content: <>{filler}</> },
    { id: 'entry-5', title: 'another title', content: <>{filler}</> },
    { id: 'entry-6', title: 'another title', content: <>{filler}</> },
]

export default entries
