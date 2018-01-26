import { List, fromJS } from "immutable";

const initialState = fromJS({ loggedIn: false });

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_USER":
      return action.payload;
    case "LOGOUT_USER":
      return {};
    default:
      return state;
  }
}
