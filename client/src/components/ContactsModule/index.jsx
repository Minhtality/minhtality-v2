import React, {useContext} from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactsModule = () => {
    const contactContext = useContext(ContactContext);
    const {contacts} = contactContext;

    return (
        <div>
            {JSON.stringify(contacts)}
        </div>
    )
}

export default ContactsModule;
