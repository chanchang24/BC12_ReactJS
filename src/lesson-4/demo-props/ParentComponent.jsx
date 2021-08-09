import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

export default class ParentComponent extends Component {
  render() {
    return (
      <div className="container">
        <p>ParenComponent</p>
        <div className="row">
          {/* 
          - props có thể hiểu như là những thuộc tính của element (component)
          - props được truyền từ component cha (ParentComponent) sang component con (ChildComponent)
          - props có dạng key=value
           */}
          <ChildComponent name="Tay" age={1} />
          <ChildComponent name="Hoang" age={2} />
          <ChildComponent name="Huy" age={3} />
          <ChildComponent name="Tay" age={4} />
          <ChildComponent name="Hoang" age={5} />
          <ChildComponent name="Huy" age={6} />
        </div>
      </div>
    );
  }
}
