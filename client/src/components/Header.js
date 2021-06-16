import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import GoogleAuth from './GoogleAuth';

const Header = (props) => {
    return (
        <div className='ui secondary pointing menu'>
            <Link to='/' className='item'>
                STREAMER
            </Link>
            <div className='right menu'>
                <Link to='/' className='item'>
                    All Streams
                </Link>
                {props.isSignedIn ? <Link to='/streams/my' className='item'>
                    My Streams
                </Link> : null}
                <GoogleAuth />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps)(Header);