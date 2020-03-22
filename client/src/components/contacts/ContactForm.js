import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
    const contactContext = useContext(ContactContext);

    const { addContact, updateContact, clearCurrent, current } = contactContext;

    useEffect(() => {
        if (current !== null) {
            setContact(current);
        } else {
            setContact({
                name: '',
                email: '',
                phone: '',
                type: 'personal'
            });
        }
    }, [contactContext, current]);

    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
    });

    const { name, email, phone, type } = contact;

    const onChange = e => setContact({ ...contact, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if (current === null) {
            addContact(contact);
        } else {
            updateContact(contact);
        }
        clearAll();
    }

    const clearAll = () => {
        clearCurrent();
    }

    return (
        <form className="card-body card-color" onSubmit={onSubmit}>
            <h5 className="text-primary">{current ? 'UPDATE CONTACT' : 'ADD CONTACT'}</h5>
            <hr />
            <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" name='name' value={name} onChange={onChange} />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" name='email' value={email} onChange={onChange} />
            </div>
            <div className="form-group">
                <label>Phone</label>
                <input type="text" className="form-control" name='phone' value={phone} onChange={onChange} />
            </div>
            <h6>Contact Type</h6>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name='type' value="personal" checked={type === 'personal'} onChange={onChange} />
                <label className="form-check-label">personal</label>
            </div>
            <div className="form-check form-check-inline mb-3">
                <input className="form-check-input" type="radio" name='type' value="professional" checked={type === 'professional'} onChange={onChange} />
                <label className="form-check-label">professional</label>
            </div>
            <div>
                <button type="submit" className="btn btn-primary btn-sm mr-2">Submit</button>
                {current && (
                    <button type="submit" className="btn btn-danger btn-sm" onClick={clearAll}>Clear</button>
                )}
            </div>

        </form>
    );
}

export default ContactForm;
