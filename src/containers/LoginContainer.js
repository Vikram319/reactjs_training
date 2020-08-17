import React, { useState, useReducer } from 'react';
import LoginComponent from '../components/LoginComponent'
import * as yup from 'yup';
import apiHelper from '../apis/apiHelper';
import loginReducer from '../reducers/loginReducer'

const initialState = {
    username: '',
    password: '',
    usernameError: null,
    passwordError: null
}

const LoginContainer = () => {

    const [state, dispatch] = useReducer(loginReducer, initialState);

    let { username, password, usernameError, passwordError } = state;

    let schema = yup.object().shape({
        username: yup.string().email().required(),
        password: yup.string().required(),
    });
    const showError = () => {
        dispatch({type: 'resetErrors'});
        schema.validate({ username, password }, { abortEarly: false })
            .then(() => {
                apiHelper('post', 'https://api.taiga.io/api/v1/auth', { username, password, type: 'normal' })
                    .then((response) => {
                        console.log(response);
                    })
            })
            .catch((err) => {
                err.inner.forEach((ele) => {
                    if (ele.path === 'username') {
                        dispatch({ type: 'setUsernameError', value: ele.message });
                    }
                    if (ele.path === 'password') {
                        dispatch({ type: 'setPasswordError', value: ele.message });
                    }
                });
            });
    }

    return (
        <LoginComponent showError={showError} dispatch={dispatch} usernameError={usernameError} passwordError={passwordError} username={username} password={password} />
    );
};

export default LoginContainer;