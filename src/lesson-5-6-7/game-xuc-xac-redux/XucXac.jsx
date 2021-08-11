import React, { Component } from 'react'
import { connect } from 'react-redux';

class XucXac extends Component {
    render() {
        return (
            <div>
                {this.props.arrXucXac.map((xucXac, idx) => {
                    return (<img className="mr-1" key={idx} src={xucXac.hinhAnh} width="50px" alt="" />
                    )
                }
                )}
            </div>

        )
    }
}
const mapStateToProps = state => ({
    arrXucXac: state.gameXucXacReducer.arrXucXac,
});
export default connect(mapStateToProps)(XucXac);