import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import Pagination from 'react-bootstrap/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import{getAllMovies ,getPage}from'../redux/Action/movieaction.js'
import axios from 'axios'
const Paginat=()=>{
    const [Pagecount,setPagecount]=useState(0)
    const dispatch=useDispatch()
    const pages =useSelector((state)=>state.pagecount)
    useEffect(()=>{
        setPagecount(pages)
    },[])

    const handlePageClick=(data)=>{
        dispatch(getPage(data.selected +1));

        
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