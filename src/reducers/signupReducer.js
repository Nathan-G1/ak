const initialState = {}

export default function(state=initialState, action){
    switch(action.type){
        case 'SIGN_UP':
            console.log(action.payload);
            return{
                ...state,
                value: action.payload
            };
        default:
            return state;
    }
}