import React from 'react';

export default function Post(props) {
    //console.log('from contact',props);

    var { firstName, lastName, phone, gender } = props.contacts;

    //console.log('gender',gender)

/*
    if(gender=='female'){
    	contactNIcon=(<i className="fas fa-venus"></i>	{firstName}{lastName})
    }else{
    	contactNIcon=''
    }


*/

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
			{(gender=='male')?<i className="fas fa-mars"></i>:(gender=='female')?<i className="fas fa-venus"></i>:<span> </span>}
			{firstName}{lastName}
            <span className="badge badge-primary badge-pill">{phone}</span>
        </li>

    )
}