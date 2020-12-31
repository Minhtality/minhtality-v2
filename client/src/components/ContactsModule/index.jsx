import React, {useContext} from 'react';
import ContactContext from '../../context/contact/contactContext';
import Styled from './index.styled';
import Button from '../Button';
import ContactForm from './ContactForm';
import {formatPhone} from '../helpers';

const Contacts = ( props ) => {
    const { id, name, phone, email, type } = props;

    const contactContext = useContext(ContactContext);
    const { deleteContact, setCurrent, clearCurrent } = contactContext;
     
    // const handleBlur = () => {
    // }
    const handleCurrent = () => {
        setCurrent(props);
    };

    const handleDelete = () => {
        deleteContact(id);
        clearCurrent();
    };

    return (
        <Styled.Card>
        <div>{name}</div>
        <div>{formatPhone(phone)}</div>
        <div>{email}</div>
        <div>{type.charAt(0).toUpperCase()}{type.slice(1)}</div>
        <Button theme='AddButton'>ADD</Button>
        <Button theme='EditButton' onClick={handleCurrent}>Edit1</Button>
        <Button theme='DeleteButton' onClick={handleDelete}>Delete</Button>
        </Styled.Card>
    )
}

const ContactsModule = () => {
    const contactContext = useContext(ContactContext);
    const {contacts} = contactContext;

    return (
        <Styled.ContactModule>
            <Styled.MoreInfo>
                <ContactForm />
            </Styled.MoreInfo>
            <Styled.ContactsContainer>
                {contacts.map(contact => (
                    <Contacts key={contact.id} {...contact} />
                ))}
            </Styled.ContactsContainer>
        </Styled.ContactModule>
    )
}

export default ContactsModule;
