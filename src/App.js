import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap';
import Cardslist from './components/Cardslist';
import axios from 'axios'
import { useEffect, useState } from 'react';
import {BrowserRouter,Routes,Route}from'react-router-dom'
import CardDetails from'./components/CardDetails'
import{useDispatch,useSelector}from 'react-redux'
import{getAllMovies}from'./redux/Action/movieaction.js'
function App() {
  return (
    <div className="font color-body">
      <NavBar />
      <Container>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Cardslist />}/>
          <Route path="/movie/:id" element={<CardDetails/>} />  
        </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
