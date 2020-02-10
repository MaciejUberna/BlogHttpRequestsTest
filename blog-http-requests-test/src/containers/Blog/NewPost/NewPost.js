import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Maciek',
        submitted: false
    }

    componentDidMount () {
        //Here you can also implement guards
        console.log('Props NewPost in didMount: ',this.props);
    }

    postDataHandler = () => {
        const post = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author
        };
        axios.post('/posts',post)
            .then(response => {
                console.log("NewPost.js Post response: ",response);
                // with this command you can go back to the previous page by clicking browser back button
                this.props.history.push('/posts');

                //With routing you wont go back with browser back button
                //this.setState({submitted: true});
                //the same with this command:
                // this.props.history.replace('/posts')
            });
    };

    render () {
        let redirect = null;
        if(this.state.submitted) {
            redirect = <Redirect to="/posts" />
        }
        return (
            <div className="NewPost">
                {redirect}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                    <option value="Maciek">Maciek</option>
                </select>
                <button onClick={this.postDataHandler} >Add Post</button>
            </div>
        );
    }
}

export default NewPost;