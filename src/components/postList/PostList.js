import Post from "./Post";
import styled from "styled-components";

export default function PostList({ contents, lastPostElement, loading, error }) {
  
  
  return (
    <Div>
      {loading && <div>{loading && "Loading Data..."}</div>}
      {error && <div>{error && "Error's happened"}</div>}
      {contents.map((c, index) => {
        if (contents.length === index + 1) {
          return <Post id={c.id} title={c.title} content={c.content} lastPostElement={lastPostElement}  />;
        } else {
          return <Post id={c.id} title={c.title} content={c.content}  />;
        }
      })}
    </Div>
  );
}

const Div = styled.div`
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 1rem;
`;
