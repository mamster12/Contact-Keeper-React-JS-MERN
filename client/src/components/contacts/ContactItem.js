import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';


const ContactItem = ({ contact }) => {
    const contactContext = useContext(ContactContext);

    const { deleteContact, setCurrent, clearCurrent } = contactContext;

    const { _id, name, email, phone, type } = contact;

    // delete a contact
    const onDelete = () => {
        console.log(email);
        deleteContact(_id);
        clearCurrent();
    };

    return (
        <div className="card border-info mx-auto mb-3" style={{ maxWidth: '25rem' }}>
            <div className="card-header text-white bg-dark">
                <strong>{name.toLowerCase()
                    .split(' ')
                    .map(function (fullname) {
                        return fullname[0].toUpperCase() + fullname.substr(1);
                    })
                    .join(' ')}</strong>{' '}
                <span className={'float-right badge ' + (type === 'professional' ? 'badge-success' : 'badge-primary')}>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
            </div>
            <ul className="list-group list-group-flush">
                {email && (
                    <li className="list-group-item card-color"><i className="fas fa-envelope-open"></i>{' '}{email}</li>
                )}
                {phone && (
                    <li className="list-group-item card-color"><i className="fas fa-phone"></i>{' '}{phone}</li>
                )}
                <li className="list-group-item card-color">
                    <button className="card-link text-info" onClick={() => setCurrent(contact)}>EDIT</button>
                    <button className="card-link text-danger" data-confirm="Are you sure you want to delete?" onClick={onDelete}>DELETE</button>
                </li>
            </ul>
        </div >
    );
};

ContactItem.propTypes = {
    contact: PropTypes.object.isRequired
};

export default ContactItem;

