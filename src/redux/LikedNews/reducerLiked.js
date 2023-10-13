    
    
import { ADD_DATA_LIKED, GET_DATA_LIKED, REMOVE_DATA_LIKED } from "../constant"

const initialState = {
    loading : false,
    data : [],
    error : ''
}


const LikedReducer = (state = initialState, action) => {
    const _actions = {
        [GET_DATA_LIKED] : () => {
            return {
                ...state,
                loading : false
            }
        },
        [ADD_DATA_LIKED] : () => {
            return {
                loading : false,
                data : [...state.data, action.payload],
            }
        },
        [REMOVE_DATA_LIKED] : () => {
            return {
                loading : false,
                data : state.data.filter(item => item.url !== action.payload),
                error : action.payload
            }
        },
        DEFAULT: () => state,
    }
    return (_actions[action.type] || _actions.DEFAULT)()
}

export default LikedReducer