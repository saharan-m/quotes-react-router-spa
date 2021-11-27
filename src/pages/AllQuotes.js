import QuoteList from "../components/quotes/QuoteList";
const DUMMY_QUOTES=[
    {id:'m1',author:'minku',text:'This sucks'},
    {id:'m2',author:'gonu',text:'Food is life'},
    {id:'m3',author:'mammi',text:'Hindu Religion da best'}
]
const AllQuotes = ()=>{
    return <QuoteList quotes={DUMMY_QUOTES}/>
}

export default AllQuotes;