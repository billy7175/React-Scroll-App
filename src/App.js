import { useState, useRef, useCallback } from "react";
import useAPI from "./API/useAPI";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import PostDetail from "./components/PostDetail";

function App() {
  const [pageNumber, setPageNumber] = useState(0);
  const [query, setQuery] = useState("");
  const [type, setType] = useState("a");
  const { loading, error, contents, hasMore } = useAPI(type, pageNumber, query);
  const observer = useRef();
  const lastPostElement = useCallback(
    (ele) => {
      // if (loading) return;
      console.log("observer", observer);
      console.log("observer.current", observer.current)
      if (observer.current) observer.current.disconnect();
      console.log("after disconnect", observer);
      console.log("after disconncet", observer.current);
      observer.current = new IntersectionObserver((entries) => {
        console.log("after instance", observer);
        console.log("after instance", observer.current)
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prev) => prev + 1);
          console.log("reached");
          console.log(contents);
        }
      });
      if (ele){
        console.log(ele);
        observer.current.observe(ele)
      };
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
      <div className="common">I'm a common sense.</div>
      <Switch>
        <Route path="/PostDetail/:id">
          <PostDetail type={type} />
        </Route>
        <Route path="/">
          <div className="postSearch">
            <div>REACT-SCROLL-APP(개발 과제)</div>
            <div>게시물을 검색해세요</div>
            <div>
              <input
                onChange={(e) => {
                  setQuery(e.target.value);
                  console.log(e.target.value);
                }}
                value={query}
                type="text"
                
                placeholder="검색어를 입력해주세요."
              />
            </div>
          </div>
          <div className="tabs">
            <a onClick={handleTabA} className={type === "a" ? "active" : ""}>postA</a>
            <a onClick={handleTabB} className={type === "b" ? "active" : ""}>postB</a>
          </div>
          <div className="postList">
            
            {contents
              // .filter((c) => {
              //   if (query == "") {
              //     return c;
              //   } else if (
              //     c.title.toLowerCase().includes(query.toLowerCase())
              //   ) {
              //     return c;
              //   }
              // })
              .map((c, index) => {
                // c = content
                if (contents.length === index + 1) {
                  return (
                    <div key={c.id} ref={lastPostElement}>
                      <span>{c.id}. </span>
                      <span>{c.title}</span>
                      <div>{c.content}</div>
                    </div>
                  );
                } else {
                  return (
                    <div key={c.id}>
                      <Link to={`/PostDetail/${c.id}`}>
                        <span>{c.id}. </span>
                        <span>{c.type}</span>
                        <span>{c.title}</span>
                        <div>{c.content}</div>
                      </Link>
                    </div>
                  );
                }
              })}
          </div>
          <div>{loading && "Loading Data..."}</div>
          <div>{error && "Error's happened"}</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
