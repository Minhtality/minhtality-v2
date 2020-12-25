import React, {useState, useContext} from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
    const contactContext = useContext(ContactContext);
    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
    });
    const {name, email, phone, type} = contact;
    const onChange = (e) => setContact({...contact, [e.target.name]: e.target.value});
    const onSubmit = (e) => {
        e.preventDefault();
        contactContext.addContact(contact);
        setContact({
            name: '',
            email: '',
            phone: '',
            type: 'personal'
        });
    }

    return (
        <form onSubmit={onSubmit}>
            <h2>Add Contact</h2>
            <div>
                <label htmlFor="name">Name</label>
                <input id='name' type="text" placeholder="name" name="name" value={name} onChange={onChange}/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input id='email' type="email" placeholder="e-mail" name="email" value={email} onChange={onChange}/>
            </div>
            <div>
                <label htmlFor="phone">Phone</label>
                <input id='phone' type="text" placeholder="phone" name="phone" type='tel' value={phone} onChange={onChange}/>
            </div>
            <h5>Contact Type</h5>
            <input type="radio" name="type" value={'personal'} checked={type === 'personal'} onChange={onChange}/> Personal
            <input type="radio" name="type" value={'professional'} checked={type === 'professional'} onChange={onChange}/> Professional
            <div>
                <input type="submit" value="Add Contact"/>
            </div>
        </form>
    )
}

export default ContactForm;
