import { Fragment } from "react";
import { useParams, Route,Redirect } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES=[
    {id:'m1',author:'minku',text:'This sucks'},
    {id:'m2',author:'gonu',text:'Food is life'},
    {id:'m3',author:'mammi',text:'Hindu Religion da best'}
]
const QuoteDetail = () => {
    const params = useParams();
    const quote = DUMMY_QUOTES.find(quote=>quote.id===params.quoteId)
    if(!quote){
        return <Redirect to='/no-quotes-found'/>
    }
  return (
    <Fragment>
      <HighlightedQuote author={quote.author} text={quote.text}/>
      
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
