import { useState, useEffect } from "react";
import useRefList from "./utils/useRefList";
import styled from "styled-components";
import useAPI from "./API/useAPI";
import { Switch, Route } from "react-router-dom";
import PostDetail from "./components/postDetail/PostDetail";
import PostSearch from "./components/postSearch/PostSearch";
import Tabs from "./components/tabs/Tabs";
import PostList from "./components/postList/PostList";

function App() {
  const [type, setType] = useState("a");
  const [pageNumber, setPageNumber] = useState(0);
  const [query, setQuery] = useState("");
  const { loading, error, contents, hasMore } = useAPI(type, pageNumber, query);

  useEffect(() => {
    setPageNumber(0);
  }, [query]);

  // Look for lastElement of API Data
  const {
    lastPostElement,
    inputWrapperObserver,
    inputObserver,
    inputFocus,
    removeInputFocus,
  } = useRefList(setPageNumber, hasMore);

  function handleTabA() {
    setType("a");
  }

  function handleTabB() {
    setType("b");
  }

  return (
    <Div>
      <Switch>
        <Route path="/PostDetail/:id">
          <PostDetail type={type} />
        </Route>
        <Route path="/">
          <PostSearch
            value={query}
            setQuery={setQuery}
            inputWrapperObserver={inputWrapperObserver}
            inputObserver={inputObserver}
            onClick={inputFocus}
            onBlur={removeInputFocus}
          />
          <Tabs onClickA={handleTabA} onClickB={handleTabB} type={type} />
          <PostList
            contents={contents}
            lastPostElement={lastPostElement}
            loading={loading}
            error={error}
            hasMore={hasMore}
          />
        </Route>
      </Switch>
    </Div>
  );
}

export default App;

const Div = styled.div`
  width: 1000px;
  max-width: 100%;
  margin: auto;
  padding: 3rem;
`;
