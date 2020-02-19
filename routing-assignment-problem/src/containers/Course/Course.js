import React, { Component } from 'react';
//package to parse queries
import queryString from 'query-string';

class Course extends Component {

    state = {
        id: null,
        title: null
    }

    componentDidMount() {
        //console.log('this.props.location.search: ',this.props.location.search);
        const queries = queryString.parse(this.props.location.search);
        //console.log('queries: ',queries.title);
        this.setState(
            {id: this.props.match.params.id,
            title: queries.title}
        );
    }

    render () {
        return (
            <div>
                <h1>{this.state.title}</h1>
                {/* {console.log("Course props log:",this.props)} */}
                <p>You selected the Course with ID: {this.state.id} </p>
            </div>
        );
    }
}

export default Course;