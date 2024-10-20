import {
  loginStart,
  loginSuccess,
  loginFailure,
  registerStart,
  registerSuccess,
  registerFailure,
  updateStart,
  updateSuccess,
  updateFailure,
} from "./userRedux";
import { publicRequest } from "../requestMethods";
import { userRequest } from "../requestMethods";
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFailure());
  }
};
export const update = async (id, user, dispatch) => {
  dispatch(updateStart());
  try {
    // update
    dispatch(updateSuccess({ id, user }));
  } catch (err) {
    dispatch(updateFailure());
  }
};
