import ACTION_TYPES from '../../constants/actionTypes';

const initialState = {
    loading: false,
    users: [],
    error: '',
    meta: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type){
        case ACTION_TYPES.GET_USER_LIST_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ACTION_TYPES.GET_USER_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: ''
            }
        case ACTION_TYPES.GET_USER_LIST_FAILURE:
            return {
                ...state,
                loading: false,
                users: [],
                error: action.error
            }
            default:
            // If the reducer doesn't care about this action type,
            // return the existing state unchanged
            return state;
    }
}

export default userReducer;