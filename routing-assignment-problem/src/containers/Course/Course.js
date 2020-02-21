import React, { Component } from 'react';
//package to parse queries
import queryString from 'query-string';

class Course extends Component {

    state = {
        id: null,
        title: null
    }

    componentDidMount() {
        const queries = queryString.parse(this.props.location.search);
        if (queries.title) {
            this.setState(
                {id: this.props.match.params.id,
                title: queries.title}
            );
        } else {
            this.setState({id: this.props.match.params.id})
        }
    }

    render () {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>You selected the Course with ID: {this.state.id} </p>
            </div>
        );
    }
}

export default Course;