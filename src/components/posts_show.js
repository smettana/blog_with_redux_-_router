import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';
import { bindActionCreators } from 'redux';

class PostsShow extends Component{
    componentWillMount(){
        this.props.fetchPost(this.props.params.id)
    }
    render() {
        if(!this.props.post){
            return (
                <div>Loading...</div>
            )
        }
        return (           
            <div>
                <h3>{this.props.post.title}</h3>
                <h6>Categories: {this.props.post.categories}</h6>
                <p>{this.props.post.content}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        post:state.posts.post
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        fetchPost:bindActionCreators(fetchPost, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsShow);