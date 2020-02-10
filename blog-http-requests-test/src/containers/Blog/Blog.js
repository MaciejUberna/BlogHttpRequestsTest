import React, { Component } from 'react';
//import axios from 'axios';
import Posts from './Posts/Posts';
//import NewPost from './NewPost/NewPost';
import asyncNewPost from '../../hoc/asyncComponent';

import './Blog.css';

import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

//Whatever goes between parenthesis of import () will be executed when the function is executed.
const AsyncNewPost = asyncNewPost(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {

    state = {
        auth: true
    }

    render () {
        //console.log(this.state)
        return (
                <div className="Blog">
                    <header>
                        <nav>
                            <ul>
                                {console.log('Props of Blog.js: ', this.props)}
                                <li><NavLink 
                                    to="/posts/" 
                                    exact
                                    activeClassName="my-active"
                                    activeStyle={{
                                        color: '#fa923f',
                                        textDecoration: 'underline'
                                    }}
                                    >
                                        Posts
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
                    {/* Swich is important if you want to make sure only one route is loaded */}
                    <Switch>
                        {/* This is a guard with redirect at the bottom and auth in state! */}
                        {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}
                        <Route path="/posts" component={Posts} />
                        {/* Catch all route below: */}
                        <Route render={() => <h1>Not found</h1>}/>
                        {/* <Route path="/" component={Poasts} /> */}
                        {/* <Redirect from="/" to="/posts" /> */}
                        {/* This below must be last so it does not interfear with /new-post url.*/}
                        {/* The id can be anything */}
                        {/* <Route path="/:id" exact component={FullPost} /> */}
                    </Switch>
                </div>
            );
        }
}

export default Blog;