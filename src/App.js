import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap';
import Cardslist from './components/Cardslist';
import axios from 'axios'
import { async } from 'q';
import { useEffect, useState } from 'react';
import {BrowserRouter,Routes,Route}from'react-router-dom'
import CardDetails from'./components/CardDetails'
function App() {
  const [movies,setMovies] = useState([])
  const [Pagecount,setPagecount]=useState(0)
  const GetAllMovies= async()=>{
    const res=await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=6abddd4223d2dfb66750d5a3387cea00&language=en-US")
     setMovies(res.data.results);
     setPagecount(res.data.total_pages)
     
  }
  const GetPage= async(page)=>{
    const res=await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=6abddd4223d2dfb66750d5a3387cea00&language=en-US&page=${page}`)
     setMovies(res.data.results);
     setPagecount(res.data.total_pages)
  }
  useEffect(()=>{
    GetAllMovies();
  },[])
  const Search= async(word)=>{
    if(word===""){
      GetAllMovies();
    }
    else{
        const res=await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=6abddd4223d2dfb66750d5a3387cea00&query=${word}&language=en`)
        setMovies(res.data.results); 
        setPagecount(res.data.total_pages)
      }

  }

  return (
    <div className="font color-body">
      <NavBar search={Search}/>
      <Container>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Cardslist movies={movies} GetPage={GetPage} Pagecount={Pagecount}/>}/>
          <Route path="/movie/:id" element={<CardDetails movie={movies}/>} />  
        </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
