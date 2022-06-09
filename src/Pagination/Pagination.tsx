import { match } from "assert";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "Redux/posts/PostsActionReducer";
import "./Pagination.scss";
export const Pagination = ({ handlePageClick }: any) => {
  const pageCounttoStore = useSelector((state: any) => state.postReducer.count);
  const store = useSelector((state: any) => state.postReducer.content);
  const [itemOffset, setOffset] = useState(1);
  //   const [limit, setlim] = useState(1);
  const dispatch = useDispatch();

  return (
    <>
      <ReactPaginate
        className="pagination "
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={9}
        pageCount={Math.ceil((pageCounttoStore - 11) / 12)}
        previousLabel="<"
      />
    </>
  );
};
