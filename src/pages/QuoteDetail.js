import { Fragment } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

const QuoteDetail = () => {
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote,true);
  const match = useRouteMatch();
  const params = useParams();
  const {quoteId} = params;
  console.log(match);
  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest,quoteId]);
  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return <p className="centered focused">{error}</p>;
  }
  if (status === "completed" && !loadedQuote.text) {
    return <NoQuotesFound />;
  }
  //   const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  else
    return (
      <Fragment>
        <HighlightedQuote author={loadedQuote.author} text={loadedQuote.text} />
        <Route path={match.path} exact>
          <div className="centered">
            <Link className="btn--flat" to={`${match.url}/comments`}>
              Load Comments
            </Link>
          </div>
        </Route>

        <Route path={`${match.path}/comments`}>
          <Comments />
        </Route>
      </Fragment>
    );
};

export default QuoteDetail;
