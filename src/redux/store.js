import { combineReducers, createStore, applyMiddleware } from "@reduxjs/toolkit";
import NewsReducer from "./News/reducer";
import LikedNews from "./LikedNews/reducerLiked";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const AllReducer = combineReducers({
    news : NewsReducer,
    likedNews :  LikedNews
})


const persistReducers = persistReducer({key : 'root', storage}, AllReducer)
export const store = createStore(persistReducers, {}, applyMiddleware(thunk, logger))
export const persistor = persistStore(store)