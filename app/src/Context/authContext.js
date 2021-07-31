import axios from 'axios';
import { createContext, useCallback, useContext, useEffect, useReducer } from 'react';
import { actionType, API_LOGIN_URL, API_LOGOUT_URL, API_SIGNUP_URL } from '../Constants';

const initialState = {
    loading: false,
    error: null,
    isAuthenticated: false,
    accessToken: null,
    userData: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.AUTHENTICATING:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case actionType.AUTHENTICATING_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                ...action.payload,
            };
        case actionType.AUTHENTICATING_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case actionType.LOGOUT:
            return {
                ...state,
                loading: false,
                error: false,
                isAuthenticated: false,
                accessToken: null,
                userData: null,
            };
        case actionType.CLEAR_ERROR:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
};

const Auth = createContext(initialState);

export const useAuthStore = () => useContext(Auth);

const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const onAuth = useCallback(async (url, data) => {
        dispatch({ type: actionType.AUTHENTICATING });
        try {
            const response = await axios.post(url, data, {
                withCredentials: true,
            });

            if (response.status === 200) {
                // Store user data to the context
                dispatch({
                    type: actionType.AUTHENTICATING_SUCCESS,
                    payload: response.data,
                });
            } else {
                // setError(response.message);
                dispatch({ type: actionType.AUTHENTICATING_FAILED, payload: response.message });
            }
        } catch (err) {
            dispatch({ type: actionType.AUTHENTICATING_FAILED, payload: err.message });
        }
    }, []);

    const signupHandler = useCallback(
        (username, email, password, confPass) => {
            if (password === confPass) {
                onAuth(API_SIGNUP_URL, { username, email, password });
            } else {
                dispatch({
                    type: actionType.AUTHENTICATING_FAILED,
                    payload: "Your password and cofirmation password did't match",
                });
            }
        },
        [onAuth]
    );

    const loginHandler = useCallback(
        (email, password) => {
            onAuth(API_LOGIN_URL, { email, password });
        },
        [onAuth]
    );

    const logoutHandler = async () => {
        dispatch({ type: actionType.AUTHENTICATING });
        try {
            const response = await axios.post(API_LOGOUT_URL, null, { withCredentials: true });
            if (response.status === 200) {
                dispatch({ type: actionType.LOGOUT });
            } else {
                dispatch({ type: actionType.AUTHENTICATING_FAILED, payload: response.message });
            }
        } catch (err) {
            dispatch({ type: actionType.AUTHENTICATING_FAILED, payload: err.message });
        }
    };

    const initialAuthCheck = async () => {
        try {
            const response = await axios.post(
                API_LOGIN_URL,
                { email: '', password: '' },
                {
                    withCredentials: true,
                }
            );

            if (response.status === 200) {
                // Store user data to the context
                dispatch({
                    type: actionType.AUTHENTICATING_SUCCESS,
                    payload: response.data.userData,
                });
            }
        } catch {
            //
        }
    };

    useEffect(() => {
        // Check if user authentication
        initialAuthCheck();
    }, []);

    const value = {
        ...state,
        login: (email, password) => loginHandler(email, password),
        signup: (username, email, password, confPass) =>
            signupHandler(username, email, password, confPass),
        logout: () => logoutHandler(),
    };

    return <Auth.Provider value={value}>{children}</Auth.Provider>;
};

export default AuthProvider;
