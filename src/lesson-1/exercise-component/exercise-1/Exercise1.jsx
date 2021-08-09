import React, { Component } from 'react';
import Courses from './Courses';
import Header from './Header';

class Exercise1 extends Component {
    render() {
        return (
            <div>
                <Header />
                <Courses />
            </div>
        )
    }
}

export default Exercise1;