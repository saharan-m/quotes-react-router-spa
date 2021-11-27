import { useEffect } from "react/cjs/react.development";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";
// const DUMMY_QUOTES=[
//     {id:'m1',author:'minku',text:'HEHEHEHE'},
//     {id:'m2',author:'gonu',text:'Food is life'},
//     {id:'m3',author:'mammi',text:'Vegetarian food ONLY!'}
// ]
const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);
  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if(error){
   return <p className='centered focused'>{error}</p>
  }
  if(status==='completed'&&(!loadedQuotes||loadedQuotes.length === 0)){
    return <NoQuotesFound/>
  }
  return <QuoteList quotes={loadedQuotes} />;
};

export default AllQuotes;