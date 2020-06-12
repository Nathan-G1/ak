import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';

export default function (ComposedComponent) {
    const Authenticate = (props, {isAuthenticated = props.isAuthenticated} ) => {
        const navHistory = useHistory();

        useEffect(() => {
            if (!isAuthenticated) {
                navHistory.push("/sign-in");
            }
        });

        return (
            <ComposedComponent {...props}/>
        );
    }


    function mapStateToProps(state) {
        return {
            isAuthenticated : state.auth.isAuthenticated
        }
    }

    return connect(mapStateToProps)(Authenticate);

}

