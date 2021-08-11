import React, { Component } from 'react'
import {connect} from 'react-redux';
 class ThongTinGame extends Component {
    render() {
        const{taiXiu,soBanThang,tongSoBanChoi} =this.props;
        return (
            <div className="mt-5">               
                <h1>BẠN CHỌN: <span className="text-danger">{taiXiu ? 'TÀI' : 'XỈU'}</span></h1>
                <h1>SỐ BÀN THẮNG: <span className="text-primary">{soBanThang}</span></h1>
                <h1>TỔNG SỐ BÀN CHƠI: <span className="text-success">{tongSoBanChoi}</span></h1>
            </div>
        )
    }
}
const mapStateToProps =(state)=>({
    taiXiu: state.gameXucXacReducer.taiXiu,
    soBanThang: state.gameXucXacReducer.soBanThang,
    tongSoBanChoi: state.gameXucXacReducer.tongSoBanChoi,
})
export default connect(mapStateToProps)(ThongTinGame);
