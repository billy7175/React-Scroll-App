import React from "react";
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";
import PostSearchInput from "./PostSearchInput";
import InputWrapper from './InputWrapper';

export default function PostSearch({ query, setQuery }) {
  return (
    <Div className="postSearch">
      <div>REACT-SCROLL-APP(개발 과제)</div>
      <div>게시물을 검색해세요</div>
      <InputWrapper>
        <span>
          <BsSearch />
        </span>
        <PostSearchInput value={query} setQuery={setQuery} />
      </InputWrapper>
    </Div>
  );
}

const Div = styled.div`
  width: 100%;
  text-align: center;
`;
