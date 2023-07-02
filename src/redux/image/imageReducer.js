import { FETCH_SUCCESS, FETCH_REQUEST, FETCH_FAILURE } from "./imageTypes";

const initState = {
  isLoading: false,
  images: {},
  error: null,
};

const dataReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        images: action.payload,
        isLoading: false,
        error: null,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export default dataReducer;
