import ACTION_TYPES from '../../constants/actionTypes';

class UserActions {
    signIn(user) {
        return {
            type: ACTION_TYPES.USER_SIGN_IN,
            payload: {
                user,
            },
        };
    }

    signOut() {
        return {
            type: ACTION_TYPES.USER_SIGN_OUT,
        };
    }

    getUserListRequest() {
        return {
            type: ACTION_TYPES.GET_USER_LIST_REQUEST,
        };
    }

    getUserListSuccess(users) {
        return {
            type: ACTION_TYPES.GET_USER_LIST_SUCCESS,
            payload: users
        };
    }

    getUserListFailure(msg) {
        return {
            type: ACTION_TYPES.GET_USER_LIST_FAILURE,
            error: msg
        };
    }

    getUser(user) {
        return {
            type: ACTION_TYPES.GET_USER_REQUEST,
            payload: {
                user,
            },
        };
    }
}

export default new UserActions();
