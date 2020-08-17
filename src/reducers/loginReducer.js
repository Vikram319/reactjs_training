const loginReducer = (state, action) => {
    switch(action.type){
        case 'resetErrors':
            return {...state, usernameError: null, passwordError: null }
        case 'setUsername':
            return {...state, username: action.value}
        case 'setPassword':
            return {...state, password: action.value}
        case 'setUsernameError':
            return {...state, usernameError: action.value};
        case 'setPasswordError':
            return {...state, passwordError: action.value}
    }
}

export default loginReducer;