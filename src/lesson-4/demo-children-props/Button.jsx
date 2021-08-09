import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    // Nhận nội dung giữ 2 thẻ đóng mở của component bằng this.props.children
    // Giống innerHTML
    return <button className="btn btn-success">{this.props.children}</button>;
  }
}
