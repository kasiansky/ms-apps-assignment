import { performRequest } from "../../utils/api";
import { fetchRequest, fetchSuccess, fetchFailure } from "./imageActions";

export const fetchData = (params = "") => {
  console.log("params", params);
  return async (dispatch) => {
    try {
      // Dispatch an action to indicate the start of the request
      dispatch(fetchRequest());

      // Make the API request using the generic Axios function
      const response = await performRequest({
        params,
      });

      // Dispatch an action with the received data
      dispatch(fetchSuccess(response));
    } catch (error) {
      // Dispatch an action to indicate the error
      dispatch(fetchFailure(error));
    }
  };
};
