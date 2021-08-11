import XucXac from '../../lesson-5-6-7/game-xuc-xac-redux/XucXac';
import * as gameXucXacConstants from '../constants/gameXucXacConstants'

const inittialState = {
    arrXucXac: [
        { diem: 1, hinhAnh: './images/gameXucXac/1.png' },
        { diem: 1, hinhAnh: './images/gameXucXac/1.png' },
        { diem: 1, hinhAnh: './images/gameXucXac/1.png' },

    ],
    taiXiu: true,//true=>Tài(3->11), false=> xỉu(>=12)
    soBanThang: 0,
    tongSoBanChoi: 0,
};
const gameXucXacReducer = (state = inittialState, { type, payload }) => {
    switch (type) {
        case gameXucXacConstants.CHON_TAI_XIU:
            return { ...state, taiXiu: payload };
        case gameXucXacConstants.DAT_CUOC:
            state.tongSoBanChoi += 1;
            //Random xúc xắc
            const arrXucXacRandom = [];
            
            for (let i = 0; i < 3; i++) {
                const randomNum = Math.floor(Math.random() * 6) + 1;
                const xucXacRandom = {
                    diem: randomNum,
                    hinhAnh: `./images/gameXucXac/${randomNum}.png`,
                    
                }
                
                arrXucXacRandom.push(xucXacRandom);
            }
            
            // Tinh so ban thang
            const tongDiem = arrXucXacRandom.reduce((tongDiem,xucXac)=>{
                return tongDiem +=xucXac.diem;
            },0);
            //kiểm tra số bàn thắng
            if((state.taiXiu && tongDiem <=11) || (!state.taiXiu && tongDiem >=12)){
                state.soBanThang +=1;
            }
            return { ...state, arrXucXac: arrXucXacRandom };
        default:
            return state;
    }
};
export default gameXucXacReducer;