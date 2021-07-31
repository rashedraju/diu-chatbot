export const MESSAGE_TYPE = {
    MESSAGE: 'message',
    REPLY: 'reply',
};

export const API_CHAT_URL = process.env.REACT_APP_API_CHAT_URL;
export const API_LOGIN_URL = process.env.REACT_APP_API_LOGIN_URL;
export const API_SIGNUP_URL = process.env.REACT_APP_API_SIGNUP_URL;
export const API_LOGOUT_URL = process.env.REACT_APP_API_LOGOUT_URL;

export const AUTH_MODE_LOGIN = 'AUTH_MODE_LOGIN';
export const AUTH_MODE_SIGNUP = 'AUTH_MODE_SIGNUP';

export const actionType = {
    AUTHENTICATING: 'AUTHENTICATING',
    AUTHENTICATING_SUCCESS: 'authenticating_success',
    AUTHENTICATING_FAILED: 'AUTHENTICATING_SUCCESS',
    LOGOUT: 'LOGOUT',
    CLEAR_ERROR: 'CLEAR_ERROR',
};
