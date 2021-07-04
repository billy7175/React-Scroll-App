import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Post({ key, id, title, content, lastPostElement }) {
  return (
    <Div ref={lastPostElement ? lastPostElement : null}>
      <Link to={`/PostDetail/${id}`}>
        <Id className="post-id">{id}. </Id>
        <Title className="post-title">{title}</Title>
        <Content className="post-content">{content}</Content>
      </Link>
    </Div>
  );
}

const Div = styled.div`
  padding: 1.25rem;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

const Id = styled.span`
  color: #3b82f6;
  font-weight: 500;
  font-size:20px;
`;

const Title = styled.span`
  font-weight: 500;
  font-size:20px;
`;

const Content = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  margin-top: 0.25rem;
`;
