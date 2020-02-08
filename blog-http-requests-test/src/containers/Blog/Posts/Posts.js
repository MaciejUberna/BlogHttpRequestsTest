import React, { Component } from 'react';
import axios from '../../../axios';

import Post from '../../../components/Post/Post';
import './Posts.css';

class Posts extends Component {

    state = {
        posts: []
    };
    
    componentDidMount() {
        axios.get('/posts')
            .then(response => {
                console.log('Posts.js Props: ',this.props);
                const posts = response.data.slice(0,4);
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
        this.setState({selectedPostId: id});
    }

    render () {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>
        if(!this.state.error) {
            posts = this.state.posts.map(post => {
                //console.log('post: ',post);
                return <Post 
                key={post.id} 
                title={post.title} 
                author={post.author}
                clicked={() => this.postSelectedHandler(post.id)}
                />
            });
        }
        return (
            <section className="Posts">
                {posts}
            </section>
        );
    }
}

export default Posts;