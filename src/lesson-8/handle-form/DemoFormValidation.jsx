import { event } from 'jquery';
import React, { Component } from 'react'

export default class DemoFormValidation extends Component {
    state = {
        // formik+ yup
        values: {
            email: '',
            password: '',
        },
        errors: {
            email: '',
            password: '',
        },
        isValidEmail: false,
        isValidPassword: false,
        isValidForm: false,
    };
    //hiện data lên form ,lợi dụng name input đặt giống state có sẵn lấy về rồi làm key
    handleOnChange = event => {
        // console.log(event.target.name, event.target.value);
        const { name, value } = event.target;
        this.setState({
            values: {
                ...this.state.values,
                [name]: value,
            }
        }, () => {
            console.log(this.state.values);
        });
    }
    // Xử lý error
    handleError = event => {
        const { name, value } = event.target;
        let { isValidEmail, isValidPassword } = this.state;
        let errorsMessage = '';
        // validate empty
        if (value === '') {
            errorsMessage = `${name} cannot be empty`;

        }//round cuối để check lại
        switch (name) {
            case 'email':
                // nếu value khác rỗng và khác với regex
                const emailRegex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
                if (value && !value.match(emailRegex)) {
                    errorsMessage = 'invalid email!';
                }
                //bằng rỗng là nó không có lỗi
                isValidEmail = errorsMessage === '' ? true : false;
                break;
            case 'password':
                if (value && (value.length < 6 || value.length > 10)) {
                    errorsMessage = 'password must be between 6 and 10 characters';
                }
                isValidPassword = errorsMessage === '' ? true : false;
                break;
            default:
                break;
        }
        this.setState({
            errors: {
                ...this.state.errors,
                [name]: errorsMessage,
            },
            isValidEmail,
            isValidPassword,
        }, () => {
            //Dựa vào cái setState thay đổi rồi mới đến validateForm
            this.validateForm();
        })
    }
    // disabled nút sumit form
    validateForm = () => {
        const { isValidEmail, isValidPassword } = this.state;
        this.setState({
            // dựa vào 2 thằng này để setState
            isValidForm: isValidEmail && isValidPassword,
        })
    }

    // validation có 2 sự kiện là OnKeyUp và OnBlur 
    handleSumit = event => {
        //chặn gửi form đi
        event.preventDefault();
        if(this.state.isValidForm){
            // request callAPI
            console.log('submitted');
        console.log(this.state);
        }else{
            console.log('Form has error');
        }
        
    };
    ///control component và uncontrol component
    //react đang quản lý cái value là control component;
    render() {
        return (
            <div className="container">
                <h1>Login</h1>
                <form onSubmit={this.handleSumit}>
                    <div className="form-group">
                        <label >Email address</label>
                        <input className="form-control" name="email" value={this.state.values.email} onChange={this.handleOnChange} onBlur={this.handleError} onKeyUp={this.handleError} />
                        <small className="text-danger">{this.state.errors.email}</small>
                    </div>
                    <div className="form-group">
                        <label >Password</label>
                        <input type="password" className="form-control" name="password" value={this.state.values.password} onChange={this.handleOnChange} onBlur={this.handleError} onKeyUp={this.handleError} />
                        <small className="text-danger">{this.state.errors.password}</small>

                    </div>

                    <button type="submit" className="btn btn-primary" disabled={!this.state.isValidForm}>Submit</button>
                </form>

            </div>
        )
    }
}
