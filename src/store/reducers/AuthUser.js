import * as ACTION_TYPES from "../types";
import { AuthUser } from "../models";

export default (state = AuthUser, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case ACTION_TYPES.AUTH:
      return {
        ...state,
        token: payload,
      };
    default:
      return state;
  }
};
