import React from 'react';
import Spinner from './Spinner';

export default function Users(props) {
    if(props.loading) {
        return <Spinner/>
    } else {
        return (
            <div>
                {props.data}
            </div>
        )
    }
}
