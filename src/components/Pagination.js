import React from 'react';
import ReactPaginate from 'react-paginate';
import Pagination from 'react-bootstrap/Pagination';
const Paginat=({GetPage,Pagecount})=>{
    const handlePageClick=(data)=>{
        GetPage(data.selected +1)
    }
    return(
        <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={Pagecount}
        previousLabel="< previous"
        containerClassName={"pagination justify-content-center p-3"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active "}
      />

    );
}
export default Paginat;