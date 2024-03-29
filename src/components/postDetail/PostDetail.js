import React from "react";
import { Link } from "react-router-dom";
import useGetDetailAPI from "../../API/useGetDetailAPI";
import styled from "styled-components";

export default function PostDetail(props) {
  const { postDetail } = useGetDetailAPI(props.type);
  const { title, content } = postDetail;
  
  return (
    <div>
      <DetailWrapper>
        <DetailTitled>{title ? title : "NO DATA"}</DetailTitled>
        <DetailContent>{content ? content : "NO DATA"}</DetailContent>
      </DetailWrapper>
      <Link to="/">
        <Span>뒤로가기</Span>
      </Link>
    </div>
  );
}

const DetailWrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 2rem;
`;

const DetailTitled = styled.h2`
  text-align: center;
  margin: 0px;
  margin-bottom: 1rem;
`;

const DetailContent = styled.div`
`;

const Span = styled.span`
  display: inline-block;
  padding: 0.75rem 2rem;
  color: #fff;
  background: #3b82f6;
  border-radius: 5px;
  margin-top: 1rem;
`;
