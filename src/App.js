import { useState, useEffect, useRef, useCallback } from "react";
import styled from 'styled-components';
import useAPI from "./API/useAPI";
import { Switch, Route } from "react-router-dom";
import PostDetail from "./components/postDetail/PostDetail";
import PostSearch from "./components/postSearch/PostSearch";
import Tabs from "./components/tabs/Tabs";
import PostList from "./components/postList/PostList";
import "./App.css";

function App() {
  const [pageNumber, setPageNumber] = useState(0);
  const [query, setQuery] = useState("");
  const [type, setType] = useState("a");
  const { loading, error, contents, hasMore } = useAPI(type, pageNumber, query);
  const observer = useRef();
  useEffect(() => {
    setPageNumber(0);
  }, [query]);
  const lastPostElement = useCallback(
    (ele) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          console.log("reached bottom.");
          setPageNumber((prev) => prev + 1);
        }
      });
      if (ele) observer.current.observe(ele);
    },
    [hasMore]
  );

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
          <PostSearch value={query} setQuery={setQuery} />
          <Tabs onClickA={handleTabA} onClickB={handleTabB} type={type} />
          <PostList
            contents={contents}
            lastPostElement={lastPostElement}
            loading={loading}
            error={error}
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
