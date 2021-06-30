import React from "react";
import useAPI from "./useAPI";

function App() {
  const { loading, error, contents } = useAPI();
  console.log("contents");
  console.log(loading);
  console.log(error);
  return (
    <div className="App">
      {contents.map((c) => {
        // c = content
        return (
          <div key={c.id}>
            <span>{c.id}</span>
            <span>{c.title}</span>
            <div>{c.content}</div>
          </div>
        );
      })}
      <div>{loading && 'Loading Data...'}</div>
      <div>{error && 'Error\'s happened'}</div>
    </div>
  );
}

export default App;
