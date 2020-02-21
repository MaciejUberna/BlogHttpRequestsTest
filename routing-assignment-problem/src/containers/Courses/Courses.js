import React, { Component, Suspense } from 'react';
import {Route, NavLink} from 'react-router-dom';
import Course from '../Course/Course';

import classes from './Courses.module.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide'},
            { id: 2, title: 'Vue - The Complete Guide'},
            { id: 3, title: 'PWA - The Complete Guide'}
        ],
        activeCourse: null
    }

    componentDidMount() {
        //console.log('Did mount: this.props: ',this.props)
    }

    componentDidUpdate() {
        if(this.props.match) {
            if(!this.state.activeCourse || this.state.activeCourse.id !== +this.props.match.params.id ) {
                this.toggleCourseHandler(+this.props.match.params.id);
                console.log("Did update: activeCourse: " , this.state.activeCourse);
            }
        }
    }

    toggleCourseHandler = (id) => {
        const courseIdx = this.state.courses.findIndex(course => {
            return course.id === id;
        });
        if(courseIdx !== -1) {
            this.setState({activeCourse: this.state.courses[courseIdx]});
            console.log('toggleCourseHandler: activeCourse: ', this.state.activeCourse);
        } else {
            console.log('toggleCourseHandler: did not change state.')
        }
    }

    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className={classes.Courses}>
                    {
                        this.state.courses.map( course => {
                            return <article 
                                // onClick={this.toggleCourseHandler.bind(this, course.id)} 
                                className={classes.Course} 
                                key={course.id}>
                                {
                                    <NavLink 
                                        activeClassName={classes.Link} 
                                        to={'/courses/'+course.id+'?title='+course.title}
                                    >
                                        {course.title}
                                    </NavLink> 
                                }
                            </article>;
                        } )
                    }
                </section>
                <section>
                    <Suspense fallback={<div>Loading...</div>}> 
                        <Route path="/courses/:id" component={(props) => <Course {...props}/>} /> 
                    </Suspense>
                </section>
            </div>
        );
    }
}

export default Courses;