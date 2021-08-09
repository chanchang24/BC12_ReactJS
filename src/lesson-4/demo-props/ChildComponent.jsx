import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ChildComponent extends Component {
  // Validate props
  static propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
  };

  render() {
    // - Component con nhận props thông qua ọbject props
    // - Lấy ra đúng key đã truyền ở component cha
    const { name, age } = this.props;

    return (
      <div className="col-4" style={{ paddingBottom: '30px' }}>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <p className="card-text">{age}</p>
          </div>
        </div>
      </div>
    );
  }
}
