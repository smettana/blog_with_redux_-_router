import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

class PostsShow extends Component{
    static contextTypes = {
        router:PropTypes.object
    }

    componentWillMount(){
        this.props.fetchPost(this.props.params.id);
            
    }

    onDeleteClick = () =>{
        this.props.deletePost(this.props.params.id)
            .then(()=>{
                this.context.router.push("/")
            });
    } 
    render() {
        const { post } = this.props;

        if(!post){
            return (
                <div>Loading...</div>
            )
        }
        return (           
            <div>
                <Link to="/">Back To Index</Link>
                <button 
                    className="btn btn-danger pull-xs-right"
                    onClick={this.onDeleteClick}>
                    Delete Post
                </button>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
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
        fetchPost:bindActionCreators(fetchPost, dispatch),
        deletePost:bindActionCreators(deletePost, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsShow);