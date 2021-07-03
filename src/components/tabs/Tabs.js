import styled from "styled-components";
import Tab from './Tab';

export default function Tabs({onClickA,onClickB, type}) {
  return (
    <Div>
      <Tab onClick={onClickA} type={type === "a" ? "a" : ""} text="postA" />
      <Tab onClick={onClickB} type={type === "b" ? "b" : ""} text="postB" />
    </Div>
  );
}

const Div = styled.div`
  font-size: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 0.35rem;
`;
