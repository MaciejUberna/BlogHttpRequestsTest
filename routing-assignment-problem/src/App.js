import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, NavLink, Redirect} from 'react-router-dom';
import classes from './App.module.css'
import Logo from './img/system/404.jpg';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';

class App extends Component {

  state = {
    is404: false
  }

  hideNon404Handler = () => {
    this.setState({is404: true});
  }

  showNon404Handler = () => {
    this.setState({is404: false});
  }

  render () {
    return (
      <BrowserRouter>
      {!this.state.is404
      ?
        <div className={classes.Links}>
          <ul>
              <li> <NavLink activeClassName={classes.active} to="/users" >Users</NavLink> </li>
              <li> <NavLink activeClassName={classes.active} to="/courses" >Courses</NavLink> </li>
          </ul>
        </div>
      :
        null
      }
        <Switch>
          <Route path="/courses/:id" exact component={ (props) => <Courses onLoad={this.showNon404Handler} {...props} />} />
          <Route path="/courses" exact component={ () => <Courses onLoad={this.showNon404Handler} /> } />
          <Route path="/users" exact component={ () => <Users onLoad={this.showNon404Handler } />} />
          <Redirect from="/all-courses" to="/courses" />
          <Route component={() => (<img src={Logo} onLoad={this.hideNon404Handler} width='50%' height='50%' alt='Error 404, Page not found...'/>)} />
        </Switch>
      {!this.state.is404
      ?
        <div className="App">
          <ol style={{textAlign: 'left'}}>
            <li>Add Routes to load "Users" and "Courses" on different pages (by entering a URL, without Links)</li>
            <li>Add a simple navigation with two links => One leading to "Users", one leading to "Courses"</li>
            <li>Make the courses in "Courses" clickable by adding a link and load the "Course" component in the place of "Courses" (without passing any data for now)</li>
            <li>Pass the course ID to the "Course" page and output it there</li>
            <li>Pass the course title to the "Course" page - pass it as a param or score bonus points by passing it as query params (you need to manually parse them though!)</li>
            <li>Load the "Course" component as a nested component of "Courses"</li>
            <li>Add a 404 error page and render it for any unknown routes</li>
            <li>Redirect requests to /all-courses to /courses (=> Your "Courses" page)</li>
          </ol>
        </div>
      :
        null
      }
      </BrowserRouter>
    );
  }
}

export default App;