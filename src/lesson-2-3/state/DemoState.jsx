import React, { Component } from 'react';

export default class DemoState extends Component {
  state = {
    loggedIn: false,
  };

  login = () => {
    // Không thể cập nhật state trực tiếp như thế này
    // this.state.loggedIn = true;

    // Dùng setState để update state và goi lại hàm render
    // setState là hàm bất đồng bộ
    this.setState(
      {
        loggedIn: true,
      },
      () => {
        console.log(this.state.loggedIn);
      }
    );
  };

  render() {
    return (
      <div className="text-center">
        {this.state.loggedIn ? (
          <h1>Welcome to this page!</h1>
        ) : (
          <button className="btn btn-success" onClick={this.login}>
            Login
          </button>
        )}
      </div>
    );
  }
}
