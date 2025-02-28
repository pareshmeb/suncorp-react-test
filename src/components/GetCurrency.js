import React from 'react';

const GetCurrency = (props) => {
    const errors = props.errors;
    if (errors) {
        return (
            <ul className="error-messages">
                {
                    Object.keys(errors).map(key => {
                        return (
                            <li key={key}>
                                {key} {errors[key]}
                            </li>
                        );
                    })
                }
            </ul>
        );
    } else {
        return null;
    }
}

export default GetCurrency;
