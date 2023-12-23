import {createStore,applyMiddleware}from 'redux'
import {moviesreducer}from'../reducer/MovieReducer.js'
import {thunk }from'redux-thunk'
export const store =createStore(moviesreducer,applyMiddleware(thunk))