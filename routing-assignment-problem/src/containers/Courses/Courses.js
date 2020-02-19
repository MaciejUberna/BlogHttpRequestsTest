import React, { Component, Suspense } from 'react';
import {Route, NavLink, Redirect} from 'react-router-dom';
import Course from '../Course/Course';

import classes from './Courses.module.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide', clicked: false},
            { id: 2, title: 'Vue - The Complete Guide', clicked: false },
            { id: 3, title: 'PWA - The Complete Guide', clicked: false }
        ]
    }

    toggleCourseHandler = (id) => {
        const courseIdx = this.state.courses.findIndex(course => {
            return course.id === id;
        });
        if(courseIdx !== -1) {
            const tmpCoursesArr = [...this.state.courses];
            const course = tmpCoursesArr[courseIdx];
            course.clicked = !course.clicked;
            this.setState({courses: tmpCoursesArr});
        }
    }

    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className={classes.Courses}>
                    {
                        this.state.courses.map( course => {
                            return <article onClick={this.toggleCourseHandler.bind(this, course.id)} className={classes.Course} key={course.id}>
                                {course.clicked 
                                    ?
                                        (<Suspense fallback={<div>Loading...</div>}> 
                                            <Route path="/courses/:id" component={Course} /> 
                                        </Suspense>) 
                                    :
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
            </div>
        );
    }
}

export default Courses;