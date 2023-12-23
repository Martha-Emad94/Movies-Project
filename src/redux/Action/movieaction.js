import { Allmovie ,MoviesApi } from "../type/type.js"
import axios from 'axios'

export const getAllMovies=()=>{
    return async(dispatch)=>{
        const res=await axios.get(MoviesApi)
        dispatch({type: Allmovie ,data:res.data.results ,pages:res.data.total_pages})
    }
}
export const getSearch=(word)=>{
    return async(dispatch)=>{
        const res=await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=6abddd4223d2dfb66750d5a3387cea00&query=${word}&language=en`)     
        dispatch({type: Allmovie ,data:res.data.results ,pages:res.data.total_pages})
    }
}
export const getPage=(page)=>{
    return async(dispatch)=>{
        const res=await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=6abddd4223d2dfb66750d5a3387cea00&language=en-US&page=${page}`)     
        dispatch({type: Allmovie ,data:res.data.results ,pages:res.data.total_pages})
    }
}