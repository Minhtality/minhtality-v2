import React, {useContext} from 'react';
import ContactContext from '../../context/contact/contactContext';
import Styled from './index.styled';
import Button from '../Button';
import ContactForm from './ContactForm';

const Contacts = ({
    id,
    name,
    phone,
    email,
    type
}) => {
    const contactContext = useContext(ContactContext);
    const {deleteContact} = contactContext;
    const handleDelete = () => {
        deleteContact(id);
    };

    return (
        <Styled.Card>
        <div>{name}</div>
        <div>{phone}</div>
        <div>{email}</div>
        <div>{type.charAt(0).toUpperCase()}{type.slice(1)}</div>
        <Button theme='AddButton'>ADD</Button>
        <Button theme='EditButton'>Edit1</Button>
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
                <ContactForm/>
            </Styled.MoreInfo>
            <Styled.ContactsContainer>
                {contacts.map(contact => (
                    <Contacts {...contact} />
                ))}
            </Styled.ContactsContainer>
        </Styled.ContactModule>
    )
}

export default ContactsModule;
