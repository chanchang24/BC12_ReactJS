import React, { Component } from 'react'

export default class Counter extends Component {
    // Chạy đầu tiên và chỉ chạy 1 lần
    // dùng để khởi tạo state
    constructor(props) {
        super(props);
        console.log('Counter>constructor');
        this.state = {
            counter: 0,
        }
    }
    // state = {
    //     counter: 0
    // }

    // cách viết trả về obj mới
    increase = () => {
        this.setState((state) => ({
            counter: state.counter += 1
        }));
    }
    decrease = () => {
        this.setState({ counter: (this.state.counter -= 1) });
    }

    // Chạy lại mỗi khi component được update (props || setState || forceUpdate)
    // Dùng để ngăn chặn component re-render không cần thiết (tối ưu performance);
    // Mặc định return true( luôn chạy hàm render), return false sẽ dừng
    // chỉ so sánh tham chiếu (cùng vùng nhớ là true, khác là false)
    shouldComponentUpdate() { 
        return true;
    }

    // Chạy sau constructor
    // Chạy lại mỗi khi component được update (props || setState || forceUpdate)
    render() {
        console.log('Counter>render');
        return (
            <div className="text-center">
                <div className="display-4">Counter:{this.state.counter}</div>
                <button onClick={this.increase}>Increase</button>
                {' '}
                <button onClick={this.decrease}>Decrease</button>
            </div>
        )
    }
    // Chạy 1 lần
    // Chạy sau khi component đã render
    // Dùng để thực hiện các side-effect (call API, send analytics event)
    componentDidMount() {
        console.log('Counter>componentDidMount');
    }
    //// Updating
    // Chạy lại mỗi khi component được update (props || setState || forceUpdate)
    // Chạy sau khi component đã update
    // Có thể call API dựa vào sự thay đổi của props
    componentDidUpdate(prevProps, prevState) {
        // kiểm tra điều kiện mới thực hiện vì nó được chạy lại nhiều lần
        // if( prevProps.useId !== this.props.useId){
        //     callAPI()
        // }
        console.log('Counter > componentDidUpdate');
    }
    // Chỉ chạy 1 lần và chạy khi component bị xóa khỏi DOM
    // Dùng để loại bỏ những cái dư thừa trước khi component bị xóa khỏi dom(vd: clearInterval,...)
    componentWillUnmount() {
        console.log('Counter > componentWillUnmount');
    }
}
