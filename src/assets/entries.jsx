// placeholder body, long enough to test the sticky title and progress indicator
const filler = Array.from({ length: 20 }, (_, i) => <h1 key={i}>entry text</h1>)
import Flapper from './flapper.avif'

const entries = [
    { id: 'entry-1', title: 'Why Choose The Great Gatsby?', content: 
    <>
    <p>Choosing a novel to read can be a difficult task. One can spend hours choosing something that might satisfy a desire or interest. In some cases, finding something that interests you could take longer than reading the actual work itself. When it came to this assignment, however, that was not the case. 
        When I was presented with the options for this reading journal activity, I knew fairly quickly that I would choose the Great Gatsby. While its reputation was what initially intrigued me, I soon found many other reasons to support my choice of novel. While I did consider each of the other options presented
        to me, after some initial research I quickly decide to choose <i>The Great Gatsby</i></p>
    <br></br>
    <p>Written by F. Scott Fitzgerald in France in the 1924 and early 1925, the story takes place in 1922 on Long Island. The story is narrated by Nick Calloway, who has come to Long Island from the Midwest to work as a bond salesman. Nick is a neighbour and friend of Jay Gatsby, the eponymous character, as well
        as the cousin of Gatsby's love interest, the married Daisy Buchanan. The main themes, besides naturally the themes of love an desire, were very topical to the time-period, the roaring twenties. The book depicts decadence, social class struggle, obsession and illusion, and the 'American Dream'. The book also protrays some character
        types which were relatively new at the time, and no doubt were inspired by the flappers of the 1920s. The flapper archetype is present in this and other of Fitzgerald's works.</p>
    <br></br>
    <figure>
    <img src={Flapper} alt="[describe the image]" />
    <figcaption>
        Fig. 1. [Description of the image]. <i>[Website or Publication]</i>, [Publisher], [Day Mon. Year], www.history.com/articles/flappers.
    </figcaption>
    </figure>
    <br></br>
    <p>The social and historical perspective of the book intrigued me, and while all the choices for this exercise have their merits, I was interested in learning more about the 1920s, and hoping to make comparisons to society today. The 1920s was a time of rapidly shifting norms. What we might consider to be normal, modern aspects of our everyday
        today started to become norms in this period. Things such as the wide-spread adoption of automobiles, women's role in the workplace, and new genres of music all saw their genesis in this era. Technology was rapidly progressing, and I see a lot of parallels between politics and society in that time and what is happening politically and economically 
        today in North America. Right now, certain companies are reaching evaluations in the trillions of dollars, owing to new technologies (such as generative AI), and I am interested to draw more parallels as I learn more about life in the 1920s.
    </p>
    <br></br>
    <figure>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/VfOR1XCMf7A?si=Pqfi9cMwLjSRSeqT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <figcaption>
        Fig. 2. [Description of the image]. <i>[Website or Publication]</i>, [Publisher], [Day Mon. Year], www.history.com/articles/flappers.
    </figcaption>
    </figure>
    <br></br>
    <p>Another factor in my choice was the actual writing style of <i>The Great Gatsby</i>. I have not read anything else by Fitzgerald, however I do know from my initial research that he was a contemporary and friend of Hemingway, whose relatively terse prose I do
        enjoy. From the excerpt I read as part of choosing a subject, I did find that it was more verbose than Hemingway, and reminded me of my own writing to a degree. Fitzgerald himself attended Princeton until 1917, but did not graduate. He enlisted in the army before his expected grauation date,
        and had a short career after leaving the army before ultimately focussing explicitly on his writing. He quickly found success as an author, several years before penning <i>The Great Gatsby</i>, and lived a relatively tumultuous, volatile life with his wife up to the time the book was completed.
        The taste of affluence, and all the negative things they brought with them, such as substance abuse and marital problems, might be reflected in the book (I have not yet read the book, so I cannot say yet if this is reflected in the story). I can't say that Fitzgerald's voice will be necessarily new 
        to me, in that I have read works by authors with somewhat similar backgrounds; however it does speak to me as some aspects of his own life remind me of mine. I come from a similar background, attended university, and also lived in Europe, though I work in an industry which didn't exist in his time. 
        The more controversial side to his life is something that was (fortunately) missing in my own.</p>
    <br></br>
    <p>
        All that being said, I am excited to begin reading the book not only for the story itself, but also for the chance to look into a mirror reflecting from a century in the past. I look forward to the chance to reflect on where we are, from whence we came, and whither we are going.
    </p>
    </> },
    { id: 'entry-2', title: 'another title', content: <>{filler}</> },
    { id: 'entry-3', title: 'another title', content: <>{filler}</> },
    { id: 'entry-4', title: 'another title', content: <>{filler}</> },
    { id: 'entry-5', title: 'another title', content: <>{filler}</> },
    { id: 'entry-6', title: 'another title', content: <>{filler}</> },
    { id: 'entry-7', title: 'another title', content: <>{filler}</> },
    { id: 'entry-8', title: 'another title', content: <>{filler}</> },
    { id: 'entry-9', title: 'another title', content: <>{filler}</> },
    { id: 'entry-10', title: 'another title', content: <>{filler}</> },
    { id: 'entry-11', title: 'References', content: <>
    This needs to be done in MLA Format
    Entry 1:

    https://www.history.com/articles/flappers
    https://www.youtube.com/embed/VfOR1XCMf7A?si=Pqfi9cMwLjSRSeqT
    https://thenarrativearc.org/great-gatsby
    https://sc.edu/about/offices_and_divisions/university_libraries/browse/irvin_dept_special_collections/collections/matthew_arlyn_bruccoli_collection_of_f_scott_fitzgerald/life_of_fitzgerald/
    
    
    </> },
]

export default entries
