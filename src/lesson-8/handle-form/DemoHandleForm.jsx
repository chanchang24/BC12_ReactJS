import { event } from 'jquery';
import React, { Component } from 'react'

export default class DemoHandleForm extends Component {
    state={
        // formik+ yup
        email: '',
        password: '',
    };
    // Lợi dụng name input đặt giống state có sẵn lấy về rồi làm key
    handleOnChange = event => {
        console.log(event.target.name, event.target.value);
        const{name, value}=event.target;
        this.setState({
            [name]: value
        },()=>{
            console.log(this.state);
        });
    }
    handleSumit = event => {
        //chặn gửi form đi
        event.preventDefault();
        console.log('submitted');
        console.log(this.state);
    }
    render() {
        return (
            <div className="container">
                <h1>Login</h1>
                <form onSubmit={this.handleSumit}>
                    <div className="form-group">
                        <label >Email address</label>
                        <input  className="form-control" name="email" value={this.state.email} onChange={this.handleOnChange} />
                        
                    </div>
                    <div className="form-group">
                        <label >Password</label>
                        <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleOnChange}/>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        )
    }
}
