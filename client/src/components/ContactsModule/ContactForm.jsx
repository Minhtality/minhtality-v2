import React, {useState, useContext, useEffect} from 'react';
import ContactContext from '../../context/contact/contactContext';
// import { buttonStyle } from '../Button/index.styled';

const ContactForm = () => {
    const contactContext = useContext(ContactContext);
    const { addContact, current, clearCurrent } = contactContext;

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
        addContact(contact);
        setContact({
            name: '',
            email: '',
            phone: '',
            type: 'personal'
        });
    };

    useEffect(() => {
        current ? setContact(current) : setContact({
            name: '',
            email: '',
            phone: '',
            type: 'personal'
        });;
    }, [current]);

    return (
        <form onSubmit={onSubmit}>
            <h2>{current ? `Edit Contact` : `Add Contact`}</h2>
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
                <input type="submit" value={current ? 'Edit Contact' : 'Add Contact'}/>
            </div>
            {current && <button onClick={clearCurrent}>Clear</button>}
        </form>
    )
}

export default ContactForm;
