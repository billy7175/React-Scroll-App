import React from "react";
import styled from "styled-components";

export default function Tab({ onClick, type, text }) {
  return (
    <A
      onClick={onClick}
      className={type === "a" ? "tab-a" : type === "b" ? "tab-b" : ""}
    >
      {text}
    </A>
  );
}

const A = styled.a`
  display: inline-block;
  padding: 1rem;
  font-weight: 500;
  border-radius: 5px;
  text-decoration: none;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    color: rgba(59, 130, 246, 0.5);
  }
`;
