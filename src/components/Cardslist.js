import React from 'react';
import Cards from './Cards';

import { Row, Col } from 'react-bootstrap';
import Paginat from './Pagination';
const Cardslist=({movies ,GetPage ,Pagecount})=>{
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