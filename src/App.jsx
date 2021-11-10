// Packages & etc.
import React, { Component } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { RAPID_API_KEY, TMDB_API_KEY } from "./keys";

// Components
import NavBar from "./components/NavBar/NavBar";
import PageHome from "./components/PageHome/PageHome";
import PageAccess from "./components/PageAccess/PageAccess";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import PageAccount from "./components/PageAccount/PageAccount";
import PageSearch from "./components/PageSearch/PageSearch";
import PageShowDetails from "./components/PageShowDetails/PageShowDetails";

// Styling
import "./App.css";

class App extends Component {
  state = {
    // user
    user: null,
    auth: null,
    // tv show
    showID: null,
  };

  componentDidMount() {
    const jwt = localStorage.getItem("token");
    try {
      const jwtToken = jwtDecode(jwt);
      this.getUserDetails(jwtToken.user_id);
      this.setState({
        auth: jwtToken,
      });
    } catch (err) {
      console.log(
        "🚀 ~ file: App.jsx ~ line 21 ~ App ~ componentDidMount ~ err",
        err
      );
    }
  }

  //*---------------------- URLs ----------------------
  //? USER
  loginURL = "http://localhost:8000/api/auth/login/";
  registerURL = "http://localhost:8000/api/auth/register/";
  userURL = "http://localhost:8000/api/auth/user/";

  //? TV SHOW

  //*---------------------- USER FUNCTIONS ----------------------

  //? LOGIN: Logs the user in and sets the token in localStorage. Redirects to home page after.
  loginUser = async (user) => {
    try {
      const response = await axios.post(this.loginURL, user);
      localStorage.setItem("token", response.data.access);
      const token = jwtDecode(response.data.access);
      this.getUserDetails(token.user_id);
      window.location = "/";
    } catch (err) {
      console.log("🚀 ~ file: API User.jsx ~ line 17 ~ loginUser ~ err", err);
    }
  };

  //? LOGOUT: Set state to null for user info and remove the token from localStorage.
  logoutUser = () => {
    localStorage.removeItem("token");
    this.setState({
      user: null,
      auth: null,
    });
    window.location = "/access";
  };

  //? REGISTER USER: Send user object to the backend once the user is created automatically logs the user in.
  registerUser = async (user) => {
    try {
      await axios.post(this.registerURL, user);
      this.loginUser({
        username: user.username,
        password: user.password,
      });
    } catch (err) {
      console.log(
        "🚀 ~ file: API User.jsx ~ line 30 ~ registerUser ~ err",
        err
      );
    }
  };

  //? GET USER: Retrieves all the user's information from the backend.
  getUserDetails = async (userID) => {
    const authToken = localStorage.getItem("token");
    try {
      const response = await axios.get(`${this.userURL}${userID}/`, {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      const requestedUser = response.data;
      this.setState({
        user: requestedUser,
      });
    } catch (err) {
      console.log(
        "🚀 ~ file: API User.jsx ~ line 45 ~ getUserDetails ~ err",
        err
      );
    }
  };

  // TODO: GET USER WATCHED SHOWS:
  //? GET WATCHED SHOWS:

  //? UPDATE STATE FOR USER
  setUser = async (userObject) => {
    this.setState((prevState) => ({
      ...prevState,
      user: userObject,
    }));
  };

  //*---------------------- TV SHOW FUNCTIONS ----------------------

  //? UPDATE STATE FOR SEARCH - Used to search for the selected TV Show.
  setShowID = async (ID) => {
    this.setState({
      showID: ID,
    });
  };

  //*---------------------- RENDER/RETURN ----------------------

  render() {
    const current = { user: this.state.user, auth: this.state.auth };
    const access = {
      login: this.loginUser,
      logout: this.logoutUser,
      register: this.registerUser,
      getUser: this.getUserDetails,
    };
    const showFunctions = { setShowID: this.setShowID };
    const showData = { show: this.state.show, tv_id: this.state.showID };
    // const userFunctions = {setUser: this.setUser}
    // const user = this.state.user
    return (
      <div>
        <NavBar {...current} {...access} setUser={this.setUser} />
        <Switch>
          {/*//? If user is logged in redirect to home else to access*/}
          <Route
            path="/"
            exact
            render={() => {
              if (current.auth) {
                return <Redirect to="/home" />;
              } else {
                return <Redirect to="/access" />;
              }
            }}
          />

          {/*//? Not-Found Page - AllowAny */}
          <Route path="/not-found" component={PageNotFound} />

          {/*//? Access Page - AllowAny */}
          <Route
            path="/access"
            render={(props) => {
              if (current.auth) {
                return <Redirect to="/home" />;
              } else {
                return <PageAccess {...props} {...access} />;
              }
            }}
          />

          {/*//? Home Page - Users Only */}
          <Route
            path="/home"
            render={(props) => {
              if (!current.auth) {
                return <Redirect to="/access" />;
              } else {
                return <PageHome {...props} {...current} />;
              }
            }}
          />

          {/*//? Account Page - Users Only */}
          <Route
            path="/account"
            render={(props) => {
              if (!current.auth) {
                return <Redirect to="/access" />;
              } else {
                return <PageAccount {...props} />;
              }
            }}
          />

          {/*//? Search Page - Users Only */}
          <Route
            path="/search"
            render={(props) => {
              if (!current.auth) {
                return <Redirect to="/access" />;
              } else {
                return <PageSearch {...props} {...showFunctions} />;
              }
            }}
          />

          {/*//? TV Show Details - Users Only */}
          <Route
            path="/show-details"
            render={(props) => {
              if (!current.auth) {
                return <Redirect to="/access" />;
              } else {
                return (
                  <PageShowDetails
                    {...props}
                    {...showData}
                    {...showFunctions}
                    username={current.user.username}
                  />
                );
              }
            }}
          />

          {/*//? Redirect Page */}
          <Redirect to="/not-found" />
        </Switch>
      </div>
    );
  }
}

export default App;
