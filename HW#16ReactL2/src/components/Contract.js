import React from 'react';

export default function Post(props) {
    console.log(props);
    console.log('photo',props.author.photo);
    let {author:{name, nickname: nick},date,image:postImage, content} = props;

    let userPhoto = name+' avatar';

    return (
        
    
    )
}

