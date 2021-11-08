import React, { Component } from 'react';
import { Redirect, Switch, Route } from "react-router-dom";
import jwtDecode from 'jwt-decode';
import axios from 'axios';

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
    auth: null
  }

  
  componentDidMount() {
    const jwt = localStorage.getItem("token")
    try {
      const jwtToken = jwtDecode(jwt)
      this.setState({
        auth: jwtToken
      })
    } catch(err) {
      console.log("🚀 ~ file: App.jsx ~ line 21 ~ App ~ componentDidMount ~ err", err)
    }
  }
  
  //*---------------------- URLs ----------------------
  loginURL = "http://localhost:8000/api/auth/login/"
  registerURL = "http://localhost:8000/api/auth/register/"
  userURL = "http://localhost:8000/api/auth/user/"


  //*---------------------- USER FUNCTIONS ----------------------
  // LOGIN
  loginUser = async (user) => {
    try {
        const response = await axios.post(this.loginURL, user)
        localStorage.setItem("token", response.data.access)
        const token = jwtDecode(response.data.access)
        this.getUserDetails(token.user_id)
        // window.location = "/"
    } catch(err) {
        console.log("🚀 ~ file: API User.jsx ~ line 17 ~ loginUser ~ err", err)
    }
  }

  // LOGOUT
  logoutUser = (setUser) => {
      localStorage.removeItem('token');
      const location = window.location.pathname;
      setUser(null)
      if (
          location === '/home' 
          || location === '/search' 
          || location === '/account'
          || location === '/not-found' 
          )
      {
        window.location = "/"
      }
  }

  // REGISTER USER
  registerUser = async (user) => {
      try {
          await axios.post(this.registerURL, user)
          this.loginUser({
          "username": user.username,
          "password": user.password
          })
          window.location = "/"
      } catch(err) {
          console.log("🚀 ~ file: API User.jsx ~ line 30 ~ registerUser ~ err", err)
      }
  }

  // GET USER
  getUserDetails = async (userID) => {
      const authToken = localStorage.getItem('token');
      try{ 
          const response = await axios.get(`${this.userURL}${userID}/`,
          {headers: {Authorization: `Bearer ${authToken}`}})
          const user = response.data
          this.setUser(user)
      } catch(err) {
          console.log("🚀 ~ file: API User.jsx ~ line 45 ~ getUserDetails ~ err", err)
      }
  }

  // UPDATE STATE FOR USER
  setUser = async (userObject) => {
    this.setState(prevState =>({
      ...prevState, user: userObject
    }))
  }


  render() {
    const current = {user: this.state.user, auth: this.state.auth}
    const access = {login: this.loginUser, logout: this.logoutUser, register: this.registerUser, getUser: this.getUserDetails}
    const func = {setUser: this.setUser}
    const user = this.state.user
    return ( 
      <div>
        <NavBar {...current} {...access} setUser={this.setUser}  />
        <Switch>

          {/*//? If user is logged in show the home page else show the access page. */}
          <Route 
            path="/" 
            exact
            component={() => {
              if (!current.user) {
                return PageAccess
              } else {
                return PageHome
              }
            }}
          />

          {/*//? Not-Found Page - AllowAny */}
          <Route path="/not-found" component={PageNotFound} />

          {/*//? Access Page - AllowAny */}
          <Route path="/access" render={props => <PageAccess {...props} {...access} setUser={this.setUser} />} />
          
          {/*//? Home Page - Users Only */}
          <Route 
            path="/home"
            render={props => {
              if(!current.user) {
                return <Redirect to="/access" />
              } else {
                return <PageHome {...props} {...current} />
              }
            }}
          />

          {/*//? Account Page - Users Only */}
          <Route 
            path="/account"
            render={props => {
              if(!current.user) {
                return <Redirect to="/access" />
              } else {
                return <PageAccount {...props} />
              }
            }}
          />

          {/*//? Search Page - Users Only */}
          <Route 
            path="/search"
            render={props => {
              if(!current.user) {
                return <Redirect to="/access" />
              } else {
                return <PageSearch {...props} />
              }
            }}
          />
          
          {/*//? Redirect Page */}
          <Redirect to='/not-found' />

        </Switch>
      </div>
    );
  }
}

export default App;