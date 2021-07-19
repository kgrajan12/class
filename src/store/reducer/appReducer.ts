import { LOGIN } from "../type";

const initialState = {
    user: {}
}

export default (state = initialState, action: storeAction) => {
    switch(action.type) {
        case LOGIN: return {
            ...state,
            user: action.payload
        };
        default: return state;
    }
};
