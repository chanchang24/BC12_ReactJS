import React, { Component } from 'react'

export default class DemoDataBinding extends Component {
    fullName = 'Chu Ho Tay';
    birthYear = 2000;

    renderStudent = () => {
        const student = {
            fullName: 'Chu Ho Dong',
            age: 18,
            className: 'BC12'
        }

        const { fullName, age, className } = student;

        return (
            <div>
                <p>Name: {fullName}</p>
                <p>Age: {age}</p>
                <p>Class: {className}</p>
            </div>
        )
    }

    render() {
        return (
            <div>
                <p>This is {this.fullName}, {2021 - this.birthYear} years old.</p>
                <h2>Student Info</h2>
                {this.renderStudent()}
            </div>
        )
    }
}
