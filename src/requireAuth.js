import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";

export default function (ComposedComponent) {
    const Authenticate = props => {
        const isAuthenticated = true;

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

    return Authenticate;
}