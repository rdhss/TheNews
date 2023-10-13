import axios from "axios";
import { GET_DATA_SUCCESS, GET_DATA_REQUEST, GET_DATA_FAILED} from "../constant";

const fetchingRequest = () =>{
    return {
        type : GET_DATA_REQUEST
    }
}

const fetchingSucess = (data) =>{
    return {
        type : GET_DATA_SUCCESS,
        payload : data
    }
}

const fetchingFailed = (err) =>{
    return {
        type : GET_DATA_FAILED,
        payload : err
    }
}




export const fethingData = () => {
    return (dispatch) => {
        dispatch(fetchingRequest);
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=16c07dd1937a4c549629568937e86260')
        .then((res) => dispatch(fetchingSucess(res.data)))
        .catch((err) => dispatch(fetchingFailed(err.data)))
    }
}

export const SearchingData = (payload) => {
    return (dispatch) => {
        dispatch(fetchingRequest);
        axios.get(`https://newsapi.org/v2/everything?q=${payload}&apiKey=16c07dd1937a4c549629568937e86260`)
        .then((res) => dispatch(fetchingSucess(res.data)))
        .catch((err) => dispatch(fetchingFailed(err.data)))
    }
}