import React, { Component } from 'react';
import axios from 'axios';
//import axios from '../../axios';

import './FullPost.css';

class FullPost extends Component {

    state = {
        loadedPost: null
    }

    componentDidMount () {
        console.log('FullPost didMount props: ',this.props);
        this.loadData('componentDidMount');
    }

    componentDidUpdate () {
        console.log('FullPost didUpdate props: ',this.props);
        this.loadData('componentDidUpdate');
    }

    loadData = (message) => {
        // + in front of +this.props.match.params.id converts string into a number so we still use !== instead of !=
        if(this.props.match.params.id) {
            if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.id)) {
                axios.get('/posts/' + this.props.match.params.id)
                    .then(response => {
                        console.log('FullPost '+message+' Response: ',response)
                        this.setState({loadedPost: response.data});
                    });
            }
        }
    }

    deletePostHandler = () => {
        console.log('Deleting id: ',this.props.match.params.id,' ...');
        axios.delete('/posts/' + this.props.match.params.id)
            .then(response => {
                console.log('Delete response: ',response);
            });
    };

    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if(this.props.match.params.id) {
            post = <p style={{textAlign: 'center'}}>Loading...</p>;
        }
        if(this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>

            );
        };
        return post;
    }
}

export default FullPost;