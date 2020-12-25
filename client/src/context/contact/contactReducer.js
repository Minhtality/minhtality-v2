import {
    ADD_CONTACT,
    REMOVE_CONTACT,
    SET_CURRENT,
    REMOVE_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACT,
    CLEAR_FILTER,
    SET_ALERT,
    CLEAR_ALERT
} from '../types';

export default (state, action) => {
    switch(action.type) {
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            };
        case REMOVE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            }
        default: 
            return state;
    }
};