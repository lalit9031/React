export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const loggedIn = (loginData) => {
  return {
    type: LOGIN_SUCCESS,
    payload: { isLoggedIn: true },
  };
};
