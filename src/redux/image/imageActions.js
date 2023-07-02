import { FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS } from "./imageTypes";

export const fetchRequest = () => ({
  type: FETCH_REQUEST,
});
export const fetchSuccess = (response) => ({
  type: FETCH_SUCCESS,
  payload: response,
});
export const fetchFailure = (error) => ({
  type: FETCH_FAILURE,
  payload: error,
});
