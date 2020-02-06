import React, { Component } from 'react';
//import axios from 'axios';
import Posts from './Posts/Posts';
import './Blog.css';

class Blog extends Component {

    render () {
        //console.log(this.state)
        return (
                <div className="Blog">
                    <header>
                        <nav>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/">New Post</a></li>
                            </ul>
                        </nav>
                    </header>
                    <Posts />
                </div>
            );
        }
}

export default Blog;