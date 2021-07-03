import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';

export default function Post({ key, id, title, content, lastPostElement }) {
  return (
    <Div ref={lastPostElement ? lastPostElement : null}>
      <Link to={`/PostDetail/${id}`}>
        <span className="post-id">{id}. </span>
        <span className="post-title">{title}</span>
        <div className="post-content">{content}</div>
      </Link>
    </Div>
  );
}

const Div = styled.div`
  padding: 1.25rem;
  &:hover {
    background:rgba(0,0,0,.1);
  }

`;
