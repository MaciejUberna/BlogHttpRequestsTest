import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    state = {
        posts: [],
        selectedPostId: null,
        error: false
    };

    componentDidMount() {
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0,4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Maciej'
                    };
                });
                this.setState({posts: updatedPosts});
                //console.log('Response: ',response)
                //console.log('UpdatedPosts.data: ',updatedPosts.data)
            })
                .catch(error => {
                    console.log('Post error: ',error);
                    this.setState({error: true});
                });
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    }

    render () {
        //console.log(this.state)
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>
        if(!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post 
                key={post.id} 
                title={post.title} 
                author={post.author}
                clicked={() => this.postSelectedHandler(post.id)}
                />
            });
        }
        return (
                <div>
                    <section className="Posts">
                        {posts}
                    </section>
                    <section>
                        <FullPost id={this.state.selectedPostId}/>
                    </section>
                    <section>
                        <NewPost />
                    </section>
                </div>
            );
        }
}

export default Blog;