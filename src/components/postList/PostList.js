import Post from "./Post";
import styled from "styled-components";

export default function PostList({ contents, lastPostElement, loading, error,hasMore}) {
  
  
  return (
    <Div>
      {loading && <div>Loading Data...</div>}
      {error && <div>Error's happened</div>}
      {contents.map((c, index) => {
        if (contents.length === index + 1) {
          return <Post key={c.id} id={c.id} title={c.title} content={c.content} lastPostElement={lastPostElement}  />;
        } else {
          return <Post key={c.id} id={c.id} title={c.title} content={c.content}  />;
        }
      })}
      {!loading && contents.length === 0 && <div>No Data Found</div>}
    </Div>
  );
}

const Div = styled.div`
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 1rem;
`;
