import React,{Component} from 'react';
//import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class ListPost extends Component {
    
    componentDidUpdate(){
        console.log('List updated -props',this.props)
    }

    componentDidMount(){
        //console.log('List -mounted',this.props);

    }

    createListItems() {
       //
        let combined = [...this.props.Posts, ...this.props.extra.extraPost]
        //
        //this.props.Posts.map((post) => {
        return combined.map((post) => {
            return (
                <div className="container p-2" key={post.id}>
                    <div className="row align-items-start">
                        <div className="col-2">
                            <img className='author-avatar' src={post.av_img} />
                        </div>
                        <div className="col-lg">
                            <span className="author-name">{post.name} </span><i className="fas fa-check-circle author-name"></i> <span className="author-nick">{post.nick_name}</span><span>{post.date}</span>
                            <div className="content">{post.post_message}</div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-2"> </div>
                        <div className="col-lg">
                            <img className='post-image' alt='Post image' src={post.post_img}/>
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
        })
    }


    render() {
        return (
            <ul>
                {this.createListItems()}
            </ul>
        )
    }
}
//takes piece of state(part of the store) and send to component as props
function mapStateToProps(state) {
    return {
        Posts: state.Posts,
        extra:state.addedPost
    }
}



//connect - take component
export default connect(mapStateToProps)(ListPost);

