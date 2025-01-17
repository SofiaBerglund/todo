import _ from "lodash";
import {
  CREATE_TODO,
  FETCH_TODOS,
  EDIT_TODO,
  DELETE_TODO,
} from "../actions/types";

const todoReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case EDIT_TODO:
    case CREATE_TODO:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_TODO:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};

export default todoReducer;
