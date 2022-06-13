import { match } from "assert";
import { log } from "console";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "Redux/posts/PostsActionReducer";
import "./Pagination.scss";
export const Pagination = ({ handlePageClick }: any) => {
  const pageCounttoStore = useSelector((state: any) => state.postReducer.count);
  console.log({ pageCounttoStore });

  return (
    <>
      <ReactPaginate
        className="pagination "
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={0}
        pageCount={Math.ceil(pageCounttoStore / 12)}
        previousLabel="<"
      />
    </>
  );
};
