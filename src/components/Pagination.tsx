import React from "react";
import styled from "styled-components";

function Pagination() {
  const pageArray = [];

  pageArray.push(<StPage key="1">1</StPage>);

  return <StPageListStyle>{pageArray}</StPageListStyle>;
}

export default Pagination;

const StPageListStyle = styled.div`
  margin: 20px 0px 20px 0px;
  text-align: center;
`;

const StPage = styled.button<{ active?: boolean }>`
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  ${({ active }) =>
    active &&
    `
        background: gray;
        color: #fff;
  `}
  margin-right: 3px;
  cursor: pointer;

  &:hover {
    background: lightgray;
  }
`;
