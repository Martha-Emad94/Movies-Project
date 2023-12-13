import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Cards=({mov})=>{
    return(
    
        <Col xs="12" sm="6" md="4" lg="3" className="my-1">
            <Link to={`/movie/${mov.id}`}>
           <div className="card">
               <img src={`https://image.tmdb.org/t/p/w500/` + mov.poster_path} className="Card-image"/>
               <div className="card-overlay">
                   <div className="overlay__text text-center w-100 p-2">
                       <p>Movie Name :{mov.original_title}</p>
                       <p>Release Date :{mov.release_date}</p>
                       <p>vote_average :{mov.vote_average}</p>
                       <p>vote_count :{mov.vote_count} </p> 

                   </div>

               </div>

           </div>
           </Link>
        </Col>
    );
}
export default Cards;