import keyMirror from 'keymirror';

const ACTION_TYPES = keyMirror({
    USER_SIGN_IN: null,
    USER_SIGN_OUT: null,

    GET_USER_LIST_REQUEST: null,
    GET_USER_LIST_SUCCESS: null,
    GET_USER_LIST_FAILURE: null,

    FILTER_USER_REQUEST: null,
    FILTER_USER_SUCCESS: null,
    FILTER_USER_FAILURE: null,

    GET_USER_REQUEST: null,
    GET_USER_SUCCESS: null,
    GET_USER_FAILURE: null,

    GET_MESSAGE_LIST_REQUEST: null,
    GET_MESSAGE_LIST_SUCCESS: null,
    GET_MESSAGE_LIST_FAILURE: null
});

export default ACTION_TYPES;
