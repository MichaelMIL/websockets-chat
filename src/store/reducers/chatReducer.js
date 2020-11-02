const defaultState= {
    soket:null,
    message:'',
    threads:[],
    currentThread: ''
}

const chat = (state=defaultState, action)=>{
    switch(action.type){
        case 'SETUP_SOKET':
            return{
                ...state,
                socket: action.payload
            }
        default:
            return state
    }
}

export default chat;