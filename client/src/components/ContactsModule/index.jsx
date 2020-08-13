import React, {useContext} from 'react';
import ContactContext from '../../context/contact/contactContext';
import Styled from './index.styled';

const Contacts = ({
    name,
    phone,
    email,
    type
}) => {

    return (
        <Styled.Card>
        <div>{name}</div>
        <div>{phone}</div>
        <div>{email}</div>
        <div>{type}</div>
        </Styled.Card>
    )
}

const ContactsModule = () => {
    const contactContext = useContext(ContactContext);
    const {contacts} = contactContext;

    return (
        <Styled.ContactModule>
            <Styled.MoreInfo>
                More info
            </Styled.MoreInfo>
            <Styled.Contacts>
                {contacts.map(contact => (
                    <Contacts {...contact} />
                ))}
            </Styled.Contacts>
        </Styled.ContactModule>
    )
}

export default ContactsModule;
