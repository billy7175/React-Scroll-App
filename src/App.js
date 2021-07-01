import {useState, useRef, useCallback} from "react";
import useAPI from "./useAPI";

function App() {
  const [pageNumber, setPageNumber] = useState(0);
  const { loading, error, contents, hasMore } = useAPI(pageNumber);
  const observer = useRef();
  console.log("loading", loading)
  console.log("error", error);
  console.log("contents", contents);
  console.log("hasMore", hasMore)
  const lastPostElement = useCallback(ele => {
    if(loading) return;
    if(observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries =>{
      if(entries[0].isIntersecting && hasMore){
        setPageNumber(prev => prev+1);
        console.log('reached')
        console.log(contents)
      }
    })
    if(ele) observer.current.observe(ele);
  },[loading, hasMore]);

  return (
    <div className="App">
      {contents.map((c, index) => {
        // c = content
        if(contents.length === index +1){
          return (
            <div key={c.id} ref={lastPostElement}>
              <span>{c.id} </span>
              <span>{c.title}</span>
              <div>{c.content}</div>
            </div>
          );
        } else {
          return (
            <div key={c.id}>
              <span>{c.id} </span>
              <span>{c.title}</span>
              <div>{c.content}</div>
            </div>
          );
        }
        
      })}
      <div>{loading && 'Loading Data...'}</div>
      <div>{error && 'Error\'s happened'}</div>
    </div>
  );
}

export default App;
