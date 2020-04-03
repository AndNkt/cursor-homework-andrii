import React from 'react';

export default function Post(props) {
    //console.log('from contact',props);

    var {firstName,lastName,phone,gender} = props.contacts;

    //console.log('gender',gender)
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {(gender)?((gender=='male')?<i className="fas fa-mars"></i> :<i className="fas fa-venus"></i> ):<i className="fas fa-transgender-alt"></i>}    {firstName} {lastName} 
            <span className="badge badge-primary badge-pill">{phone}</span>
        </li>
     
    )
}

