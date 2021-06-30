import React from "react";
import useAPI from "./useAPI";

function App() {
  const { loading, error, contents } = useAPI();
  console.log("contents");
  console.log(contents);
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
    </div>
  );
}

export default App;
