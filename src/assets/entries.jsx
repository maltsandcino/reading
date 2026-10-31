// placeholder body, long enough to test the sticky title and progress indicator
const filler = Array.from({ length: 20 }, (_, i) => <h1 key={i}>entry text</h1>)
import Flapper from './flapper.avif'
import Figure from '../components/figure.jsx'
import SmartGoals from '../components/smart.jsx'

const smartGoals = [
    { letter: 'S', term: 'Specific', text: 'My ultimate goal is specifically to read the novel in a reasonable time period.' },
    { letter: 'M', term: 'Measurable', text: 'I should read a set number of pages, so that I know whether my goal was achieved or not.' },
    { letter: 'A', term: 'Attainable', text: "By setting a reasonable and attainable goal (or, sub-goal), I won't quickly burn-out or lose interest." },
    { letter: 'R', term: 'Relevant', text: 'Obviously this has to be relevant to reading the novel (and understanding it)' },
    { letter: 'T', term: 'Time-bound', text: 'I want to accomplish this in a reasonable amount of time, while continuing with the rest of my coursework in English.' },
]

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
    <Figure
        media={Flapper}
        number={1}
        description="A typical depiction of a flapper"
        sitename="History"
        publisher="A&E Television Networks"
        day="6" month="Mar." year="2018"
        link="www.history.com/articles/flappers"
    />
    <br></br>
    <p>The social and historical perspective of the book intrigued me, and while all the choices for this exercise have their merits, I was interested in learning more about the 1920s, and hoping to make comparisons to society today. The 1920s was a time of rapidly shifting norms. What we might consider to be normal, modern aspects of our everyday
        today started to become norms in this period. Things such as the wide-spread adoption of automobiles, women's role in the workplace, and new genres of music all saw their genesis in this era. Technology was rapidly progressing, and I see a lot of parallels between politics and society in that time and what is happening politically and economically 
        today in North America. Right now, certain companies are reaching evaluations in the trillions of dollars, owing to new technologies (such as generative AI), and I am interested to draw more parallels as I learn more about life in the 1920s.
    </p>
    <br></br>
    <Figure
        media="https://www.youtube.com/embed/VfOR1XCMf7A?si=Pqfi9cMwLjSRSeqT"
        number={2}
        description="The Roaring 20's: Crash Course US History #32"
        sitename="YouTube"
        publisher="CrashCourse"
        day="4" month="Oct." year="2013"
        link="www.youtube.com/watch?v=VfOR1XCMf7A"
    />
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
    { id: 'entry-2', title: 'Reading Schedule', content: <>
    <p>Making a schedule and sticking to it can be tough sometimes. Whether life gets in the way, interest wanes, or you simply feel burnt out, sometimes you lose motivation and find yourself either spinning your wheels, starting over from page one, or simply not caring
    about your task enough to complete it. I've noticed that this can happen in any facet of life; often times it's easy to start strong but to lose steam very quickly, especially when it comes to starting something new. This can happen with an exercise routine just as it can 
    happen with your work.</p>
    <br></br>
    <p>I have some experience with goal-setting and task decomposition from my own work-life. As an example, generally when a new task or project is assigned, I am required to break this down into sub-tasks, assigning a time estimate for each sub-task. I log my time as I work on a sub-task, and I monitor
    the progress by keeping my 'ticket' (some representation of the task with an explanation, requirements, and other traits) updated with the correct status. This approach works for me, although it's not a perfect fit for reading <i>The Great Gatsby</i>, because that system is also designed for the rest 
    of my team to keep track of each other's work.</p>
    <br></br>
    <p>That said, the idea of decomposing the book into sub-tasks (such as, note consolidation and reading) is worth some consideration. Next to that, I think it's important to integrate the concept of SMART goals into my potential reading schedule. Although I am sure you, reading my journal, are already aware of
    what these are, I'm going to expand a little on what that acronym means:</p>

    <SmartGoals items={smartGoals} />

    <p>I think that setting reasonable, small goals is the correct approach for reading this novel. This gives me time to reflect on what I have read, as well. I will not feel rushed and I will not be inclined to gloss over what seem like less-important details from the novel.</p>
    <br></br>
    <p>I have specifically chosen this as my reading schedule:</p>
    <br></br>
    <p><i>Each day, I shall read 10 pages (or more, if I happen to end at a point where it would be very distracting to stop immediately) from the novel and give myself time to reflect.</i></p>
    <br></br>
    <p>The version of the novel I have ends on page 189. This means it will take me only 19 days to read, or less than three weeks. I chose 10 pages because it's a very digestible number of pages, and won't cause me to be overwhelmed. It is not a lot of reading, and will allow me to fit it into my regular schedule
    without adding extra stress and inciting worry that, by the end of the day, I have to read an entire chapter (or more). Because I am just starting the course, I should be well on target to finish the novel before the end of the course. Additionally, doing this simultaneously with learning new things in the rest of
    the course will give me a chance to develop my literary criticism skills before finishing my reading journal. For these reasons, I feel as though it is a SMART goal, and I am already on track with my reading schedule.</p>
    </> },
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
