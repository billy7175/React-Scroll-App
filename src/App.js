import {useState, useRef, useCallback} from "react";
import useAPI from "./useAPI";

function App() {
  const [pageNumber, setPageNumber] = useState(0);
  const { loading, error, contents } = useAPI(pageNumber);
  const observer = useRef();
  const lastPostElement = useCallback(ele => {
    if(loading) return;
    if(observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries =>{
      if(entries[0].isIntersecting){
        setPageNumber(prev => prev+1);
        console.log('reached')
        console.log(contents)
      }
    })
    if(ele) observer.current.observe(ele);
  },[loading]);
  console.log("contents");
  console.log(loading);
  console.log(error);
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
