import {Allmovie}from'../type/type.js'
const intial={movies:[],pagecount:0}
 export const moviesreducer=(state=intial,action)=>{
    switch(action.type)
    {
        case Allmovie:
            return{movies : action.data ,pagecount:action.pages}  
        default:
            return state;


    }
}