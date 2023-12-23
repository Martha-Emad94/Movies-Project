import React, { useState, useEffect } from 'react';
import Cards from './Cards';
import { Row, Col } from 'react-bootstrap';
import Paginat from './Pagination';
import { useDispatch, useSelector } from 'react-redux';
import{getAllMovies}from'../redux/Action/movieaction.js'
const Cardslist=({GetPage ,Pagecount})=>{
    const [movies,setMovies] = useState([])
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getAllMovies());
    },[])
    const data =useSelector((state)=>state.movies)
    useEffect(()=>{
        setMovies(data)
    },[data])
    return(
    <Row className="list">
    {
        movies.length !==1?(movies.map((mov)=>{
            return(<Cards key={mov.id} mov={mov}/>)
        })):null
    }
     {movies.length >= 1 ? ( <Paginat GetPage={GetPage} Pagecount={Pagecount}/>) : null}
   
    </Row>
    );
}
export default Cardslist;