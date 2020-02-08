import React, { Component } from 'react';
//import axios from 'axios';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

import './Blog.css';

import { Route, NavLink } from 'react-router-dom';

class Blog extends Component {

    render () {
        //console.log(this.state)
        return (
                <div className="Blog">
                    <header>
                        <nav>
                            <ul>
                                {console.log('Props of Blog.js: ', this.props)}
                                <li><NavLink 
                                    to="/" 
                                    exact
                                    activeClassName="my-active"
                                    activeStyle={{
                                        color: '#fa923f',
                                        textDecoration: 'underline'
                                    }}
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li><NavLink to={{
                                    pathname: '/new-post',
                                    hash: '#submit',
                                    search: '?quick-submit=true'
                                }}>New Post</NavLink></li>
                            </ul>
                        </nav>
                    </header>
                    <Route path="/" exact component={Posts} />
                    <Route path="/new-post" component={NewPost} />
                    {/* This below must be last so it does not interfear with /new-post url. */}
                    {/* The id can be anything */}
                    <Route path="/:id" exact component={Posts} />
                </div>
            );
        }
}

export default Blog;