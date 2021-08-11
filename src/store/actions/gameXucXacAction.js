import * as gameXucXacConstants from '../constants/gameXucXacConstants';

export const actChonTaiXiu = taiXiu =>({
    type: gameXucXacConstants.CHON_TAI_XIU,
    payload: taiXiu,
})
export const actDatCuoc = () =>({
    type: gameXucXacConstants.DAT_CUOC,
})