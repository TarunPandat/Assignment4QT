import { LOGIN_FAILURE, LOGIN_SUCCESS, SET_LOGIN_LOADER } from "../actionTypes/authActionTypes"

export interface I_initalState {
    token: string | null,
    user: any | {
        login_Id: number,
        emp_Name: string,
        userPhoto: null | string,
        mobile: string,
        email: string,
        clickToCallRight: boolean,
        whatsAppRight: boolean,
        whatsAppAPI: null | string,
        sourceDisplayRight: boolean,
        mobileDisplayRight: boolean,
        geoLocationForSiteVisit: boolean,
        dumpRight: true,
        transferRight: true,
        successRight: true,
        emailRight: true,
        smsRight: boolean,
        loginType: string,
        channelId: number,
        docNo: number,
        callerId: string,
        agentNumber: string,
        transferType: string,
        transferAutoManual: string,
        hRuserId: number
    },
    error: any,
    isLoading: boolean
}

const initialState: I_initalState = {
    user: null,
    token: null,
    error: null,
    isLoading: false
}


export default function AuthReducer(state = initialState, {type, payload}: any) {
    switch(type) {
        case LOGIN_SUCCESS:
            return {...state, user: payload?.userDetails, token: payload?.token, error: null}
        case LOGIN_FAILURE:
            return {...state, error: payload}
        case SET_LOGIN_LOADER:
            return {...state, isLoading: payload}
        default:
            return state
    }
}