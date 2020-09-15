import React, {useReducer} from 'react';
import {v4 as uuid} from "uuid";
import ContactContext from './contactContext';
import ContactReducer from './contactReducer';
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

const ContactState = ({children}) => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'Jill Smith',
                email: 'jill@smith.com',
                phone: '111-111-1111',
                type: 'personal'
            },
            {
                id: 2,
                name: 'John Smith',
                email: 'john@smith.com',
                phone: '111-111-2222',
                type: 'professional'
            },
            {
                id: 3,
                name: 'Adam Smith',
                email: 'Adam@smith.com',
                phone: '111-111-3333',
                type: 'personal'
            },
            {
                id: 4,
                name: 'Sam Smith',
                email: 'sam@smith.com',
                phone: '111-111-4444',
                type: 'personal'
            },
            {
                id: 5,
                name: 'John Doe',
                email: 'john@doe.com',
                phone: '111-222-1111',
                type: 'personal'
            },
        ],
    };

    const [state, dispatch] = useReducer(ContactReducer, initialState)

    // Add Contact
    const addContact = contact => {
        // temp ID
        contact.id = uuid();
        dispatch({type: ADD_CONTACT, payload: contact});
    };

    // Remove Contact
    const deleteContact = id => {
        dispatch({type: REMOVE_CONTACT, payload: id})
    };

    // Set Current Contact

    // Clear Current Contact

    // Update Contact

    // Filter Contacts

    // Clear Filter

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
                addContact,
                deleteContact
            }}
        >
            {children}
        </ContactContext.Provider>
    )
};

export default ContactState;