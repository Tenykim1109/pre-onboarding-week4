import React from "react";
import ReplyList from "../components/ReplyList";
import Pagination from "../components/Pagination";
import ReplyForm from "../components/ReplyForm";

function ReplyPage() {
  return (
    <>
      <ReplyList />
      <Pagination />
      <ReplyForm />
    </>
  );
}

export default ReplyPage;
