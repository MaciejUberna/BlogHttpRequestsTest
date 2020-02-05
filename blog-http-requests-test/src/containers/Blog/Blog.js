import React, { Component } from 'react';
//import axios from 'axios';
import axios from '../../axios';
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
                <div className="Blog">
                    <heder>
                        <nav>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/">New Post</a></li>
                            </ul>
                        </nav>
                    </heder>
                    <section className="Posts">
                        {posts}
                    </section>
                </div>
            );
        }
}

export default Blog;