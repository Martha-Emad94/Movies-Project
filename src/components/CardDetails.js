import React, { useEffect,useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link,useParams} from 'react-router-dom';
import axios from 'axios';
const CardDetails=()=>{
    const par=useParams();
   const [movie,setMovie]=useState([]);
const GetDetails= async()=>{
    const res=await axios.get(`https://api.themoviedb.org/3/movie/${par.id}?api_key=6abddd4223d2dfb66750d5a3387cea00&language=en`)
     setMovie(res.data);
     
  }
useEffect(()=>{
    GetDetails();
  },[])
    return(
        <div>
            <Row className="d-flex justify-content-center">
               <Col md="12" xs="12" sm="12" className="mt-4">
               <div className="card-details d-flex align-items-center">
                  <img src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path} className="movie-image w-30"/>
               
                   <div className="justify-content-center text-center w-100 p-1">
                        <div className="justify-content-center text-center mx-auto">
                                    <p className="card-text-details">
                                        Name Movie: {movie.original_title}
                                    </p>
                                    <p className="card-text-details ">
                                        Release Date :{movie.release_date}
                                    </p>
                                    <p className="card-text-details ">
                                    Vote_Average: {movie.vote_count}
                                    </p>
                                    <p className="card-text-details">
                                    Vote_Count  :{movie.vote_average}
                                    </p>

                        </div>
                   </div> 
           </div>
               </Col>
            </Row>
            <Row className="justify-content-center">
                <Col md="12" xs="12" sm="12" className="mt-1 ">
                    <div className="card-story  d-flex flex-column align-items-start">
                        <div className="text-end ">
                            <p className="card-text-title">Story Movie:</p>
                        </div>
                        <div className="text-end px-1">
                            <p className="card-text-story">{movie.overview}</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col
                    md="10"
                    xs="12"
                    sm="12"
                    className="mt-1 d-flex justify-content-center">
                    <Link to="/">
                        <button
                            className="bot mx-2">Back Home
                        </button>
                    </Link>
                    <a href={movie.homepage} >
                        <button
                            className="bot ">Watch Movie
                        </button>
                    </a>
                </Col>
            </Row>
        </div>
    );
}
export default CardDetails