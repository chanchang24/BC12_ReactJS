import React, { Component } from 'react';
import Button from './Button';

export default class DemoChildrenProps extends Component {
  render() {
    return (
      <div>
        {/* Truyền children props bằng cách truyền nội dung vào giữa 2 thẻ đóng mở
        của component */}
        <Button>See More</Button>
        <Button>Sign Up</Button>
        <Button>Sign In</Button>
        <Button>Add to cart</Button>
      </div>
    );
  }
}
