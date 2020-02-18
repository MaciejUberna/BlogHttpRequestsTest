import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

import classes from './Courses.module.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className={classes.Courses}>
                    {
                        this.state.courses.map( course => {
                            return <article className={classes.Course} key={course.id}>
                                <NavLink activeClassName={classes.Link} to={"/courses/"+course.id}>
                                    {course.title}
                                </NavLink>
                            </article>;
                        } )
                    }
                </section>
            </div>
        );
    }
}

export default Courses;