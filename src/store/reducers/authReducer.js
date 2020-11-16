const defaultState = {
    token: null,
    user: {},
}

const auth =(state= defaultState, action) =>{
    switch(action.type) {
        case 'LOGGEDIN':
            return{
                ...state,
                token: action.payload
            }
        default:
            return state
    }
}

export default auth;