import { LOGIN_SUCCESS, LOGIN_FAILURE } from "./actions";

const initialState = {
  isLoggedIn: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
}
