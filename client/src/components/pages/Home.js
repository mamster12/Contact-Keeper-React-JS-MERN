import React, { useContext, useEffect } from 'react';
import ContactForm from '../contacts/ContactForm';
import Contacts from '../contacts/Contacts';
import ContactFilter from '../contacts/ContactFilter';
import AuthContext from '../../context/auth/authContext';
import Spinner from '../layout/Spinner.js';

const Home = () => {
    const authContext = useContext(AuthContext);

    const { loadUser, loading } = authContext;

    useEffect(() => {
        loadUser();
        // eslint-disable-next-line
    }, []);

    if (loading) {
        return <Spinner />
    } else {

        return (
            <div className="wrap mb-2">
                <h3>My Contacts</h3>
                <hr />
                <div className="row">
                    <div className="col-sm mb-4">
                        <ContactForm />
                    </div>
                    <div className="col-sm">
                        <ContactFilter />
                        <Contacts />
                    </div>
                </div>
            </div>
        );
    };

}

export default Home;
