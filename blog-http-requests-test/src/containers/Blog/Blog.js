import React, { Component } from 'react';
//import axios from 'axios';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

import './Blog.css';

import { Route, Link, withRouter } from 'react-router-dom';

class Blog extends Component {

    render () {
        //console.log(this.state)
        return (
                <div className="Blog">
                    <header>
                        <nav>
                            <ul>
                                {console.log('Props of Blog.js: ', this.props)}
                                <li><Link to="/">Home</Link></li>
                                <li><Link to={{
                                    pathname: this.props.match.url + '/new-post',
                                    hash: '#submit',
                                    search: '?quick-submit=true'
                                }}>New Post</Link></li>
                            </ul>
                        </nav>
                    </header>
                    {/* <Route path="/" exact render={() => <h1>Home</h1>}/>
                    <Route path="/" render={() => <h1>Home 2</h1>}/> */}
                    <Route path="/" exact component={Posts} />
                    <Route path="/new-post" component={NewPost} />
                </div>
            );
        }
}

export default withRouter(Blog);