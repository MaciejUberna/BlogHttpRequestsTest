import React, { Component } from 'react';
//import axios from 'axios';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

import './Blog.css';

import { Route } from 'react-router-dom';

class Blog extends Component {

    render () {
        //console.log(this.state)
        return (
                <div className="Blog">
                    <header>
                        <nav>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/new-post">New Post</a></li>
                            </ul>
                        </nav>
                    </header>
                    {/* <Route path="/" exact render={() => <h1>Home</h1>}/>
                    <Route path="/" render={() => <h1>Home 2</h1>}/> */}
                    <Route path="/" exact component={Posts} />
                    <Route path="/new-post" component={NewPost} />
                    {/* <Route path */}
                </div>
            );
        }
}

export default Blog;