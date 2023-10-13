import { ADD_DATA_LIKED, GET_DATA_LIKED, REMOVE_DATA_LIKED } from "../constant"

export const getDataLiked = (data) =>{
    return {
        type : GET_DATA_LIKED,
        payload : data
    }
}


export const addDataLiked = (data) =>{
    return {
        type : ADD_DATA_LIKED,
        payload : data
    }
}

export const removeDataLiked = (data) =>{
    return {
        type : REMOVE_DATA_LIKED,
        payload : data
    }
}