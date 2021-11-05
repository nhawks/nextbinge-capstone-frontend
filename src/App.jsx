import React, { Component } from 'react';
import { Redirect, Switch, Route } from "react-router-dom";
import jwtDecode from 'jwt-decode';
// import axios from 'axios';

import NavBar from './components/NavBar/NavBar';
import PageHome from './components/PageHome/PageHome';
import PageAccess from './components/PageAccess/PageAccess';
import PageNotFound from './components/PageNotFound/PageNotFound';
import PageAccount from './components/PageAccount/PageAccount';
import PageSearch from './components/PageSearch/PageSearch';

import './App.css'


class App extends Component {
  state = { 
    user: null,
    userToken: null
  }

  componentDidMount() {
    const jwt = localStorage.getItem("token")
    try {
      const jwtToken = jwtDecode(jwt)
      this.setState({
        userToken: jwtToken
      })
    } catch(err) {
    console.log("🚀 ~ file: App.jsx ~ line 21 ~ App ~ componentDidMount ~ err", err)
    }
  }

  setUser = async (userObject) => {
    this.setState({
      user: userObject
    })
  }

  render() {
    const user = this.state.user
    return ( 
      <div>
        <NavBar user={this.state.user} />
        <Switch>

          <Route path="/" exact component={PageHome} />

          {/* Not-Found Page - AllowAny */}
          <Route path="/not-found" component={PageNotFound} />

          {/* Access Page - AllowAny */}
          <Route path="/access" render={props => <PageAccess {...props} setUser={this.setUser} />} />

          
          {/* Home Page - Users Only */}
          <Route 
            path="/home"
            render={props => {
              if(!user) {
                return <Redirect to="/access" />
              } else {
                return <PageHome {...props} />
              }
            }}
          />

          {/* Account Page - Users Only */}
          <Route 
            path="/account"
            render={props => {
              if(!user) {
                return <Redirect to="/access" />
              } else {
                return <PageAccount {...props} />
              }
            }}
          />

          {/* Search Page - Users Only */}
          <Route 
            path="/search"
            render={props => {
              if(!user) {
                return <Redirect to="/access" />
              } else {
                return <PageSearch {...props} />
              }
            }}
          />
         
          <Redirect to='/not-found' />

        </Switch>
      </div>
    );
  }
}

export default App;