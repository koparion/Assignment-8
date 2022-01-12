import React, { Component } from "react";
import AccountBalance from "./AccountBalance";
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <img
          src="https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
          alt="bank"
        />
        <h1>Bank of React</h1>
      
        <Link to="/userProfile">User Profile</Link>

<AccountBalance accountBalance={this.props.accountBalance}/>

      </div>
    );
  }
}

export default Home;
