import React from 'react';

const About = () => {
    return (
        <div className="wrap">
            <h1>About Contact Keeper</h1>
            <p className='my-1'>
                This is a full stack React App for organizing and keeping track of contacts.
            </p>
            <p>Features:</p>
            <ul>
                <li>Saved Contacts View</li>
                <li>Add Contact Form</li>
                <li>Update Contact Form</li>
                <li>Filter/Search Bar using name or email</li>
                <li>Delete unwanted/outdated contacts</li>
                <li>Edit your saved contacts</li>
                <li>Simple card view for each contact</li>
                <li>Distinction between Professional and Personal Contact</li>
            </ul>
            <p className="text-light text-center bg-dark p-2">
                <strong>Version: </strong>1.0.0
            </p>
        </div>
    )
}

export default About;
