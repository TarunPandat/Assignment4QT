import { createAction } from "@reduxjs/toolkit";
import { LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS, SET_LOGIN_LOADER } from "../actionTypes/authActionTypes";

export const login = createAction<any>(LOGIN)
export const loginSuccess = createAction<any>(LOGIN_SUCCESS)
export const loginFailure = createAction<any>(LOGIN_FAILURE)
export const setLoader = createAction<boolean>(SET_LOGIN_LOADER)