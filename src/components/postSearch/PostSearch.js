import { useRef } from "react";
import styled from "styled-components";
import PostSearchInput from "./PostSearchInput";
import InputWrapper from "./InputWrapper";
import SearchIcon from "./SearchIcon";
// import { BsSearch } from "react-icons/bs";

export default function PostSearch({ query, setQuery }) {
  const inputWrapperObserver = useRef();
  const inputObserver = useRef();
  function inputFocus() {
    inputObserver.current.focus();
    inputWrapperObserver.current.style.borderColor = "rgba(59, 130, 246, 1)";
    
    
  }
  return (
    <Div className="postSearch">
      <h1>REACT-SCROLL-APP(개발 과제)</h1>
      <SubTitle>게시물을 검색해세요</SubTitle>
      <InputWrapper onClick={inputFocus} inputWrapperObserver={inputWrapperObserver}>
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
