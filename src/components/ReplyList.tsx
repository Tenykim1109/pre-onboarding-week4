import React from "react";
import styled from "styled-components";

const MockData = [
  {
    id: 1,
    profile_url: "https://picsum.photos/id/1/50/50",
    author: "abc_1",
    content: "UI 테스트는 어떻게 진행하나요",
    createdAt: "2020-05-01",
  },
  {
    id: 2,
    profile_url: "https://picsum.photos/id/1/50/50",
    author: "abc_2",
    content: "리액트 테스트 라이브러리 추천좀요",
    createdAt: "2020-05-01",
  },
];

function ReplyList() {
  return (
    <div style={{ padding: "8px" }}>
      {MockData.map(({ id, profile_url, author, content, createdAt }) => (
        <StReplyContainer key={id}>
          <StProfileContainer>
            <StProfileImage src={profile_url} alt="" />
            <span>{author}</span>
            <StDateTime>{createdAt}</StDateTime>
          </StProfileContainer>
          <StReply>{content}</StReply>
          <StButtonContainer>
            <StButton role="edit">수정</StButton>
            <StButton role="delete">삭제</StButton>
          </StButtonContainer>
        </StReplyContainer>
      ))}
    </div>
  );
}

export default ReplyList;

const StReplyContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px 0px 8px 0px;
  padding: 16px;
  border: 1px solid lightgray;
  border-radius: 20px;
`;

const StProfileContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 8px 0px 8px 0px;

  & > img {
    margin: 0px 8px 0px 8px;
  }
`;

const StProfileImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
`;

const StDateTime = styled.span`
  position: absolute;
  right: 0;
  margin-right: 28px;
`;

const StReply = styled.span`
  font-size: 1.1rem;
  margin: 8px 0px 8px 0px;
`;

const StButtonContainer = styled.div`
  display: flex;
  padding: 8px;
  justify-content: flex-end;
`;

const StButton = styled.button<{ role: string }>`
  background-color: ${(props) =>
    (props.role === "edit" && "#1976d2") ||
    (props.role === "delete" && "#ff1744") ||
    "lightgray"};
  padding: 4px;
  margin: 0px 4px 0px 4px;
  color: white;
  border: none;
  border-radius: 8px;
  width: 60px;
  height: 24px;
  font-size: 1.1rem;
  cursor: pointer;
  text-align: center;
`;
