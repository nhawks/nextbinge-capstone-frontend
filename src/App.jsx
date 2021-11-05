import React, { Component } from 'react';
import { Redirect, Switch, Route } from 'react-router';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import './App.css'
import UserAccess from './components/UserAccess/UserAccess';

class App extends Component {
  state = { }
  // state = { }
  loginURL = "http://localhost:8000/api/auth/login/"
  registerURL = "http://localhost:8000/api/auth/register/"
  userURL = "http://localhost:8000/api/auth/user/"


  componentDidMount() {
    const jwt = localStorage.getItem("token")
    try {
      const userToken = jwtDecode(jwt)
      this.setState({userToken})
    } catch(err) {
    console.log("🚀 ~ file: App.jsx ~ line 21 ~ App ~ componentDidMount ~ err", err)
    }
  }

  //* USER FUNCTIONS

  // LOGIN
  loginUser = async (user) => {
    try {
      const response = await axios.post(this.loginURL, user)
      localStorage.setItem("token", response.data.access)
      this.getUserDetails(this.state.userToken.user_id)
      // window.location = "/"
    } catch(err) {
      console.log("🚀 ~ file: App.jsx ~ line 33 ~ App ~ loginUser= ~ err", err)
    }
  }

  // GET USER
  getUserDetails = async (userId) => {
      const authToken = localStorage.getItem('token');
      try{ 
        const response = await axios.get(`${this.userURL}${userId}/`,
        {headers: {Authorization: `Bearer ${authToken}`}})
        const user = response.data
        this.setState({
          user
        })
      } catch(err) {
        console.log("🚀 ~ file: App.jsx ~ line 73 ~ App ~ getUserDetails= ~ err", err)
      }
    }

  
  

  render() {
    const user = this.state.user 
    return ( 
      <UserAccess login={this.loginUser} />
     );
  }
}
 
export default App;