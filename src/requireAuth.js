import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';

export default function (ComposedComponent) {
    const Authenticate = (props, {token = props.token} ) => {
        const navHistory = useHistory();

        useEffect(() => {
            if (!token) {
                navHistory.push("/sign-in");
            }
        });

        return (
            <ComposedComponent {...props}/>
        );
    }


    function mapStateToProps(state) {
        return {
            token : state.auth.token
        }
    }

    return connect(mapStateToProps)(Authenticate);

}

