import * as ACTION_TYPES from '../types';
import { UserInterface } from '../models';

export default (state = UserInterface, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case ACTION_TYPES.SET_COLORS:
      return {
        ...state,
        colors: payload,
      };

    default:
      return state;
  }
};
