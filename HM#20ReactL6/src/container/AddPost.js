import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updatePostText } from '../actions'

class AddPost extends Component {

    constructor(props){
        super(props);
        this.state={
            post_message:'',
            post_img:'',
            name:'Darts Waiter'
        };
    }

    getData=(val)=>{
        let nick_name = this.state.name.toLocaleLowerCase().split(' ').slice(0,1).toString();
        let av_img;

        switch(nick_name){
            case 'darts':
                av_img='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Darts_in_a_dartboard.jpg/220px-Darts_in_a_dartboard.jpg';
                break;

            case 'bilbo':
                av_img='https://upload.wikimedia.org/wikipedia/en/7/78/Bilbo_Baggins.jpg';
                break;
            
            case 'slim':
                av_img='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Eminem_-_Oslo_Sommertid_2018_%28Norway%29.png/220px-Eminem_-_Oslo_Sommertid_2018_%28Norway%29.png';
                break;
                
            default:
                av_img=''    
        }

        let clonedState = {...this.state, 'id':Math.random().toString(36).substr(2, 7), date:'26 feb', nick_name,av_img};
        //console.log(clonedState)

        this.props.updatePostText(clonedState);
        this.setState({
            post_message:'',
            post_img:'',
            name:'Darts Waiter'
        })
    }

    changeHandler=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    selectHandler=(e)=>{
        this.setState({
            name: e.target.value
        })
    }

    render() {
        return (
            <React.Fragment>
                <h2>Post text:</h2>
                <input type="text" size="40" name='post_message' value={this.state.post_message} onChange={(evt)=>{this.changeHandler(evt)}}/>
                <h2>PostImage:(url)</h2>
                <input type="text" size="40" name='post_img'  value={this.state.post_img} onChange={(evt)=>{this.changeHandler(evt)}}/>
                <h2>Select author:</h2>
                <select name="select" id="selectedName" onChange={(e)=>{this.selectHandler(e)}}>
                    <option value="Darts Waiter" >Darts Waiter</option>
                    <option value="Bilbo Backpackins">Bilbo Backpackins</option>
                    <option value="Slim Shady">Slim Shady</option>
                </select>
                <button onClick={(e)=>{this.getData(e.target.value)}}>Add post</button>
            </React.Fragment>
        )
    }
}


function matchDispatchToProps(dispatch){
    //connect action creator 
    return bindActionCreators({
        updatePostText,
    }, dispatch)

}


export default connect(null, matchDispatchToProps)(AddPost);