// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Component } from "react";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";

class App extends Component {
  constructor() {
    super();

    this.state = {
      accountBalance: 14568.27,
      currentUser: {
        userName: "bob_loblaw",
        memberSince: "08/23/99",
      },
    };
  }
  render() {
    const HomeComponent = () => (
      <Home accountBalance={this.state.accountBalance} />
    );
    const UserProfileComponent = () => (
      <UserProfile
        userName={this.state.currentUser.userName}
        memberSince={this.state.currentUser.memberSince}
      />
    );
    return (
      <Router>
        <Routes>
          {/* <Route path="/Home" element={<Home />} /> */}
          <Route exact path="/Home" element={<HomeComponent />} />
          <Route
            path="/"
            element={<Home accountBalance={this.state.accountBalance} />}
          />
          <Route exact path="/userProfile" element={<UserProfileComponent />} />
        </Routes>
      </Router>
    );
  }
}
export default App;
