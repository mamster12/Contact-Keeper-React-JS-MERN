import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/contact/contactContext';


const Navbar = ({ title, icon }) => {
    const authContext = useContext(AuthContext);
    const contactContext = useContext(ContactContext);

    const { isAuthenticated, logout, user } = authContext;

    const { clearContacts } = contactContext;

    const onLogout = () => {
        logout();
        clearContacts();
    };

    const authLinks = (
        <Fragment>
            <li className="nav-item nav-link active" >Hello {user && (user.name.split(' ').slice(0, -1).join(' ')
            ).charAt(0).toUpperCase() + user.name.split(' ').slice(0, -1).join(' ').slice(1)}
            </li>
            <li className="nav-item">
                <Link to='/' className="nav-link active" >Home </Link>
            </li>
            <li className="nav-item">
                <Link to='/about' className="nav-link active" >About </Link>
            </li>
            <li className="nav-item">
                <a onClick={onLogout} href="/login" className="nav-link active" data-confirm="Are you sure you want to logout?">
                    <i className="fas fa-sign-out-alt"></i><span> Logout</span>
                </a>
            </li>
        </Fragment>
    );

    const guestLinks = (
        <Fragment>
            <li className="nav-item">
                <Link to='/register' className="nav-link active" >Register </Link>
            </li>
            <li className="nav-item">
                <Link to='/login' className="nav-link active" >Login </Link>
            </li>
            <li className="nav-item">
                <Link to='/about' className="nav-link active" >About </Link>
            </li>
        </Fragment>
    );

    return (
        <div className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
            <div className="container">
                <a className="navbar-brand" href="/"><i className={icon} /> {title}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        {isAuthenticated ? authLinks : guestLinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string
}

Navbar.defaultProps = {
    title: 'Contact Keeper',
    icon: 'fas fa-id-card-alt'
}

export default Navbar;
