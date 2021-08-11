import React, { Component } from 'react'
import ThongTinGame from './ThongTinGame'
import XucXac from './XucXac';
import './GameXucXac.css';
import { connect } from 'react-redux';
import { actChonTaiXiu } from '../../store/actions/gameXucXacAction';
import { actDatCuoc } from '../../store/actions/gameXucXacAction';
class GameXucXac extends Component {
    render() {
        const { taiXiu, chonTaiXiu, datCuoc } = this.props;
        return (

            <div className="game-container text-center">
                <h1 className="py-5">GAME ĐỔ XÚC XẮC</h1>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-5">
                            <button className={`btnTaiXiu ${taiXiu && 'btnTaiXiuSelected'}`} onClick={() => chonTaiXiu(true)}>TÀI</button>
                        </div>
                        <div className="col-2 d-flex align-items-center justify-content-center">
                            <XucXac />
                        </div>
                        <div className="col-5">
                            <button className={`btnTaiXiu ${!taiXiu && 'btnTaiXiuSelected'}`} onClick={() => chonTaiXiu(false)}>XỈU</button>
                        </div>
                    </div>
                    <ThongTinGame />
                    <button className="mt-4 btn btn-success" onClick={() =>datCuoc()}>ĐẶT CƯỢC</button>
                </div>

            </div>
        )
    }
}
const mapStateToProps = state => ({
    taiXiu: state.gameXucXacReducer.taiXiu,
})
const mapDispatchToProps = dispatch => ({
    chonTaiXiu: taiXiu => {
        dispatch(actChonTaiXiu(taiXiu));
    },
    datCuoc: () =>{
        dispatch(actDatCuoc());
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(GameXucXac);
