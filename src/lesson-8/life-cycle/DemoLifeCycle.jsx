import React, { Component } from 'react'
import Counter from './Counter'

export default class DemoLifeCycle extends Component {
    constructor(props){
        super(props);
        console.log('DemoLifeCycle>constructor');
        this.state ={
            isRemoveCounter: false,
        }
    }
    removeCounter =()=>{
        this.setState({isRemoveCounter:true});
    }
    render() {
        console.log('DemoLifeCycle>render');
        return (
            <div>
                <button onClick={this.removeCounter}> Remove Counter</button>
                {!this.state.isRemoveCounter &&<Counter/>}
            </div>
        )
    }
    componentDidMount(){
        console.log('DemoLifeCycle>componentDidMount');
    }
    // componentDidUpdate() {
    //     console.log('DemoLifeCycle>componentDidUpdate');
    // }
}
