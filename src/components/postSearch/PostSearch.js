import { useRef } from "react";
import styled from "styled-components";
import PostSearchInput from "./PostSearchInput";
import InputWrapper from "./InputWrapper";
import SearchIcon from "./SearchIcon";
// import { BsSearch } from "react-icons/bs";

export default function PostSearch({ query, setQuery }) {
  const inputObserver = useRef();
  function inputFocus() {
    console.log("Clicked");
    console.log(inputObserver);
    inputObserver.current.focus();
  }
  return (
    <Div className="postSearch">
      <h1>REACT-SCROLL-APP(개발 과제)</h1>
      <SubTitle>게시물을 검색해세요</SubTitle>
      <InputWrapper onClick={inputFocus}>
        <SearchIcon />
        <PostSearchInput
          value={query}
          setQuery={setQuery}
          inputObserver={inputObserver}
        />
      </InputWrapper>
    </Div>
  );
}

const Div = styled.div`
  width: 100%;
  text-align: center;
`;

const SubTitle = styled.div`
  font-size: 20px;
  padding-bottom: 20px;
`;
