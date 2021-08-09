import React, { Component } from 'react';

export default class DemoConditionalRendering extends Component {
  // Thuộc tính của class
  loggedIn = true;
  username = 'taych';

  checkLogin = () => { 
    if (this.loggedIn) {
      return <h1>Welcome {this.username} to this page!</h1>;
    }
    return <button className="btn btn-danger">Login</button>;
  };        

  render() {
    return (
      <div>
        {this.checkLogin()}

        {this.loggedIn ? (
          <h1>Welcome {this.username} to this page!</h1>
        ) : (
          <button className="btn btn-danger">Login</button>
        )}

        {this.loggedIn && <h1>Welcome {this.username} to this page!</h1>}
        {!this.loggedIn && <button className="btn btn-danger">Login</button>}
      </div>
    );
  }
}
