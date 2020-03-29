import React from 'react';

export default function Post(props) {
    console.log(props);
    console.log('photo',props.author.photo);
    let {author:{name, nickname: nick},date,image:postImage, content} = props;

    let userPhoto = name+' avatar';

    return (
        <div className="container p-2">

            <div className="row align-items-start">
                <div className="col-2">
                    <img className='author-avatar' src={props.author.photo} alt={userPhoto}/>
                </div>
                <div className="col-lg">
                    <span className="author-name">{name} </span><i className="fas fa-check-circle author-name"></i> <span className="author-nick">{nick}</span><span>{date}</span>
                    <div className="content">{content}</div>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-2"> </div>
                <div className="col-lg">
                    <img className='post-image' src={postImage} alt='Post image'/>
                </div>

            </div>


            <div className="row align-items-center mt-2">
                <div className="col"> </div>
                <div className="col"><i className="far fa-comment"></i> <span>482</span> </div>
                <div className="col"><i className="fas fa-head-side-mask"></i> <span>182</span> </div>
                <div className="col"><i className="fas fa-head-side-cough"></i> <span>283</span> </div>
                <div className="col"><i className="fas fa-download"></i></div>
                <div className="col"> </div>

            </div>

        </div>
        
    
    )
}

/*
const PostContainer = (props) => {
    return(
        <PostHeader/>
        <PostBody/>
        <PostFooter/>
    )
}

const PostHeader = (props) => {

} */