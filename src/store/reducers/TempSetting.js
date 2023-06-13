import * as ACTION_TYPES from '../types';
import {TempSetting} from '../models';

export default (state = TempSetting, action) => {
  const {type, payload, error} = action;
  switch (type) {
    case ACTION_TYPES.SET_ON_BOARDING:
      return {
        ...state,
        isOnBoarding: payload,
      };

    case ACTION_TYPES.SET_FILTER_WORKORDER:
      return {
        ...state,
        filter: payload,
      };

    default:
      return state;
  }
};
