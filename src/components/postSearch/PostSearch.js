import styled from "styled-components";
import PostSearchInput from "./PostSearchInput";
import InputWrapper from "./InputWrapper";
import SearchIcon from "./SearchIcon";

export default function PostSearch({
  query,
  setQuery,
  inputWrapperObserver,
  inputObserver,
  onClick,
  onBlur,
}) {
  return (
    <Div className="postSearch">
      <h1>REACT-SCROLL-APP</h1>
      <SubTitle>게시물을 검색할 수 있습니다.</SubTitle>
      <InputWrapper
        onClick={onClick}
        onBlur={onBlur}
        inputWrapperObserver={inputWrapperObserver}
        
      >
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
