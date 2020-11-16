import * as AuthActions from'./authActions';

export const setupSocket = ()=>{
    return dispatch =>{
        let socket = new WebSocket('ws://localhost:8080');
        socket.onopen = () =>{
            dispatch({
                type: 'SETUP_SOKET',
                payload: socket
            });
        

    }
    }
}