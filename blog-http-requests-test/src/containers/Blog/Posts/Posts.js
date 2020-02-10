import React, { Component } from 'react';
import axios from '../../../axios';

import Post from '../../../components/Post/Post';
import './Posts.css';

import { Route } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {

    state = {
        posts: []
    };
    
    componentDidMount() {
        axios.get('/posts')
            .then(response => {
                console.log('Posts.js Props: ',this.props);
                const posts = response.data.slice(0,5);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Maciej'
                    };
                });
                this.setState({posts: updatedPosts});
                //console.log('Response: ',response);
                //console.log('UpdatedPosts: ',updatedPosts);
            })
                .catch(error => {
                    console.log('Post error: ',error);
                    //this.setState({error: true});
                });
    }

    postSelectedHandler = (id) => {
        // "pathname" is the encoded param. 
        //this.props.history.push({pathname: '/posts/' + id});
        this.props.history.push('/posts/' + id);
    }

    render () {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>
        if(!this.state.error) {
            posts = this.state.posts.map(post => {
                //console.log('post: ',post);
                return (
                    // <Link to={'/posts/'+post.id} key={post.id}>
                        <Post
                            key={post.id}
                            title={post.title} 
                            author={post.author}
                            clicked={() => this.postSelectedHandler(post.id)}
                        /> 
                    // </Link>
            )});
        }
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost} /> 
            </div>
        );
    }
}

export default Posts;