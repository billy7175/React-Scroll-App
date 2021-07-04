import React from "react";
import styled from "styled-components";

export default function InputWrapper({onClick, inputWrapperObserver, children}) {
  return <Div onClick={onClick} ref={inputWrapperObserver}>{children}</Div>;
}

const Div = styled.div`
  width: 50%;
  margin: auto;
  display: flex;
  align-items: center;
  border: 1px solid #777;
  border-radius: 5px;
  padding: 1rem;
  &:hover {
    border-color: rgba(59, 130, 246, 1);
  }
 
`;
