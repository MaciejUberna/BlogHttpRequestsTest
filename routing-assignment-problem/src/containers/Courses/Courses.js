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
        ]
    }

    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className={classes.Courses}>
                    {
                        this.state.courses.map( course => {
                            return (
                                    <NavLink 
                                        activeClassName={classes.Link} 
                                        to={'/courses/'+course.id+'?title='+course.title}
                                        key={course.id}
                                    >
                                        <article
                                            className={classes.Course}
                                            key={course.id+'art'}
                                        >
                                            {course.title}
                                        </article>
                                    </NavLink> 
                            );
                        } )
                    }
                </section>
                <section>
                    <Suspense fallback={<div>Loading...</div>}> 
                        <Route path="/courses/:id" component={Course} /> 
                    </Suspense>
                </section>
            </div>
        );
    }
}

export default Courses;