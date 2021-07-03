import { useState, useRef, useCallback } from "react";
import useAPI from "./API/useAPI";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import PostDetail from "./components/PostDetail";
import PostSearch from './components/postSearch/PostSearch';
import Tabs from './components/tabs/Tabs';
import PostList from './components/postList/PostList';




function App() {
  const [pageNumber, setPageNumber] = useState(0);
  const [query, setQuery] = useState("");
  const [type, setType] = useState("a");
  const { loading, error, contents, hasMore } = useAPI(type, pageNumber, query);
  const observer = useRef();
  const lastPostElement = useCallback(
    (ele) => {
      // if (loading) return;

      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          console.log("reached bottom.")
          setPageNumber((prev) => prev + 1);
        }
      });
      if (ele) observer.current.observe(ele)
    },
    [hasMore]
  );

  function handleTabA(){
    setType("a");
  }

  function handleTabB(){
    setType("b");
  }

  return (
    <div className="App">
      <Switch>
        <Route path="/PostDetail/:id">
          <PostDetail type={type} />
        </Route>
        <Route path="/">
          <PostSearch value={query} setQuery={setQuery} />
          <Tabs onClickA={handleTabA} onClickB={handleTabB} type={type} />
          <PostList contents={contents} lastPostElement={lastPostElement} />
          <div>{loading && "Loading Data..."}</div>
          <div>{error && "Error's happened"}</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
