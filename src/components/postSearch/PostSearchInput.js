import React from "react";
import styled from "styled-components";

export default function PostSearchInput({ query, setQuery, inputObserver }) {
  return (
    <Input
      onChange={(e) => {
        setQuery(e.target.value);
      }}
      value={query}
      type="text"
      placeholder="검색어를 입력해주세요."
      ref={inputObserver}
    />
  );
}

const Input = styled.input`
  width: 100%;
  height: 1rem;
  border: none;
  &:focus {
    outline:none;
  }
`;
