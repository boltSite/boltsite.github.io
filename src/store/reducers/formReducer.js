import { UPDATE_FORM_DATA, RESET_FORM_DATA } from '../actions/types';

const initialState = {
    title: '',
    message: '',
    contact: '',
    email: '',
    files: []
};

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_FORM_DATA:
            return { ...state, ...action.payload };
        case RESET_FORM_DATA:
            return initialState;
        default:
            return state;
    }
};

export default formReducer;