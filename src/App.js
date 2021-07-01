import { useState, useRef, useCallback } from "react";
import useAPI from "./useAPI";
import "./App.css";
import {Switch, Route} from 'react-router-dom';
import PostDetail from './components/postDetail';

function App() {
  const [pageNumber, setPageNumber] = useState(0);
  const [searchWords, setSearchWords] = useState("");
  const { loading, error, contents, hasMore } = useAPI(pageNumber);
  const observer = useRef();
  const lastPostElement = useCallback(
    (ele) => {
      // if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prev) => prev + 1);
          console.log("reached");
          console.log(contents);
        }
      });
      if (ele) observer.current.observe(ele);
    },
    [hasMore]
  );

 

  return (
    <div className="App">
      <div className="common">I'm a common sense.</div>
      <Switch>
        <Route path="/postDetail">
          <PostDetail />
        </Route>
        <Route path="/">
        <div className="postSearch">
        <div>REACT-SCROLL-APP(개발 과제)</div>
        <div>게시물을 검색해세요</div>
        <div>
          <input onChange={(e) => {
            setSearchWords(e.target.value)
            console.log(e.target.value)
          }} value={searchWords} type="text" placeholder="검색어를 입력해주세요."/>
        </div>
      </div>
      <div className="postList">
        {contents.filter(c => {
          if(searchWords == ""){
            return c;
          } else if(c.title.toLowerCase().includes(searchWords.toLowerCase())){
            return c;
          }
        }).map((c, index) => {
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
                <span>{c.id}. </span>
                <span>{c.title}</span>
                <div>{c.content}</div>
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
